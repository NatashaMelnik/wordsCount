const CreateCorrectWordsArr = require('../moduls/createCorrectWordsArr');
const CountWords = require('../moduls/countWords');

const input = 'qWe, Asd. QwE';
const output = new Map();
output.set('qwe', 2);
output.set('asd', 1);

//  TODO tests on CountWords function

describe('return correct arr', () => {
    it('delete symbols and high letters, return array', () => {
        expect(CreateCorrectWordsArr('qq. Ww, SS')).toStrictEqual(['qq', 'ww', 'ss']);
    });

    it('work with empty string', () => {
        expect(CreateCorrectWordsArr('')).toStrictEqual([]);
    });

});

it('work word count', () => {
    expect(CountWords(input)).toStrictEqual(output);
});