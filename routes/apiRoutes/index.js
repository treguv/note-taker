//Handles incoming post requests with the data
const path = require("path"); //file path
const router = require("express").Router(); // get the router obj from express
const fs = require("fs"); // for reading/writing data
// const { create } = require("domain");
const { currentNotes } = require("../../db/db.json");
//set up expected post request
router.post("/notes", (req, res) => {
  // this has prefix api in the main server
  console.log(req.body);
  createNewNote({ title: req.body.title, text: req.body.text }); // make new note with this object
  res.json({ title: req.body.title, text: req.body.text });
});
router.get("/notes", (req, res) => {
  console.log("Get recived to api/notes");
  res.json(currentNotes);
});

//function for creating and writing new note into db.json
function createNewNote(theNote) {
  console.log("made new note", currentNotes);
  currentNotes.push(theNote); // Push the note onto the array
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"), // set path
    JSON.stringify({ currentNotes: currentNotes })
  );
}
//export router for use in server
module.exports = router;
