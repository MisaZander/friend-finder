//server.js - Zander
//Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allow Express to load up "static" files
app.use(express.static(path.join(__dirname, "app", "public")));

//Tell Express to use the defined routes
app.use("/", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });