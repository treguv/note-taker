const express = require("express"); // import express
const htmlRoutes = require("./routes/htmlRoutes/index"); //import routes for pushing html docs

const PORT = process.env.PORT || 3001; //set up port for local or heroku

//instantiate server
const app = express();

//parse incomings string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming json data
app.use(express.json()); //Use puts a functio non our server that our data has to pass through
//For serving static pages
//Public is replaced with the path in server to where all your sttatic stuff is
//THis is another api path
app.use(express.static("public")); // allows the requests for css and such from the main file
app.use("/", htmlRoutes); //Use html routes for requests sent to this address
//tell our server to listen on port 3301
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
