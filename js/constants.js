(function () {
  'use strict';

  window.MCHub = window.MCHub || {};

  window.MCHub.CONST = {
    BG_PARTICLE_COUNT: 80,
    BG_PARTICLE_SPEED: 0.3,
    BG_PARTICLE_HUE_MIN: 260,
    BG_PARTICLE_HUE_RANGE: 60,
    BG_PARTICLE_ALPHA_MIN: 0.1,
    BG_PARTICLE_ALPHA_RANGE: 0.3,
    BG_PARTICLE_SIZE_MIN: 0.5,
    BG_PARTICLE_SIZE_RANGE: 2,

    SKIN_SIZE: 64,
    SKIN_SCALE: 8,
    SKIN_DEFAULT_COLOR: '#55aaff',
    FILL_STACK_LIMIT: 50000,

    MOB3D_PIXEL_RATIO_MAX: 2,
    MOB3D_FOV: 32,
    MOB3D_FIT_FACTOR: 1.45,
    MOB3D_ROTATION_SPEED: 0.01,

    TOAST_DURATION: 2600,
    TOAST_FADE_DURATION: 320,
    FETCH_TIMEOUT_MS: 10000,
    SORT_VERSION_FALLBACK: 0
  };

  window.MCHub.CATEGORY_LABELS = { passive: 'Passivo', neutral: 'Neutro', hostile: 'Hostil' };

  window.MCHub.formatCategory = function (cat) {
    return window.MCHub.CATEGORY_LABELS[cat] || cat;
  };

  window.MCHub.parseVersion = function (ver) {
    if (!ver) return window.MCHub.CONST.SORT_VERSION_FALLBACK;
    var parts = ver.split('.');
    var major = parseInt(parts[0], 10) || 0;
    var minor = parseInt(parts[1], 10) || 0;
    return major * 100 + minor;
  };

  window.MCHub.fetchWithTimeout = function (url, ms) {
    var timeout = ms || window.MCHub.CONST.FETCH_TIMEOUT_MS;
    var controller = new AbortController();
    var id = setTimeout(function () { controller.abort(); }, timeout);
    return fetch(url, { signal: controller.signal }).then(function (r) {
      clearTimeout(id);
      return r;
    }).catch(function (err) {
      clearTimeout(id);
      throw err;
    });
  };

  window.MCHub.isValidSkinUrl = function (url) {
    try {
      var parsed = new URL(url);
      return parsed.protocol === 'https:';
    } catch (e) {
      return false;
    }
  };

  window.MCHub.trapFocus = function (overlay) {
    if (!overlay) return;
    var focusable = overlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    function handler(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    overlay.addEventListener('keydown', handler);
    first.focus();
    return function () { overlay.removeEventListener('keydown', handler); };
  };
})();
