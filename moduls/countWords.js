const CreateCorrectWordsArr = require('./createCorrectWordsArr')

function CountWords(str) {

    let words = CreateCorrectWordsArr(str);

    let wordsCount = new Map();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let currEl = wordsCount.get(word);
        if (!currEl) {
            wordsCount.set(word, 1);
        } else {
            let currNum = +wordsCount.get(word) + 1;
            wordsCount.delete(word);
            wordsCount.set(word, currNum);
        }
    }

    PrintResult(wordsCount);
    
    return wordsCount;
    
}

function PrintResult(map) {
    map.forEach((value, key,) => {
        console.log(`${key}: ${value}`);
    });
    console.log('__________');
}

module.exports = CountWords;
