/* -*- coding: UTF-8, tab-width: 2 -*- */
// eslint-disable-next-line spaced-comment
/*jslint indent: 2, maxlen: 80, browser: true */
/*globals define:true*/
(function setup() {
  'use strict';
  var EX = function makeRegExp(spec, addFlags) {
    var p = spec, f = (EX.flagsRx.exec(spec) || '');
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

  (function (e) { // alternate export
    /*global define: true */
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function () { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
