const CreateCorrectWordsArr = require('../moduls/createCorrectWordsArr');

describe('return correct arr', () => {
    it('delete symbols and high letters, return array', () => {
        expect(CreateCorrectWordsArr('qq. Ww, SS')).toStrictEqual(['qq', 'ww', 'ss']);
    });

    it('work with empty string', () => {
        expect(CreateCorrectWordsArr('')).toStrictEqual([]);
    });

});