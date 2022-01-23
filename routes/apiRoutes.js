const { request } = require('express');

const router = require('express').Router();
// const res = require('express/lib/response');
// const saveData = require('../db/notes');

// GET /api/notes (return db.json)
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
    // saveData
    //     .retrieveNotes()
    //     .then(notes => res.json(notes))
    //     .catch(err => res.status(500).json(err));
});

// POST /api/notes (save post to db.json)
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('the not is not formatted correctly.');
    } else {
        const note = createNewNote(re.body, note)
        res.json(note);
    }
    // saveData
    //     .addNote(req.body)
    //     .then((note) => res.json(note))
    //     .catch(err => res.status(500).json(err));
});

// Bonus: DELETE /api/notes/:id (removes a note from db.json)
router.delete('/notes:id', (req, res) => {
    let noteId = request.params.id.toString();
    
    // saveData
    //     .deleteNote(req.params.id)
    //     .then(() => res.json({ ok:true }))
    //     .catch(err => res.status(500).json(err));
});

module.exports = router;