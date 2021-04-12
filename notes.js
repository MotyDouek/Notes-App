const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

//Adding a new note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => { //return an array of the titles with the same name
        return note.title == title;
    });

    if (duplicateNotes.length === 0) { //if the array is zero, we dont have that title
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.bold.green('New note added!'));
    } else { //title is taken
        console.log(chalk.bold.red('Note title taken'));
    }
};

//Remove a note
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => { //save all the notes who doesnt have the given title
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) { //we found the given note title and removed it
        saveNotes(notesToKeep);
        console.log(chalk.bold.green('Note removed!'));
    } else { //note title was not found
        console.log(chalk.bold.red('No note found!'));
    }
}

//Saves a not as a JSON
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON); //adds the note
}

//Loading the notes that are saved as a JSON file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); //load the JSON file (binary data) 
        const dataJSON = dataBuffer.toString(); //making the data to string
        return JSON.parse(dataJSON); //make the data to a JSON
    } catch (e) { //if we dont have notes, return an empty array
        return [];
    }
}

//exports our functions
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};