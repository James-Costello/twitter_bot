/////////////////////
///BOT LABRATORY/////
/////////////////////

console.log ('BOT IS BOOTING UP...');
var MarkovChain = require('markovchain')
var Twit = require('twit');
var fs = require('fs')
var config = require('./config');
var T = new Twit(config)

//random Int function for length of chain.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Interval set for random time.
function getRandomTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//////////////////////
////MARKOV CHAINING///
//////////////////////

var useUpperCase = function(wordList) {
  var tmpList = Object.keys(wordList).filter(function(word) {
    return word[0] >= 'A' && word[0] <= 'Z' || word[0] >= 'a' && word[0] <= 'z'
  })
  return tmpList[~~(Math.random()*tmpList.length)]
}

setInterval(function() {
    var quotes = new MarkovChain(fs.readFileSync('./quotes.txt', 'utf8'))
    var snippet = quotes.start(useUpperCase).end(getRandomInt(5,18)).process();
      console.log(snippet)

      var tweetIt = { status: snippet }

      T.post('statuses/update', tweetIt, tweeted);
      function tweeted(err, data, response){ err ? console.log("Uh oh:  ", err) : console.log("BOT (⌐■_■) BOT"); }
 }, getRandomTime(500 * 9, 500 * 20) )
