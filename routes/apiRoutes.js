const fs = require("fs");

module.exports = (app) => {
    //GET /api/notes (return db.json)
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });

    //  POST /api/notes (save post to db.json)
    app.post('/api/notes', (req, res) => {
        //Id of last note
        let lastId;
        if (noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));
        } else {
            lastId = 0;
        }
        const id = lastId + 1;

        // push new note
        noteList.push({ id, ...req.body });
        //Removes last index
        res.json(noteList.slice(-1));
    });

    // Bonus: DELETE /api/notes/:id (removes a note from db.json)
    app.delete('/api/notes/:id', (req, res) => {
        let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));

        noteList.splice(noteList.indexOf(findNote), 1);
        res.end("Note was deleted");
    });
};