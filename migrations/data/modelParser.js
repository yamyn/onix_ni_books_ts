const code3 = require('./json/code3.json').code3.translations;
const description = require('./json/description.json').description.translations;
const title = require('./json/title.json').title.translations;
module.exports = () => {
    const keys = Object.keys(code3);
    const books = [];
    for (const key of keys) {
        const book = {};
        book.title = title[key];
        book.titleLength = title[key].length;
        book.description = description[key];
        book.code3 = code3[key];
        books.push(book);
    }
    return books;
};
