//Handles passing forward all the front end pages
const path = require("path"); //file path
const router = require("express").Router(); // get the router obj from express

//set up the paths and their responses
router.get("/", (req, res) => {
  //when get request is recievedd
  res.sendFile(path.join(__dirname, "../../public/index.html")); //send back index.html
});
//send back notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//export router
module.exports = router;
