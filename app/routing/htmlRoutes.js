// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

//Catch it all... bang a gong... get on!
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

module.exports = router;