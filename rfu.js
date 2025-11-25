'use strict';
(function setup() {
  const EX = function makeRegExp(spec, addFlags) {
    let p = spec;
    let f = (EX.flagsRx.exec(spec) || '');
    if (f) {
      p = p.slice(f[0].length);
      f = f[1];
    }
    if (addFlags) {
      if (!f) {
        f = addFlags;
      } else {
        // We have to merge, because node.js would fail on duplicate letters.
        (addFlags || '').replace(/\w/g, function add(a) {
          if (f.indexOf(a) < 0) { f += a; }
        });
      }
    }
    return new RegExp(p, f);
  };

  EX.flagsRx = /^\(\?(\w*):\)/;

  (function universalExport(e) {
    /* globals define:true */
    const d = ((typeof define === 'function') && define);
    const m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function amdFactory() { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
