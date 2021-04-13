const fs = require('fs');
const chalk = require('chalk');

//Adding a new note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => {
        note.title === title;
    });

    if (!duplicateNote) { //if the array is zero, we dont have that title
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


//logs the titles of the saved notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.blue('Your notes:'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

//Read a note
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse.blue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};