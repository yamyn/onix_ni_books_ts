const path = require('path');
const csvFilePath = path.join(__dirname, 'books.csv');
const csv = require('csvtojson');

module.exports = () => csv().fromFile(csvFilePath);
