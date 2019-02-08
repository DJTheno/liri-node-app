require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require('moment');
moment().format();
var spotify = require('node-spotify-api');
var command = process.argv[2];
var userInput = process.argv[3];

// Store all of the arguments in an array
var nodeArgs = process.argv;

let movie = ","

function omdbInfo() {

    // Run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=8134113a", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover the title, year, IMBD rating, Rotten Tomatoes rating, Country, Language, Plot and Actors from the movie
            console.log("Title of the Movie: " + JSON.parse(body).Title +
                "\nYear: " + JSON.parse(body).Year +
                "\nIMBD Rating: " + JSON.parse(body).imdbRating +
                "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1] +
                "\nCountry: " + JSON.parse(body).Country +
                "\nLanguage: " + JSON.parse(body).Language +
                "\nPlot: " + JSON.parse(body).Plot +
                "\nActors: " + JSON.parse(body).Actors +
                "\n---------------------------------------------------------\n");

        };
    });
};


//   * Title of the movie.
//* Year the movie came out.
//* IMDB Rating of the movie.
//* Rotten Tomatoes Rating of the movie.
//* Country where the movie was produced.
//* Language of the movie.
//* Plot of the movie.
//* Actors in the movie.
function runFiles() {


    // If first item in array is "my-tweets" then second item in array is run through the getTweets function
    axios.get("http://www.omdbapi.com/?i=&y=&plot=short&apikey=8134113a").then(
        function (response) {
            if ((dataArr[0] === "movie-this")) {

                userInput = dataArr[1].slice(1, -1);
                omdbInfo();
            }

        });
}

