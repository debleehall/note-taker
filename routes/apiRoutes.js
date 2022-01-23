const router = require('express').Router();
const res = require('express/lib/response');
const saveData = require('../db/notes');

// GET /api/notes (return db.json)
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST /api/notes (save post to db.json)
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// Bonus: DELETE /api/notes/:id (removes a note from db.json)
router.delete('/notes:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok:true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;