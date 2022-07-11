// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import rfu from '../rfu.js';
import tu from './libTestUtil.mjs';

import testBasics from './basics.mjs';

testBasics(rfu, tu);

console.info('+OK all tests passed.');
