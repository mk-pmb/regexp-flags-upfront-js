// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

const eq = assert.strictEqual;

const tu = {

  verifyOneSpec(rx, wantPattern, wantFlags) {
    eq(Object.getPrototypeOf(rx), RegExp.prototype);
    eq(rx.source, wantPattern);
    eq(rx.flags, wantFlags);
  },

};


export default tu;
