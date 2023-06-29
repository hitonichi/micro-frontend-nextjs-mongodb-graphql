const note = require("../../models/note");
const Note = require("../../models/note");

module.exports = (router) => {
  // GET: Get all notes
  router.get("/notes", (req, res) => {
    console.log("GET notes");
    Note.find({})
      .then((standups) => res.status(200).json(standups))
      .catch((err) => res.status(400).json(err));
  });

  // POST: Create a new note
  router.post("/notes", (req, res) => {
    const note = new Note(req.body);
    note
      .save()
      .then((returnedNote) => {
        return res.status(200).json(returnedNote);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  });

  // DELETE: Remove a note

  // PUT: Update a note (?)
};
