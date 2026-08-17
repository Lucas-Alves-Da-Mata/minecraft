(function() {
    'use strict';

    // ============================================
    // DATA
    // ============================================
    var MOBS_DATA = [
        { id:'sheep', name:'Ovelha', cat:'passive', desc:'Pacífica e fofinha, fornece lã para camas e decoração.', biome:'Planícies, Encostas', threat:1, tl:'low', emoji:'🐑', drops:[{i:'Lã',c:'100%'},{i:'Carneiro Cru',c:'50%'}] },
        { id:'cow', name:'Vaca', cat:'passive', desc:'Fonte de couro e carne. Essencial para iniciar uma fazenda.', biome:'Planícies, Florestas', threat:1, tl:'low', emoji:'🐄', drops:[{i:'Couro',c:'100%'},{i:'Bife Cru',c:'50%'}] },
        { id:'pig', name:'Porco', cat:'passive', desc:'Montável com uma cenoura. Fornece costeleta de porco.', biome:'Planícies, Florestas', threat:1, tl:'low', emoji:'🐖', drops:[{i:'Costeleta Crua',c:'100%'}] },
        { id:'chicken', name:'Galinha', cat:'passive', desc:'Solta penas e ovos. Pode ser usada para farms automáticas.', biome:'Planícies, Savanas', threat:1, tl:'low', emoji:'🐔', drops:[{i:'Pena',c:'100%'},{i:'Frango Cru',c:'50%'}] },
        { id:'axolotl', name:'Axolote', cat:'passive', desc:'Anfíbio aquatico que ajuda em batalhas subaquáticas.', biome:'Cavernas Lush', threat:1, tl:'low', emoji:'🦎', drops:[] },
        { id:'glow_squid', name:'Lula Brilhante', cat:'passive', desc:'Lula brilhante que solta sacos de tinta brilhante.', biome:'Oceanos', threat:1, tl:'low', emoji:'🦑', drops:[{i:'Saco de Tinta Brilhante',c:'100%'}] },
        { id:'wolf', name:'Lobo', cat:'neutral', desc:'Domesticável com ossos. Protege o jogador contra hostis.', biome:'Florestas, Taigas', threat:3, tl:'medium', emoji:'🐺', drops:[] },
        { id:'iron_golem', name:'Golem de Ferro', cat:'neutral', desc:'Protetor de vilas. Causa dano massivo a mobs hostis.', biome:'Vilas', threat:7, tl:'high', emoji:'🗿', drops:[{i:'Ferro',c:'100%'},{i:'Papoula',c:'50%'}] },
        { id:'panda', name:'Panda', cat:'neutral', desc:'Preguiçoso mas perigoso se irritado.', biome:'Bambuzais', threat:2, tl:'low', emoji:'🐼', drops:[{i:'Bambu',c:'100%'}] },
        { id:'creeper', name:'Creeper', cat:'hostile', desc:'Explosivo silencioso. Causa dano massivo em área.', biome:'Superfície', threat:8, tl:'high', emoji:'💥', drops:[{i:'Pólvora',c:'100%'},{i:'Disco',c:'8%'}] },
        { id:'zombie', name:'Zumbi', cat:'hostile', desc:'Morto-vivo lento mas persistente. Queima ao sol.', biome:'Superfície, Cavernas', threat:4, tl:'medium', emoji:'🧟', drops:[{i:'Carne Podre',c:'100%'},{i:'Batata',c:'2%'}] },
        { id:'skeleton', name:'Esqueleto', cat:'hostile', desc:'Arqueiro morto-vivo preciso. Ataca a distância.', biome:'Superfície, Cavernas', threat:6, tl:'medium', emoji:'💀', drops:[{i:'Flecha',c:'100%'},{i:'Osso',c:'50%'}] },
        { id:'strider', name:'Strider', cat:'hostile', desc:'Montável no Nether. Anda sobre lava.', biome:'Nether', threat:3, tl:'medium', emoji:'🕷️', drops:[{i:'Fio',c:'100%'}] },
        { id:'warden', name:'Guardião', cat:'hostile', desc:'Guardião cego das profundezas. Letal!', biome:'Ancient Cities', threat:10, tl:'high', emoji:'👁️', drops:[{i:'Catálise Sculk',c:'100%'}] }
    ];

    window.MCHub = window.MCHub || {};
    window.MCHub.MOBS_DATA = MOBS_DATA;
    window.MCHub.findMobById = function (id) {
        for (var i = 0; i < MOBS_DATA.length; i++) {
            if (MOBS_DATA[i].id === id) return MOBS_DATA[i];
        }
        return null;
    };

    var MODS_DATA = [
        { id:'optifine', title:'OptiFine', ver:'1.21', type:'performance', desc:'Otimização gráfica completa. Suporte a shaders e zoom.', loader:'Forge,Fabric', dl:'45M+', emoji:'⚡' },
        { id:'create', title:'Create', ver:'1.20', type:'tech', desc:'Automação mecânica criativa com engrenagens e correias.', loader:'Forge', dl:'12M+', emoji:'⚙️' },
        { id:'pixelmon', title:'Pixelmon', ver:'1.20', type:'mobs', desc:'Capture, treine e batalhe com Pokémon no Minecraft.', loader:'Forge', dl:'20M+', emoji:'🔴' },
        { id:'biomes', title:"Biomes O' Plenty", ver:'1.21', type:'decoration', desc:'Mais de 50 novos biomas exuberantes e únicos.', loader:'Forge,Fabric', dl:'18M+', emoji:'🌿' },
        { id:'twilight', title:'Twilight Forest', ver:'1.19', type:'dimensions', desc:'Nova dimensão mágica com chefes e masmorras.', loader:'Forge', dl:'15M+', emoji:'🌳' },
        { id:'sodium', title:'Sodium', ver:'1.21', type:'performance', desc:'Renderizador moderno que dobra o FPS.', loader:'Fabric', dl:'30M+', emoji:'🔆' },
        { id:'ae2', title:'AE2', ver:'1.20', type:'tech', desc:'Armazenamento avançado com ME Networks.', loader:'Forge', dl:'10M+', emoji:'💾' },
        { id:'ad_astra', title:'Ad Astra', ver:'1.20', type:'dimensions', desc:'Explore o espaço! Viaje para Lua e Marte.', loader:'Forge,Fabric', dl:'8M+', emoji:'🚀' },
        { id:'chipped', title:'Chipped', ver:'1.21', type:'decoration', desc:'Centenas de variantes de blocos decorativos.', loader:'Forge,Fabric', dl:'6M+', emoji:'🎨' },
        { id:'alexs_mobs', title:"Alex's Mobs", ver:'1.20', type:'mobs', desc:'Adiciona 90+ novos mobs inspirados na natureza.', loader:'Forge', dl:'14M+', emoji:'🦁' }
    ];

    var FEATURED_SKINS = [
        { name:'Cavaleiro de Pedra', stars:4.8, dl:'12.4k', mcname:'StoneKnight' },
        { name:'Hoodie Guy', stars:4.6, dl:'8.7k', mcname:'HoodieGuy' },
        { name:'Zumbi', stars:4.3, dl:'6.2k', mcname:'Zumbi' },
        { name:'Creeper', stars:4.9, dl:'15.1k', mcname:'Creeper' }
    ];

    // ============================================
    // TAB SWITCHER
    // ============================================
    var mobsController = null;

    function initTabs() {
        var tabs = document.querySelectorAll('.mc-tab');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                var target = tab.dataset.tab;
                document.querySelectorAll('.tab-content').forEach(function(s) { s.classList.remove('active'); });
                var el = document.getElementById('tab-' + target);
                if (el) el.classList.add('active');
                if (!mobsController) return;
                if (target === 'mobs') mobsController.refresh();
                else mobsController.dispose();
            });
        });
    }

    // ============================================
    // CANVAS BACKGROUND
    // ============================================
    function initBgCanvas() {
        var canvas = document.getElementById('bg-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var w, h;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        var particles = [];
        for (var i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                hue: Math.random() * 60 + 260, // purple-blue range
                alpha: Math.random() * 0.3 + 0.1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);

            // Dark gradient background
            var grad = ctx.createRadialGradient(w/2, h*0.4, 0, w/2, h*0.4, w*0.7);
            grad.addColorStop(0, '#1a0a2e');
            grad.addColorStop(0.3, '#0d0520');
            grad.addColorStop(1, '#050210');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            // Particles
            particles.forEach(function(p) {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'hsla(' + p.hue + ', 70%, 60%, ' + p.alpha + ')';
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }
        draw();
    }

    // ============================================
    // HOME - STEVE VIEWER (VESTIÁRIO)
    // ============================================
    var CHAR_VARIANTS = [
        { name:'Steve', mcname:'Steve' },
        { name:'Alex', mcname:'Alex' },
        { name:'Herobrine', mcname:'Herobrine' },
        { name:'Ninja', mcname:'Ninja' },
        { name:'Zumbi', mcname:'Zumbi' },
        { name:'Creeper', mcname:'Creeper' }
    ];

    function initSteveViewer() {
        var container = document.getElementById('player-3d');
        if (!container) return;
        var canvas = container.querySelector('canvas');
        if (!canvas) return;
        var currentVariant = 0;
        var viewer = null;
        var using3D = false;

        function skinUrl() {
            return 'https://mc-heads.net/skin/' + encodeURIComponent(CHAR_VARIANTS[currentVariant].mcname);
        }

        function bodyUrl() {
            return 'https://mc-heads.net/body/' + encodeURIComponent(CHAR_VARIANTS[currentVariant].mcname) + '/256';
        }

        function drawFallback() {
            canvas.style.backgroundImage = 'url(' + bodyUrl() + ')';
            canvas.style.backgroundSize = 'contain';
            canvas.style.backgroundRepeat = 'no-repeat';
            canvas.style.backgroundPosition = 'center';
            canvas.style.backgroundColor = 'rgba(0,0,0,0.4)';
        }

        function resize() {
            var rect = container.getBoundingClientRect();
            if (using3D && viewer) {
                viewer.setSize(rect.width, rect.height);
            } else {
                canvas.width = rect.width * 2;
                canvas.height = rect.height * 2;
                canvas.style.width = rect.width + 'px';
                canvas.style.height = rect.height + 'px';
                drawFallback();
            }
        }

        function init3D() {
            if (typeof skinview3d === 'undefined') return;
            using3D = true;
            var rect = container.getBoundingClientRect();
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            canvas.style.backgroundImage = 'none';
            viewer = new skinview3d.SkinViewer({
                canvas: canvas,
                width: rect.width,
                height: rect.height,
                skin: skinUrl(),
                animation: new skinview3d.WalkingAnimation(),
                autoRotate: true,
                autoRotateSpeed: 0.4
            });
            if (viewer.controls) viewer.controls.enableZoom = false;
        }

        init3D();
        resize();
        window.addEventListener('resize', resize);

        var vestBtn = document.querySelector('.btn-vestiario');
        if (vestBtn) {
            vestBtn.addEventListener('click', function() {
                currentVariant = (currentVariant + 1) % CHAR_VARIANTS.length;
                if (using3D && viewer) {
                    viewer.loadSkin(skinUrl());
                } else {
                    drawFallback();
                }
                showToast('Vestiário: ' + CHAR_VARIANTS[currentVariant].name);
            });
        }
    }

    // ============================================
    // SKINS - FEATURED
    // ============================================
    function initFeaturedSkins() {
        var previews = document.querySelectorAll('.skin-preview');
        if (!previews.length) return;

        previews.forEach(function(div, idx) {
            var skin = FEATURED_SKINS[idx] || { name:'Skin', mcname:'Steve' };
            var c = document.createElement('canvas');
            c.width = 200; c.height = 200;
            c.style.width = '100%';
            c.style.height = '100%';
            c.style.imageRendering = 'pixelated';
            div.appendChild(c);
            var url = 'https://mc-heads.net/body/' + encodeURIComponent(skin.mcname) + '/256';
            c.style.backgroundImage = 'url(' + url + ')';
            c.style.backgroundSize = 'contain';
            c.style.backgroundRepeat = 'no-repeat';
            c.style.backgroundPosition = 'center';
            c.style.backgroundColor = 'rgba(0,0,0,0.4)';
        });
    }

    // ============================================
    // SKINS - EDITOR
    // ============================================
    function initSkinEditor() {
        var canvas = document.getElementById('skin-editor-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var SIZE = 64, SCALE = 8;
        canvas.width = SIZE * SCALE;
        canvas.height = SIZE * SCALE;

        var pixels = [];
        for (var i = 0; i < SIZE * SIZE; i++) pixels.push('rgba(0,0,0,0)');

        var currentColor = '#55aaff';
        var currentTool = 'pencil';
        var currentLayer = 'base';
        var isDrawing = false;

        var colorPicker = document.getElementById('color-picker');
        if (colorPicker) {
            colorPicker.addEventListener('input', function(e) { currentColor = e.target.value; });
        }

        var toolBtns = document.querySelectorAll('[data-tool]');
        toolBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                toolBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                currentTool = btn.dataset.tool;
                canvas.style.cursor = currentTool === 'fill' ? 'cell' : currentTool === 'eyedropper' ? 'copy' : 'crosshair';
            });
        });

        var layerBtns = document.querySelectorAll('.layer-btn');
        layerBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                layerBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                currentLayer = btn.dataset.layer;
            });
        });

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#1a1a1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#222';
            for (var y = 0; y < SIZE; y++) {
                for (var x = 0; x < SIZE; x++) {
                    if ((x + y) % 2 === 0) ctx.fillRect(x*SCALE, y*SCALE, SCALE, SCALE);
                }
            }
            for (var i = 0; i < SIZE; i++) {
                for (var j = 0; j < SIZE; j++) {
                    var idx = i * SIZE + j;
                    var color = pixels[idx];
                    if (color && color !== 'rgba(0,0,0,0)') {
                        ctx.fillStyle = color;
                        ctx.fillRect(j * SCALE, i * SCALE, SCALE, SCALE);
                    }
                }
            }
            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.lineWidth = 0.5;
            for (var k = 0; k <= SIZE; k++) {
                ctx.beginPath(); ctx.moveTo(k*SCALE, 0); ctx.lineTo(k*SCALE, canvas.height); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(0, k*SCALE); ctx.lineTo(canvas.width, k*SCALE); ctx.stroke();
            }
        }

        function getPixel(r, c) { return pixels[r * SIZE + c]; }
        function setPixel(r, c, color) { if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) pixels[r * SIZE + c] = color; }

        function floodFill(sr, sc, fillColor) {
            var target = getPixel(sr, sc);
            if (target === fillColor) return;
            var stack = [[sr, sc]], visited = {};
            while (stack.length) {
                var cell = stack.pop(), r = cell[0], c = cell[1], key = r + ',' + c;
                if (visited[key] || r < 0 || r >= SIZE || c < 0 || c >= SIZE || getPixel(r,c) !== target) continue;
                visited[key] = true;
                setPixel(r, c, fillColor);
                stack.push([r-1,c],[r+1,c],[r,c-1],[r,c+1]);
            }
        }

        function getCanvasCoords(e) {
            var rect = canvas.getBoundingClientRect();
            var x = (e.clientX - rect.left) * (canvas.width / rect.width);
            var y = (e.clientY - rect.top) * (canvas.height / rect.height);
            return { row: Math.floor(y / SCALE), col: Math.floor(x / SCALE) };
        }

        function rgbToHex(rgba) {
            var m = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (!m) return '#55aaff';
            function h(x) { return ('0' + parseInt(x).toString(16)).slice(-2); }
            return '#' + h(m[1]) + h(m[2]) + h(m[3]);
        }

        function updatePreview() {
            var preview = document.getElementById('skin-preview-3d');
            if (!preview) return;
            var pc = preview.querySelector('canvas');
            if (!pc) return;
            var w = preview.clientWidth || 250, h = preview.clientHeight || 250;
            pc.width = w * 2; pc.height = h * 2;
            var pctx = pc.getContext('2d');
            pctx.fillStyle = '#0a0a0a';
            pctx.fillRect(0, 0, pc.width, pc.height);
            var bs = Math.min(w*2, h*2) * 0.35, cx = w;
            function drawQuad(px, py, pw, ph, tx, ty, tw, th) {
                var colors = [];
                for (var y = ty; y < ty + th && y < SIZE; y++)
                    for (var x = tx; x < tx + tw && x < SIZE; x++) {
                        var c = pixels[y * SIZE + x];
                        if (c && c !== 'rgba(0,0,0,0)') colors.push(c);
                    }
                pctx.fillStyle = colors[Math.floor(colors.length/2)] || '#4a6a8a';
                pctx.fillRect(Math.round(px), Math.round(py), Math.round(pw), Math.round(ph));
            }
            drawQuad(cx - bs*0.5, 10, bs*0.5, bs*0.5, 8, 0, 8, 8);
            drawQuad(cx - bs*0.3, 10 + bs*0.5, bs*0.3, bs*0.4, 20, 16, 8, 12);
            drawQuad(cx - bs*0.5 - 10, 10 + bs*0.5, bs*0.15, bs*0.4, 44, 16, 4, 12);
            drawQuad(cx - bs*0.15, 10 + bs*0.9, bs*0.12, bs*0.3, 4, 16, 4, 4);
        }

        function onPointerDown(e) {
            isDrawing = true;
            var pos = getCanvasCoords(e);
            if (!pos || pos.row < 0 || pos.row >= SIZE || pos.col < 0 || pos.col >= SIZE) return;

            if (currentTool === 'fill') {
                var fc = currentLayer === 'overlay' ? currentColor + '80' : currentColor;
                floodFill(pos.row, pos.col, fc);
                render(); updatePreview();
            } else if (currentTool === 'eyedropper') {
                var p = getPixel(pos.row, pos.col);
                if (p && p !== 'rgba(0,0,0,0)') { currentColor = p; if (colorPicker) colorPicker.value = rgbToHex(p); }
            } else if (currentTool === 'pencil' || currentTool === 'eraser') {
                var color = currentTool === 'eraser' ? 'rgba(0,0,0,0)' : (currentLayer === 'overlay' ? currentColor + '80' : currentColor);
                setPixel(pos.row, pos.col, color);
                render(); updatePreview();
            }
        }

        function onPointerMove(e) {
            if (!isDrawing) return;
            var pos = getCanvasCoords(e);
            if (!pos || pos.row < 0 || pos.row >= SIZE || pos.col < 0 || pos.col >= SIZE) return;
            if (currentTool === 'pencil' || currentTool === 'eraser') {
                var color = currentTool === 'eraser' ? 'rgba(0,0,0,0)' : (currentLayer === 'overlay' ? currentColor + '80' : currentColor);
                setPixel(pos.row, pos.col, color);
                render(); updatePreview();
            }
        }

        function onPointerUp() { isDrawing = false; }

        canvas.addEventListener('mousedown', onPointerDown);
        canvas.addEventListener('mousemove', onPointerMove);
        canvas.addEventListener('mouseup', onPointerUp);
        canvas.addEventListener('mouseleave', onPointerUp);
        canvas.addEventListener('touchstart', function(e) { e.preventDefault(); var t = e.touches[0]; onPointerDown({clientX:t.clientX,clientY:t.clientY}); });
        canvas.addEventListener('touchmove', function(e) { e.preventDefault(); var t = e.touches[0]; onPointerMove({clientX:t.clientX,clientY:t.clientY}); });
        canvas.addEventListener('touchend', onPointerUp);

        render();

        var exportBtn = document.getElementById('btn-export-skin');
        if (exportBtn) {
            exportBtn.addEventListener('click', function() {
                var ec = document.createElement('canvas');
                ec.width = SIZE; ec.height = SIZE;
                var ectx = ec.getContext('2d');
                for (var i = 0; i < SIZE; i++)
                    for (var j = 0; j < SIZE; j++) {
                        var col = pixels[i * SIZE + j];
                        if (col && col !== 'rgba(0,0,0,0)') { ectx.fillStyle = col; ectx.fillRect(j, i, 1, 1); }
                    }
                var link = document.createElement('a');
                link.download = 'skin_custom.png';
                link.href = ec.toDataURL('image/png');
                link.click();
            });
        }

        var clearBtn = document.getElementById('btn-clear-skin');
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                for (var i = 0; i < pixels.length; i++) pixels[i] = 'rgba(0,0,0,0)';
                render(); updatePreview();
            });
        }

        updatePreview();
    }

    // ============================================
    // MOBS
    // ============================================
    function initMobs() {
        var grid = document.getElementById('mob-grid');
        if (!grid) return;
        var filter = 'all', search = '';
        var viewers = [];

        function use3D() {
            return typeof window.Mob3D !== 'undefined' && window.Mob3D.available();
        }

        function mobTabVisible() {
            var el = document.getElementById('tab-mobs');
            return !!el && el.classList.contains('active');
        }

        function disposeViewers() {
            viewers.forEach(function(v) { try { v.dispose(); } catch (e) {} });
            viewers = [];
        }

        function render() {
            disposeViewers();
            grid.innerHTML = '';
            var filtered = MOBS_DATA.filter(function(m) {
                if (filter !== 'all' && m.cat !== filter) return false;
                if (search && m.name.toLowerCase().indexOf(search) === -1 && m.desc.toLowerCase().indexOf(search) === -1) return false;
                return true;
            });

            filtered.forEach(function(mob) {
                var card = document.createElement('div');
                card.className = 'mc-panel mob-card';

                var prev = document.createElement('div');
                prev.className = 'mob-card-preview';
                prev.innerHTML = '<span class="rotate-hint">ARRASTE PARA GIRAR 360°</span>';

                 var fc = document.createElement('canvas');
                 fc.className = 'mob-preview-fallback';
                 fc.width = 200; fc.height = 130;
                 prev.appendChild(fc);
                 var fctx = fc.getContext('2d');
                 fctx.fillStyle = '#000';
                 fctx.fillRect(0, 0, 200, 130);
                 fctx.font = '48px monospace';
                 fctx.textAlign = 'center';
                 fctx.textBaseline = 'middle';
                 fctx.fillStyle = '#fff';
                 fctx.fillText(mob.emoji, 100, 65);

                 card.addEventListener('click', function () {
                     window.location.href = 'mob.html?id=' + encodeURIComponent(mob.id);
                 });

                if (use3D() && mobTabVisible()) {
                    var vc = document.createElement('canvas');
                    vc.className = 'mob-preview-3d';
                    prev.appendChild(vc);
                    var viewer = window.Mob3D.createViewer(vc, mob.id, function() {
                        if (viewer) viewer.dispose();
                        if (vc.parentNode) vc.parentNode.removeChild(vc);
                    });
                    viewers.push(viewer);

                    (function(mobId) {
                        var sx = 0, sy = 0;
                        vc.addEventListener('pointerdown', function(e) { sx = e.clientX; sy = e.clientY; });
                        vc.addEventListener('pointerup', function(e) {
                            if (Math.abs(e.clientX - sx) < 5 && Math.abs(e.clientY - sy) < 5) {
                                window.location.href = 'mob.html?id=' + encodeURIComponent(mobId);
                            }
                        });
                    })(mob.id);
                }

                 var catLabel = mob.cat === 'passive'? 'Passivo' : mob.cat === 'hostile'? 'Hostil' : 'Neutro';
                 var html = '<div class="mob-card-header">';
                 html += '<span class="mob-emoji-small">' + mob.emoji + '</span>';
                 html += '<span class="mob-name">' + mob.name + '</span>';
                 html += '<span class="mob-category-badge mob-cat-' + mob.cat + '">' + catLabel + '</span>';
                 html += '</div>';
                 html += '<div class="mob-desc">' + mob.desc + '</div>';
                 html += '<div class="mob-detail"><span class="label">Bioma:</span> ' + mob.biome + '</div>';
                 html += '<div class="mob-detail"><span class="label">Threat:</span> <span class="mob-threat ' + mob.tl + '">' + mob.threat + '/10</span></div>';

                 if (mob.drops && mob.drops.length > 0) {
                     html += '<div class="mob-detail" style="margin-top:6px;"><span class="label">Drops:</span></div><div class="loot-table">';
                     mob.drops.forEach(function(d) {
                         html += '<div class="loot-slot">' + d.i.charAt(0) + '<span class="chance">' + d.c + '</span></div>';
                     });
                     html += '</div>';
                 } else {
                     html += '<div class="mob-detail" style="margin-top:6px;"><span class="label">Drops:</span> <span style="color:var(--mc-text-dim);">nenhum</span></div>';
                 }

                card.appendChild(prev);
                card.insertAdjacentHTML('beforeend', html);
                grid.appendChild(card);
            });
        }

        var filterBtns = document.querySelectorAll('.mob-filter-btn');
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                filter = btn.dataset.filter;
                render();
            });
        });

        var searchInput = document.getElementById('mob-search');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                search = e.target.value.toLowerCase().trim();
                render();
            });
        }
        mobsController = { refresh: render, dispose: disposeViewers };
        render();
    }

    // ============================================
    // MODS
    // ============================================
    function initMods() {
        var grid = document.getElementById('mods-grid');
        if (!grid) return;
        var f = { ver: 'all', type: 'all', sort: 'popular', search: '' };

        function render() {
            grid.innerHTML = '';
            var filtered = MODS_DATA.filter(function(m) {
                if (f.ver !== 'all' && m.ver.indexOf(f.ver) !== 0) return false;
                if (f.type !== 'all' && m.type !== f.type) return false;
                if (f.search && m.title.toLowerCase().indexOf(f.search) === -1 && m.desc.toLowerCase().indexOf(f.search) === -1) return false;
                return true;
            });

            var sorted = filtered.slice();
            if (f.sort === 'recent') sorted.sort(function(a,b) { return parseFloat(b.ver) - parseFloat(a.ver); });
            else if (f.sort === 'downloads') sorted.sort(function(a,b) { return parseInt(b.dl) - parseInt(a.dl); });
            else sorted.sort(function(a,b) { return parseInt(b.dl) - parseInt(a.dl); });

            sorted.forEach(function(mod) {
                var card = document.createElement('div');
                card.className = 'mc-panel mod-card';
                var tagsHtml = '';
                mod.loader.split(',').forEach(function(l) {
                    tagsHtml += '<span class="mod-tag ' + l.trim().toLowerCase() + '">' + l.trim() + '</span>';
                });
                card.innerHTML =
                    '<div class="mod-card-icon">' + mod.emoji + '</div>' +
                    '<div class="mod-title">' + mod.title + '</div>' +
                    '<div class="mod-version">v' + mod.ver + '</div>' +
                    '<div class="mod-desc">' + mod.desc + '</div>' +
                    '<div class="mod-tags">' + tagsHtml + '</div>' +
                    '<button class="mc-btn" style="width:100%;font-size:9px;padding:8px;">DOWNLOAD DIRECT</button>';
                var btn = card.querySelector('.mc-btn');
                if (btn) btn.addEventListener('click', function() { showToast('Download de ' + mod.title + ' iniciado!', 'success'); });
                grid.appendChild(card);
            });
        }

        var verSel = document.getElementById('filter-version');
        var typeSel = document.getElementById('filter-type');
        var sortSel = document.getElementById('filter-sort');
        var searchInput = document.getElementById('mod-search');

        function onChange() {
            f.ver = verSel ? verSel.value : 'all';
            f.type = typeSel ? typeSel.value : 'all';
            f.sort = sortSel ? sortSel.value : 'popular';
            f.search = searchInput ? searchInput.value.toLowerCase().trim() : '';
            render();
        }

        if (verSel) verSel.addEventListener('change', onChange);
        if (typeSel) typeSel.addEventListener('change', onChange);
        if (sortSel) sortSel.addEventListener('change', onChange);
        if (searchInput) searchInput.addEventListener('input', onChange);
        render();
    }

    // ============================================
    // MODAL + TOAST SYSTEM
    // ============================================
    var modalOverlay = null;

    function openModal(title, bodyHtml) {
        closeModal();
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'mc-modal-overlay';
        modalOverlay.innerHTML =
            '<div class="mc-modal">' +
            '<div class="mc-modal-header"><span class="mc-modal-title">' + title + '</span>' +
            '<button class="mc-modal-close">✕</button></div>' +
            '<div class="mc-modal-body">' + bodyHtml + '</div>' +
            '</div>';
        document.body.appendChild(modalOverlay);
        modalOverlay.querySelector('.mc-modal-close').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
    }

    function closeModal() {
        if (modalOverlay) { modalOverlay.remove(); modalOverlay = null; }
    }

    function showToast(msg, type) {
        var container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        var t = document.createElement('div');
        t.className = 'toast' + (type ? ' ' + type : '');
        t.textContent = msg;
        container.appendChild(t);
        setTimeout(function() {
            t.style.transition = 'opacity 0.3s';
            t.style.opacity = '0';
            setTimeout(function() { t.remove(); }, 320);
        }, 2600);
    }

    // ============================================
    // OPTIONS (OPÇÕES)
    // ============================================
    var OPTIONS = { sound: true, particles: true, cloud: false, fov: 70 };

    function loadOptions() {
        try { var saved = localStorage.getItem('mchub_options'); if (saved) OPTIONS = JSON.parse(saved); } catch (e) {}
    }

    function saveOptions() {
        try { localStorage.setItem('mchub_options', JSON.stringify(OPTIONS)); } catch (e) {}
    }

    function initOptionsButton() {
        var btn = document.querySelector('.btn-opcoes');
        if (!btn) return;
        btn.addEventListener('click', function() {
            var html =
                '<div class="toggle-row"><span>🎵 SOM</span><button class="mc-toggle' + (OPTIONS.sound ? ' on' : '') + '" data-opt="sound"></button></div>' +
                '<div class="toggle-row"><span>✨ PARTÍCULAS</span><button class="mc-toggle' + (OPTIONS.particles ? ' on' : '') + '" data-opt="particles"></button></div>' +
                '<div class="toggle-row"><span>☁️ NUVENS</span><button class="mc-toggle' + (OPTIONS.cloud ? ' on' : '') + '" data-opt="cloud"></button></div>' +
                '<div class="option-row"><label>FOV: <span id="fov-value">' + OPTIONS.fov + '</span></label>' +
                '<input type="range" class="mc-slider" id="fov-slider" min="30" max="110" value="' + OPTIONS.fov + '"></div>';
            openModal('OPÇÕES', html);
            modalOverlay.querySelectorAll('.mc-toggle').forEach(function(t) {
                t.addEventListener('click', function() {
                    var key = t.dataset.opt;
                    OPTIONS[key] = !OPTIONS[key];
                    t.classList.toggle('on', OPTIONS[key]);
                    saveOptions();
                });
            });
            var slider = modalOverlay.querySelector('#fov-slider');
            if (slider) slider.addEventListener('input', function() {
                OPTIONS.fov = parseInt(slider.value, 10);
                var v = modalOverlay.querySelector('#fov-value');
                if (v) v.textContent = OPTIONS.fov;
                saveOptions();
            });
        });
    }

    // ============================================
    // JOGAR - SERVER CONNECTION
    // ============================================
    function initPlayButton() {
        var btn = document.querySelector('.btn-jogar');
        if (!btn) return;
        btn.addEventListener('click', function() {
            var html =
                '<div class="server-log" id="server-log"></div>' +
                '<div class="server-info"><span>Servidor: hub.minecraft-brasil.net</span><span id="ping-info">Ping: --</span></div>' +
                '<div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>';
            openModal('CONECTANDO AO SERVIDOR', html);
            var lines = [
                ['Resolvendo DNS...', 'ok'],
                ['Conectando a hub.minecraft-brasil.net:25565...', 'wait'],
                ['Handshake realizado', 'ok'],
                ['Autenticando usuário...', 'ok'],
                ['Carregando mundo...', 'wait'],
                ['Entrando no lobby #1', 'ok']
            ];
            var logEl = document.getElementById('server-log');
            var fill = document.getElementById('progress-fill');
            var ping = document.getElementById('ping-info');
            var i = 0;
            function step() {
                if (!logEl || !modalOverlay) return;
                if (i >= lines.length) {
                    closeModal();
                    showToast('Conectado ao lobby #1!', 'success');
                    return;
                }
                var div = document.createElement('div');
                div.innerHTML = '<span class="log-' + lines[i][1] + '">» ' + lines[i][0] + '</span>';
                logEl.appendChild(div);
                logEl.scrollTop = logEl.scrollHeight;
                fill.style.width = Math.round(((i + 1) / lines.length) * 100) + '%';
                if (ping) ping.textContent = 'Ping: ' + (15 + Math.round(Math.random() * 40)) + 'ms';
                i++;
                setTimeout(step, 500 + Math.random() * 400);
            }
            setTimeout(step, 400);
        });
    }

    // ============================================
    // MARKETPLACE
    // ============================================
    var MARKET_ITEMS = [
        { name:'Capa Herói', icon:'🧥', price:'320 Minecoins' },
        { name:'Skin Neon', icon:'⚡', price:'540 Minecoins' },
        { name:'Espada Diamante', icon:'🗡️', price:'240 Minecoins' },
        { name:'Mochila Creeper', icon:'🎒', price:'410 Minecoins' },
        { name:'Casa Medieval', icon:'🏰', price:'1200 Minecoins' },
        { name:'Pet Dragão', icon:'🐉', price:'780 Minecoins' }
    ];

    function initMarketButton() {
        var btn = document.querySelector('.btn-market');
        if (!btn) return;
        btn.addEventListener('click', function() {
            var html = '<div class="market-grid">';
            MARKET_ITEMS.forEach(function(item, idx) {
                html += '<div class="market-item" data-idx="' + idx + '">' +
                    '<div class="market-item-icon">' + item.icon + '</div>' +
                    '<div class="market-item-name">' + item.name + '</div>' +
                    '<div class="market-item-price">' + item.price + '</div></div>';
            });
            html += '</div>';
            openModal('MARKETPLACE', html);
            modalOverlay.querySelectorAll('.market-item').forEach(function(el) {
                el.addEventListener('click', function() {
                    var item = MARKET_ITEMS[parseInt(el.dataset.idx, 10)];
                    closeModal();
                    showToast(item.name + ' comprado!', 'success');
                });
            });
        });
    }

    // ============================================
    // GALERIA
    // ============================================
    function initGallery() {
        var items = document.querySelectorAll('.gallery-item');
        items.forEach(function(item, idx) {
            var c = document.createElement('canvas');
            c.width = 64; c.height = 64;
            item.innerHTML = '';
            item.appendChild(c);
            var ctx = c.getContext('2d');
            var colors = ['#c68e5b', '#4a6a8a', '#3a7a3a', '#5a5a7a'];
            var col = colors[idx % colors.length];
            ctx.fillStyle = '#1a0a2e';
            ctx.fillRect(0, 0, 64, 64);
            ctx.fillStyle = col;
            ctx.fillRect(24, 18, 16, 20);
            ctx.fillStyle = '#c68e5b';
            ctx.fillRect(24, 6, 16, 14);
            ctx.fillStyle = '#fff';
            ctx.fillRect(27, 10, 3, 3); ctx.fillRect(34, 10, 3, 3);
            ctx.fillStyle = '#222';
            ctx.fillRect(28, 11, 1, 1); ctx.fillRect(35, 11, 1, 1);
            ctx.fillStyle = '#3a4a6a';
            ctx.fillRect(28, 38, 6, 10); ctx.fillRect(34, 38, 6, 10);
        });
    }

    // ============================================
    // SKINS - DOWNLOAD
    // ============================================
    function initSkinDownloads() {
        var cards = document.querySelectorAll('.skin-card');
        cards.forEach(function(card, idx) {
            var btn = card.querySelector('.mc-btn');
            if (!btn) return;
            btn.addEventListener('click', function() {
                var skin = FEATURED_SKINS[idx];
                if (!skin) return;
                var fname = skin.name.toLowerCase().replace(/\s+/g, '_') + '.png';
                fetch('https://mc-heads.net/skin/' + encodeURIComponent(skin.mcname))
                    .then(function(r) { return r.blob(); })
                    .then(function(blob) {
                        var url = URL.createObjectURL(blob);
                        var link = document.createElement('a');
                        link.download = fname;
                        link.href = url;
                        link.click();
                        setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
                        showToast('Skin "' + skin.name + '" baixada!', 'success');
                    })
                    .catch(function() { showToast('Falha ao baixar "' + skin.name + '"', 'error'); });
            });
        });
    }

    // ============================================
    // FOOTER ACTIONS
    // ============================================
    function initFooterActions() {
        var footer = document.querySelector('.footer-left');
        if (!footer) return;
        var enterBtn = footer.querySelector('.mc-btn');
        if (enterBtn) {
            enterBtn.addEventListener('click', function() {
                var html =
                    '<div class="option-row"><label>USUÁRIO</label><input type="text" class="mc-input" id="login-user" placeholder="Nome de usuário..."></div>' +
                    '<div class="option-row"><label>SENHA</label><input type="password" class="mc-input" id="login-pass" placeholder="Senha..."></div>' +
                    '<button class="mc-btn primary" id="login-submit" style="width:100%;font-size:10px;margin-top:4px;">ENTRAR</button>';
                openModal('FAZER LOGIN', html);
                var submit = modalOverlay.querySelector('#login-submit');
                submit.addEventListener('click', function() {
                    var user = modalOverlay.querySelector('#login-user').value.trim();
                    if (!user) { showToast('Digite um nome de usuário', 'error'); return; }
                    closeModal();
                    showToast('Bem-vindo(a), ' + user + '!', 'success');
                });
            });
        }
        var debugBtn = footer.querySelector('button:nth-child(2)');
        if (debugBtn) {
            debugBtn.addEventListener('click', function() {
                var html =
                    '<div class="option-row" style="margin-top:0;font-size:8px;color:var(--mc-text-dim);line-height:2;">' +
                    'RESOLUÇÃO: ' + window.innerWidth + 'x' + window.innerHeight +
                    '<br>PLATAFORMA: ' + navigator.platform +
                    '<br>IDIOMA: ' + (navigator.language || 'pt-BR') +
                    '<br>ONLINE: ' + navigator.onLine +
                    '<br>UA: ' + navigator.userAgent.substring(0, 60) + '...' +
                    '</div>';
                openModal('DIAGNÓSTICO', html);
            });
        }
    }

    // ============================================
    // INIT
    // ============================================
    function init() {
        loadOptions();
        initTabs();
        initBgCanvas();
        initSteveViewer();
        initFeaturedSkins();
        initGallery();
        initSkinDownloads();
        initSkinEditor();
        initMobs();
        initMods();
        initPlayButton();
        initOptionsButton();
        initMarketButton();
        initFooterActions();
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

})();
