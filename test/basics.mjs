// -*- coding: utf-8, tab-width: 2 -*-

export default function tests(rfu, testUtil) {
  const t = testUtil.verifyOneSpec;
  t(rfu('hello'), 'hello', '');
  t(rfu('/hello/ig'), '\\/hello\\/ig', '');
  t(rfu('(?:ig)hello'), '(?:ig)hello', '');
  t(rfu('(?ig:)hello'), 'hello', 'gi');
  t(rfu('(?ig:)hello', 'gu'), 'hello', 'giu');
  console.info('+OK basics tests passed.');
};
