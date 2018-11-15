// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var express = require("express");
var path = require("path");
var router = express.Router();
var data = require(path.join(__dirname, "..", "data", "friends"));

router.get("/api/friends", function(req, res) {
    return res.json(data);
});

router.post("/api/friends", function(req, res) {
    var postInfo = req.body;

   if(postInfo.isGonnaSave) {
        //I really don't want the isGonnaSave value from postInfo
        let personals = {
            name: postInfo.name,
            photo: postInfo.photo,
            scores: postInfo.scores
        }

        data.push(personals);
   }

    res.send(data);
});

module.exports = router;