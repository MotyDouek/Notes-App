// const fs = require('fs');

// //fs.writeFileSync('notes.txt', 'My name is Moty.');
// fs.appendFileSync('notes.txt', " I am from Ramat Gan.");

const validator = require('validator');
const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);

console.log(validator.isURL('http://mead.io'))