const fs = require('fs');
const path = require('path');

// filterByQuery
function filterByQuery(query, notes) {
    let filteredResults = notes;

    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    return filteredResults;
}

//createNewNote
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

//validateNote
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
    return true;
}

module.exports = { filterByQuery, createNewNote, validateNote};