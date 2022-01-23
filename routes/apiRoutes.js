const { request } = require('express');
const { filterByQuery, createNewNote, validateNote } = require('../lib/notes');
const { notes } = require('../db/db.json');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const router = require('express').Router();

// GET /api/notes (return db.json)
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// POST /api/notes (save post to db.json)
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('the not is not formatted correctly.');
    } else {
        const note = createNewNote(re.body, note)
        res.json(note);
    }
});

// Bonus: DELETE /api/notes/:id (removes a note from db.json)
router.delete('/api/notes:id', (req, res) => {
    let noteId = request.params.id.toString();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newData = data.filter( note => note.id.toString() !== noteId );
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    response.json(newData);
});

module.exports = router;