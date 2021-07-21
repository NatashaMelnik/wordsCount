function CountWords(str) {
    let wordsArr = CreateCorrectWordsArr(str);

    let wordsCount = new Map();

    for (let i = 0; i < wordsArr.length; i++) {
        if (!wordsCount.has[wordsArr[i]]) {
            wordsCount.set(wordsArr[i], 1);
        }
        else {
            wordsCount.set(wordsArr[i], 2);
        }
    }

    return wordsCount

}

function CreateCorrectWordsArr(str) {
    sameStyleWordArr = str.toLowerCase().replace(/[.,!—]/g, ' ').split(' ').filter(word => word.length !== 0);

    return sameStyleWordArr;
}

module.exports = CountWords;