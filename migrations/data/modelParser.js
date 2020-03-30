const path = require('path');
const csvFilePath = path.join(__dirname, 'books.csv');
const csv = require('csvtojson');

module.exports = () => csv().fromFile(csvFilePath);
// const fun = () => csv().fromFile(csvFilePath);
// const a = async () => {
//     const l = await fun();
//     console.log(l);
// };

// a();
// fun().then(books => console.log(books));
// console.log(fun());

// csv()
//     .fromFile(csvFilePath)
//     .then(jsonObj => {
//         console.log(jsonObj);
//         /**
//          * [
//          * 	{a:"1", b:"2", c:"3"},
//          * 	{a:"4", b:"5". c:"6"}
//          * ]
//          */
//     });
