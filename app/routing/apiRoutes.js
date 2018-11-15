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
    //Let's make sure there's some data to go there
    if(data.length === 0) {
        res.send({
            name: "Nobody. Nobody's Here Yet...",
            link: "http://spacecollective.org/userdata/XuC06jJw/1267260196/615140382_6e62193f7c.jpg"
        });
        return;
    }    
    
    var postInfo = req.body;
    
   //Crunch the data
   var allScores = []; //[user1Total, user2Total, ...]
   //For every person in the data
   for(let i = 0; i < data.length; i++) {
        //For each answer in the scores array
        var total = 0;
        for(let j = 0; j < postInfo.scores.length; j++){
            //Mental note: postInfo contains the submitted user's scores
            //data[i] refers to the current previous user
            let myScore = postInfo.scores[j];
            let theirScore = data[i].scores[j];
            let questionDiff = Math.abs(myScore - theirScore); //Always returns a positive
            total += questionDiff; //Add to running total
        }
        allScores[i] = total;
   }

   //Obtain the best match
   var lowScore = 9999;
   var bestMatchIndex = 0;
   for(let i = 0; i < allScores.length; i++){
       if(allScores[i] < lowScore){
           lowScore = allScores[i];
           bestMatchIndex = i;
       }
   }

   //Add self to array after score tablulation to avoid comparing to self
   if(postInfo.isGonnaSave === "true") { //Even a POSTed bool is sent off as a string
        //I really don't want the isGonnaSave value from postInfo
        let personals = {
            name: postInfo.name,
            link: postInfo.link,
            scores: postInfo.scores
        }

        data.push(personals);
    }

    //Finally, send the post request back the best match
    //A lowScore of 0 means both participants had identical answers, and will return 100% compatibility
    //A lowScore of 40 means these two should be archenemies and return 0% compatibility
    res.send({
        name: data[bestMatchIndex].name,
        link: data[bestMatchIndex].link,
        compatibility: parseInt(100 - Math.round((lowScore / 40) * 100))
    });

});//router.post()

module.exports = router;