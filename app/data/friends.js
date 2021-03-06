// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```


// determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

var friends = [
    {
        name: "Forever Alone Guy",
        link: "https://i.kym-cdn.com/photos/images/original/000/111/211/84d.png",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Success Kid",
        link: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/SuccessKid.jpg/256px-SuccessKid.jpg",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        name: "His Neutralness",
        link: "https://66.media.tumblr.com/161600d53801ba0c40c284a0cb1b00d8/tumblr_no3loeMauQ1ut6yv4o1_1280.png",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        name: "Foul Bachelor Frog",
        link: "https://i.kym-cdn.com/photos/images/masonry/000/464/920/4fe.png",
        scores: [3, 3, 4, 3, 5, 2, 3, 5, 5, 3]
    }
];

module.exports = friends;