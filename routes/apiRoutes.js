const { request } = require('express');
const fs = require("fs");

const router = require('express').Router();

const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

// GET /api/notes (return db.json)
router.get('/api/notes', (req, res) => {
    return res.json(noteList);
});

// POST /api/notes (save post to db.json)
router.post('/api/notes', (req, res) => {
    let lastId;
    if (noteList.length) {
        lastId = Math.max(...(noteList.map(note => note.id)));
    } else {
        lastId = 0;
    }
    const id = lastId = 1;

    noteList.push({ id, ...req.body });
    res.json(noteList.slice(-1));
});

// Bonus: DELETE /api/notes/:id (removes a note from db.json)
router.delete('/api/notes/:id', (req, res) => {
    let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));
    noteList.splice(noteList.indexOf(findNote), 1);
    res.end("Note was deleted.");
});

module.exports = router;