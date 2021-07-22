"use strict";

var CreateCorrectWordsArr = require('../moduls/createCorrectWordsArr');

var CountWords = require('../moduls/countWords');

var input = 'qWe, Asd. QwE';
var output = new Map();
output.set('qwe', 2);
output.set('asd', 1); //  TODO tests on CountWords function

describe('return correct arr', function () {
  it('delete symbols and high letters, return array', function () {
    expect(CreateCorrectWordsArr('qq. Ww, SS')).toStrictEqual(['qq', 'ww', 'ss']);
  });
  it('work with empty string', function () {
    expect(CreateCorrectWordsArr('')).toStrictEqual([]);
  });
});
it('work word count', function () {
  expect(CountWords(input)).toStrictEqual(output);
});