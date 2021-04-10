// const fs = require('fs');

// //fs.writeFileSync('notes.txt', 'My name is Moty.');
// fs.appendFileSync('notes.txt', " I am from Ramat Gan.");

const chalk = require('chalk');
const yargs = require('yargs');
const validator = require('validator');
const getNotes = require('./notes.js');

/*
const msg = getNotes();
console.log(msg);

console.log(validator.isURL('http://mead.io'))

console.log(chalk.green.bold.inverse('Success!'));

console.log(process.argv[2]);
*/

/*
const command = process.argv[2];

console.log(process.argv);

if (command == 'add') {
    console.log('Adding note!');
} else if (command == 'remove') {
    console.log('Removing note!');
}
*/

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listting the notes');
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
})

yargs.parse();