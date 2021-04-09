// const fs = require('fs');

// //fs.writeFileSync('notes.txt', 'My name is Moty.');
// fs.appendFileSync('notes.txt', " I am from Ramat Gan.");

const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

/*
const msg = getNotes();
console.log(msg);

console.log(validator.isURL('http://mead.io'))

console.log(chalk.green.bold.inverse('Success!'));

console.log(process.argv[2]);
*/

const command = process.argv[2];

console.log(process.argv);

if (command == 'add') {
    console.log('Adding note!');
} else if (command == 'remove') {
    console.log('Removing note!');
}