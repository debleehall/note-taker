var path = require("path");

module.exports = (app) => {

    // GET /notes route (return notes.html)
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    //GET * route (return index.html)
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};