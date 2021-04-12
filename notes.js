const fs = require('fs');

const getNotes = function () {
    return 'Your notes...';
}

//Adding a new note
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) { //return an array of the titles with the same name
        return note.title == title;
    });

    if (duplicateNotes.length === 0) { //if the array is zero, we dont have that title
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log('New note added!');
    } else { //title is taken
        console.log('Note title taken');
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON); //adds the note
}

//Loading the notes that are saved as a JSON file
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); //load the JSON file (binary data) 
        const dataJSON = dataBuffer.toString(); //making the data to string
        return JSON.parse(dataJSON); //make the data to a JSON
    } catch (e) { //if we dont have notes, return an empty array
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};