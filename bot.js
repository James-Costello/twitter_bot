console.log ('BOT IS BOOTING UP...');
var MarkovChain = require('markovchain')
var Twit = require('twit');
var fs = require('fs')

//random Int function for lenght of chain
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Interval set for random time btw roughly every 20 - 40 minutes.
function getRandomTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//////////////////////
///BOT LABRATORY//////
//////////////////////


var config = require('./config');
var T = new Twit(config)

/////////////////////////////
//Setting up a user stream///
/////////////////////////////

// var stream = T.stream('user');
// stream.on('follow', followed);
// function followed(){
// }

////////////////
// Get request//
////////////////

// var params = {
//   q: 'danzig',
//   count: 2
// }

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response ){
//   var tweets = data.statuses;
//   for(var i = 0; i < tweets.length; i++){
//   console.log(tweets[i].text);
//   }
// }

//////////////////////
////MARKOV CHAINING///
//////////////////////

//////////////////////
//Example of Post();//
//////////////////////

setInterval(function() {
    var quotes = new MarkovChain(fs.readFileSync('./quotes.txt', 'utf8'))
    var snippet = quotes.start('The').end(getRandomInt(4,18)).process();
      console.log(snippet)

      var tweetIt = {
        status: snippet
      }


      T.post('statuses/update', tweetIt, tweeted);

      function tweeted(err, data, response){
        if(err) {
         console.log("Uh oh:  ", err)
        } else {
         console.log("it worked")
        }
      }
 }, 4000)

























