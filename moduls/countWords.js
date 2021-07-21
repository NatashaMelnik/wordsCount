const CreateCorrectWordsArr = require('./createCorrectWordsArr')

function CountWords(str) {

    let wordsArr = CreateCorrectWordsArr(str);

    let wordsCount = new Map();

    for (let i = 0; i < wordsArr.length; i++) {
        if (!wordsCount.has(wordsArr[i])) {
            wordsCount.set(wordsArr[i], 1);
        }
        else {
            let currNum = +wordsCount.get(wordsArr[i]) + 1;
            wordsCount.delete(wordsArr[i]);
            wordsCount.set(wordsArr[i], currNum);
        }
    }

    PrintResult(wordsCount);

}

function PrintResult(map) {
    map.forEach((value, key,) => {
        console.log(`${key}: ${value}`);
    });
    console.log('__________');
}

module.exports = CountWords;
