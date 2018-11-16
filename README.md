# Friend Finder
## Summary
Live Demo: https://friend-finder-zs.herokuapp.com/

Just another one of those online quizzes that helps you find a buddy to grab a brewski with.
Answer a few questions and find out who your new friend is! (Disclaimer: this database was seeded with memes because the app developer doesn't get out much.)
You can even store your answers in the database so future friends can find you!

## Running Your Own Copy
### System Requirements
* NPM and Nodejs installed
* A terminal program

### Getting Started
1. Clone this repository onto your machine.
2. Open a terminal of your choice and cd to the newly cloned repository.
3. Run "npm install" to install the necessary dependencies to run this program.
4. The program is designed to accept whatever port the server assigns it, and will default to 8080 if not automatically given one by the server. If you would rather pick a different default port, go into the server.js file, scroll to line 9, and change the 8080 to the port of your choice.
5. Start the server by executing "npm start" or "node server.js" in your terminal. The terminal will hang as it listens for requests. 
6. Open a browser of your choice and navigate to http://localhost:8080 , but change the 8080 to your default port from step 4 or whatever port the terminal said it's listening on.

## Disclaimers
* Any user submitted data made during the server running will be deleted when the server is stopped. When the server is restarted, it will begin with the already seeded data from friends.js.
