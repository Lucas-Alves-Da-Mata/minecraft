(function () {
  'use strict';

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function qs(sel) { return document.querySelector(sel); }

  function safeId(id) {
    var ids = ['axolotl', 'chicken', 'cow', 'creeper', 'glow_squid', 'iron_golem',
      'panda', 'pig', 'sheep', 'skeleton', 'strider', 'warden', 'wolf', 'zombie'];
    for (var i = 0; i < ids.length; i++) if (ids[i] === id) return id;
    return null;
  }

  function initViewer(mobId) {
    var canvas = qs('#mob-detail-canvas');
    if (!canvas) return;
    if (typeof window.Mob3D === 'undefined' || !window.Mob3D.available()) {
      if (canvas.style) canvas.style.backgroundImage = 'url(https://mc-heads.net/body/' + encodeURIComponent(mobId) + '/256)';
      return;
    }
    var viewer = window.Mob3D.createViewer(canvas, mobId, function (err) {
      var fb = qs('#mob-detail-canvas');
      if (fb && fb.style) fb.style.backgroundImage = 'url(https://mc-heads.net/body/' + encodeURIComponent(mobId) + '/256)';
      if (fb && fb.style) fb.style.backgroundSize = 'contain';
      if (fb && fb.style) fb.style.backgroundRepeat = 'no-repeat';
      if (fb && fb.style) fb.style.backgroundPosition = 'center';
      if (fb) fb.style.backgroundColor = 'rgba(0,0,0,0.4)';
    });
    return viewer;
  }

  function buildDrops(drops) {
    var wrap = qs('#mob-detail-drops-wrap');
    if (!wrap) return;
    if (!drops || !drops.length) {
      wrap.innerHTML = '<div class="mob-stat"><span class="label">Drops:</span> <span style="color:var(--mc-text-dim);">nenhum</span></div>';
      return;
    }
    var html = '<div class="mob-stat" style="margin-top:0.6rem;"><span class="label">Drops:</span></div>' +
      '<div class="loot-table">';
    drops.forEach(function (d) {
      html += '<div class="loot-slot">' + d.i.charAt(0) +
        '<span class="chance">' + d.c + '</span></div>';
    });
    html += '</div>';
    wrap.innerHTML = html;
  }

  function render(mob) {
    qs('#mob-detail-error').style.display = 'none';
    qs('#mob-detail-grid').style.display = 'block';

    qs('#mob-detail-title').textContent = mob.name;
    qs('#mob-detail-emoji').textContent = mob.emoji;
    var catLabel = mob.cat === 'passive' ? 'Passivo' : mob.cat === 'hostile' ? 'Hostil' : 'Neutro';
    qs('#mob-detail-category').textContent = catLabel;
    qs('#mob-detail-category').className = 'mob-category-badge mob-cat-' + mob.cat;
    qs('#mob-detail-biome').textContent = mob.biome;
    qs('#mob-detail-cat-name').textContent = (mob.cat === 'passive' ? 'Passivo' : mob.cat === 'hostile' ? 'Hostil' : 'Neutro');
    qs('#mob-detail-desc').textContent = mob.desc;
    buildDrops(mob.drops);

    var threat = qs('#mob-detail-threat');
    threat.textContent = mob.threat + '/10';
    threat.className = 'mob-threat ' + (mob.tl || 'low');

    var threatBar = qs('#mob-detail-threatbar');
    if (threatBar) {
      var t = Math.max(0, Math.min(10, Number(mob.threat) || 0));
      var cells = '';
      for (var i = 0; i < 10; i++) cells += i < t ? '■' : '□';
      threatBar.innerHTML = '<span class="label">Perigo:</span> <span class="mob-threat ' + (mob.tl || 'low') + '">' + cells + '</span>';
    }

    initViewer(mob.id);
  }

  function main() {
    var id = getQueryParam('id');
    var mob = null;
    if (id) {
      if (window.MCHub && window.MCHub.findMobById) {
        mob = window.MCHub.findMobById(id);
      }
      if (!mob && window.MCHub && window.MCHub.MOBS_DATA) {
        var list = window.MCHub.MOBS_DATA;
        for (var i = 0; i < list.length; i++) if (list[i].id === id) { mob = list[i]; break; }
      }
    }
    if (!mob) {
      if (id && safeId(id)) {
        // geometry/textures exist but data missing -> fallback render
        render({
          id: id, name: id.toUpperCase(), cat: 'neutral',
          desc: 'Detalhes indisponiveis.', biome: '-',
          threat: 0, tl: 'low', emoji: '?', drops: []
        });
      } else {
        qs('#mob-detail-error').style.display = 'block';
        qs('#mob-detail-grid').style.display = 'none';
      }
      return;
    }
    render(mob);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
