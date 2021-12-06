const fs = require('fs');
const notes = require('../db/db.json');
const { nanoid } = require('nanoid');

const addNote = (note) => {
    note.id = nanoid();     
    // if theres things in notes, newArr = notes. If notes is empty newArr = [];
    newArr = (notes) ? newArr = notes : newArr = [];      
    newArr.push(note);
    fs.writeFile('./db/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('Note added!');
    });
    return;
};

const deleteNote = (note) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
            //splice takes out the note
            notes.splice(i, 1);
            console.log('Note deleted!')
        }
    };
    return;
};

module.exports = { addNote, deleteNote }