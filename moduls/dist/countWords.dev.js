"use strict";

var CreateCorrectWordsArr = require('./createCorrectWordsArr');

function CountWords(str) {
  var words = CreateCorrectWordsArr(str);
  var wordsCount = new Map();

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var currEl = wordsCount.get(word);

    if (!currEl) {
      wordsCount.set(word, 1);
    } else {
      var currNum = +wordsCount.get(word) + 1;
      wordsCount["delete"](word);
      wordsCount.set(word, currNum);
    }
  }

  PrintResult(wordsCount);
  return wordsCount;
}

function PrintResult(map) {
  map.forEach(function (value, key) {
    console.log("".concat(key, ": ").concat(value));
  });
  console.log('__________');
}

module.exports = CountWords;