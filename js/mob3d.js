/* ============================================================
   Mob3D — Renderiza mobs do Minecraft em 3D (rotação 360°) nos cards
   - Lê modelos Bedrock (.geo.json) embutidos em mob3d.data.js
   - Lê texturas PNG locais (assets/mobs/textures)
   - Convenção (padrão Bedrock -> Three.js):
       * Z negado (Bedrock "south" = +Z  ->  three.js -Z)
       * rotações de osso: (+rx, -ry, -rz), ordem Euler ZYX
       * box UV: tira lateral [west][north][east][south]
   ============================================================ */
(function () {
  'use strict';

  var ASSETS = 'assets/mobs/';

  // Geometria/textura por mob. geo = null => primeira geometria do arquivo.
  var CONFIG = {
    axolotl:    { tex: 'textures/axolotl.png' },
    chicken:    { geo: 'geometry.chicken.v1.12', tex: 'textures/chicken.png' },
    cow:        { geo: 'geometry.cow.v2', tex: 'textures/cow.png' },
    creeper:    { geo: 'geometry.creeper.v1.8', tex: 'textures/creeper.png' },
    glow_squid: { geo: 'geometry.glow_squid', tex: 'textures/glow_squid.png' },
    iron_golem: { geo: 'geometry.irongolem', tex: 'textures/iron_golem.png' },
    panda:      { geo: 'geometry.panda', tex: 'textures/panda.png' },
    pig:        { geo: 'geometry.pig.v3', tex: 'textures/pig.png' },
    sheep:      { layers: [
        { geo: 'geometry.sheep.sheared.v1.8', tex: 'textures/sheep.png' },
        { geo: 'geometry.sheep.v1.8',         tex: 'textures/sheep_fur.png' }
    ]},
    skeleton:   { geo: 'geometry.skeleton.v1.8', tex: 'textures/skeleton.png' },
    strider:    { geo: 'geometry.strider', tex: 'textures/strider.png' },
    warden:     { geo: 'geometry.warden', tex: 'textures/warden.png' },
    wolf:       { geo: 'geometry.wolf', tex: 'textures/wolf.png' },
    zombie:     { geo: 'geometry.zombie.v1.8', tex: 'textures/zombie.png' }
  };

  var _images = {};   // caminho da textura -> Promise<Image>
  var _built = {};    // slug -> Promise<THREE.Group>

  function loadImage(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error('Falha ao carregar textura: ' + url)); };
      img.src = url;
    });
  }

  function getTexture(texPath) {
    if (!_images[texPath]) {
      var src = (window.MOB3D_TEXTURES && window.MOB3D_TEXTURES[texPath]) || (ASSETS + texPath);
      _images[texPath] = loadImage(src);
    }
    return _images[texPath];
  }

  function layersOf(cfg) {
    if (cfg.layers) return cfg.layers;
    return [{ geo: cfg.geo || null, tex: cfg.tex }];
  }

  function findGeometry(parsed, geoId) {
    var list = parsed['minecraft:geometry'];
    if (Array.isArray(list)) {
      if (geoId) {
        for (var i = 0; i < list.length; i++) {
          if (list[i].description && list[i].description.identifier === geoId) return list[i];
        }
      }
      return list[0] || null;
    }
    // formato antigo (1.8.0): as chaves são os ids de geometria
    var keys = Object.keys(parsed).filter(function (k) { return k !== 'format_version'; });
    if (geoId && parsed[geoId]) return parsed[geoId];
    return keys.length ? parsed[keys[0]] : null;
  }

  function geoInfo(geo) {
    var d = geo.description || geo;
    return {
      tw: d.texture_width || d.texturewidth || 64,
      th: d.texture_height || d.textureheight || 64,
      bones: geo.bones || []
    };
  }

  /* Regiões box UV por face (ordem THREE.BoxGeometry: px,nx,py,ny,pz,nz).
     Mirror troca east<->west e espelha horizontalmente todas as faces. */
  function boxUVRects(u, v, dx, dy, dz, mirror) {
    var rects = [
      { x: u + dz + dx, y: v + dz, w: dz, h: dy },            // east  (+X)
      { x: u,           y: v + dz, w: dz, h: dy },            // west  (-X)
      { x: u + dz,      y: v,      w: dx, h: dz },            // up    (+Y)
      { x: u + dz + dx, y: v,      w: dx, h: dz },            // down  (-Y)
      { x: u + dz,      y: v + dz, w: dx, h: dy },            // north (+Z)
      { x: u + dz + dx + dz, y: v + dz, w: dx, h: dy }        // south (-Z)
    ];
    if (mirror) {
      var tmp = rects[0]; rects[0] = rects[1]; rects[1] = tmp;
      for (var i = 0; i < 6; i++) rects[i].flip = true;
    }
    return rects;
  }

  function regionTexture(tex, x, y, w, h, flip) {
    if (!tex || w <= 0 || h <= 0) return null;
    var W = Math.max(1, Math.round(w));
    var H = Math.max(1, Math.round(h));
    var canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    if (flip) {
      ctx.translate(W, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(tex, x, y, w, h, 0, 0, W, H);
    var t = new THREE.CanvasTexture(canvas);
    t.magFilter = THREE.NearestFilter;
    t.minFilter = THREE.NearestFilter;
    return t;
  }

  function buildCube(cube, boneInflate, tex, boneMirror, bonePivot) {
    var o = cube.origin || [0, 0, 0];
    var s = cube.size || [0, 0, 0];
    var dx = s[0], dy = s[1], dz = s[2];
    var inf = (cube.inflate != null ? cube.inflate : boneInflate) || 0;
    var mirror = cube.mirror != null ? cube.mirror : boneMirror;
    var ex = dx + inf * 2, ey = dy + inf * 2, ez = dz + inf * 2;
    var px = bonePivot ? bonePivot[0] : 0;
    var py = bonePivot ? bonePivot[1] : 0;
    var pz = bonePivot ? bonePivot[2] : 0;

    var geom = new THREE.BoxGeometry(ex, ey, ez);
    geom.translate(o[0] + dx / 2 - px, o[1] + dy / 2 - py, -(o[2] + dz / 2) + pz);

    var uv = cube.uv;
    var u = Array.isArray(uv) ? uv[0] : 0;
    var v = Array.isArray(uv) ? uv[1] : 0;

    var rects = boxUVRects(u, v, dx, dy, dz, mirror);
    var flat = ex <= 0.001 || ey <= 0.001 || ez <= 0.001;
    var mats = [];
    for (var f = 0; f < 6; f++) {
      var r = rects[f];
      var ct = regionTexture(tex, r.x, r.y, r.w, r.h, r.flip);
      mats.push(ct
        ? new THREE.MeshLambertMaterial({ map: ct, alphaTest: 0.3, side: flat ? THREE.DoubleSide : THREE.FrontSide })
        : new THREE.MeshLambertMaterial({ color: 0x000000 }));
    }
    var mesh = new THREE.Mesh(geom, mats);

    if (cube.rotation) {
      var p = cube.pivot || [o[0] + dx / 2, o[1] + dy / 2, o[2] + dz / 2];
      var r = cube.rotation;
      var e = new THREE.Euler(
        THREE.MathUtils.degToRad(r[0]),
        -THREE.MathUtils.degToRad(r[1]),
        -THREE.MathUtils.degToRad(r[2]),
        'ZYX'
      );
      var rp = [p[0] - px, p[1] - py, p[2] - pz];
      var m = new THREE.Matrix4()
        .makeTranslation(rp[0], rp[1], -rp[2])
        .multiply(new THREE.Matrix4().makeRotationFromEuler(e))
        .multiply(new THREE.Matrix4().makeTranslation(-rp[0], -rp[1], rp[2]));
      geom.applyMatrix4(m);
    }
    return mesh;
  }

  function buildBones(geo, info, tex) {
    var root = new THREE.Group();
    var map = {};
    var bones = info.bones;
    bones.forEach(function (b) {
      var g = new THREE.Group();
      g.name = b.name;
      map[b.name] = { group: g, pivot: b.pivot || [0, 0, 0] };
    });
    bones.forEach(function (b) {
      var entry = map[b.name];
      var g = entry.group;
      var parent = b.parent ? map[b.parent] : null;
      var p = entry.pivot;
      if (parent) {
        var pp = parent.pivot;
        g.position.set(p[0] - pp[0], p[1] - pp[1], -(p[2] - pp[2]));
        parent.group.add(g);
      } else {
        g.position.set(p[0], p[1], -p[2]);
        root.add(g);
      }
    });
    bones.forEach(function (b) {
      if (b.neverRender) return;
      var entry = map[b.name];
      var g = entry.group;
      if (b.rotation) {
        var r = b.rotation;
        g.rotation.order = 'ZYX';
        g.rotation.set(
          THREE.MathUtils.degToRad(r[0]),
          -THREE.MathUtils.degToRad(r[1]),
          -THREE.MathUtils.degToRad(r[2])
        );
      }
      if (b.cubes) {
        var boneInflate = b.inflate || 0;
        var bonePivot = entry.pivot;
        b.cubes.forEach(function (cube) {
          var mesh = buildCube(cube, boneInflate, tex, b.mirror || false, bonePivot);
          if (mesh) g.add(mesh);
        });
      }
    });
    return root;
  }

  function buildAsset(slug) {
    if (_built[slug]) return _built[slug];
    var cfg = CONFIG[slug];
    var parsed = window.MOB3D_MODELS[slug];
    if (!parsed) return Promise.reject(new Error('Modelo não encontrado: ' + slug));
    var layers = layersOf(cfg);
    var p = Promise.all(layers.map(function (l) { return getTexture(l.tex); }))
      .then(function (imgs) {
        var texMap = {};
        layers.forEach(function (l, i) { texMap[l.tex] = imgs[i]; });
        var group = new THREE.Group();
        layers.forEach(function (layer) {
          var geo = findGeometry(parsed, layer.geo);
          if (!geo) return;
          var info = geoInfo(geo);
          var tex = texMap[layer.tex];
          if (!tex) return;
          group.add(buildBones(geo, info, tex));
        });
        return group;
      })
      .catch(function (err) {
        delete _built[slug];
        throw err;
      });
    _built[slug] = p;
    return p;
  }

  /* ============ Viewer ============ */

  function MobViewer(canvas, slug, onError) {
    var self = this;
    this.slug = slug;
    this.canvas = canvas;
    this.disposed = false;
    this.onError = onError;
    this.userRot = false;

    var parent = canvas.parentElement;
    var w = canvas.clientWidth || (parent ? parent.clientWidth : 0) || 270;
    var h = canvas.clientHeight || (parent ? parent.clientHeight : 0) || 130;

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setSize(w, h, false);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(32, w / h, 0.01, 100);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    var d1 = new THREE.DirectionalLight(0xffffff, 0.9);
    d1.position.set(2, 3, 4);
    var d2 = new THREE.DirectionalLight(0xffffff, 0.35);
    d2.position.set(-2, 1, -4);
    this.scene.add(d1, d2);

    this.controls = new THREE.OrbitControls(this.camera, canvas);
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.target.set(0, 0, 0);

    this.model = new THREE.Group();
    this.scene.add(this.model);

    canvas.addEventListener('pointerdown', function () { self.userRot = true; });
    window.addEventListener('pointerup', function () {
      setTimeout(function () { self.userRot = false; }, 500);
    });

    if (window.ResizeObserver) {
      this.ro = new ResizeObserver(function () { self.resize(); });
      this.ro.observe(parent || canvas);
    }

    this._tick();
    buildAsset(slug).then(function (g) {
      if (self.disposed) return;
      self.model.add(g);
      self.fitCamera();
    }).catch(function (err) {
      if (!self.disposed && self.onError) self.onError(err);
    });
  }

  MobViewer.prototype._tick = function () {
    var self = this;
    function loop() {
      if (self.disposed) return;
      requestAnimationFrame(loop);
      if (!self.userRot) self.model.rotation.y += 0.01;
      self.controls.update();
      self.renderer.render(self.scene, self.camera);
    }
    loop();
  };

  MobViewer.prototype.fitCamera = function () {
    var box = new THREE.Box3().setFromObject(this.model);
    if (box.isEmpty()) return;
    var center = new THREE.Vector3();
    var size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);
    var maxDim = Math.max(size.x, size.y, size.z) || 1;
    var fov = this.camera.fov * Math.PI / 180;
    var dist = (maxDim / 2) / Math.tan(fov / 2) * 1.45;
    this.model.position.set(-center.x, 0, -center.z);
    this.controls.target.set(0, center.y, 0);
    this.camera.position.set(0, center.y + size.y * 0.12, dist);
    this.camera.near = Math.max(0.01, dist / 100);
    this.camera.far = dist * 100;
    this.camera.updateProjectionMatrix();
    this.controls.update();
  };

  MobViewer.prototype.resize = function () {
    if (this.disposed) return;
    var parent = this.canvas.parentElement;
    var w = this.canvas.clientWidth || (parent ? parent.clientWidth : 0);
    var h = this.canvas.clientHeight || (parent ? parent.clientHeight : 0);
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  };

  MobViewer.prototype.dispose = function () {
    if (this.disposed) return;
    this.disposed = true;
    if (this.ro) this.ro.disconnect();
    this.controls.dispose();
    this.scene.traverse(function (o) {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) {
          if (m.map) m.map.dispose();
          m.dispose();
        });
      }
    });
    this.renderer.dispose();
    if (this.renderer.forceContextLoss) this.renderer.forceContextLoss();
  };

  window.Mob3D = {
    available: function () {
      return typeof THREE !== 'undefined' &&
        typeof THREE.WebGLRenderer === 'function' &&
        typeof THREE.OrbitControls === 'function' &&
        window.MOB3D_MODELS;
    },
    createViewer: function (canvas, slug, onError) {
      return new MobViewer(canvas, slug, onError);
    }
  };
})();
