console.log ('BOT IS BOOTING UP...');
var MarkovChain = require('markovchain')
var Twit = require('twit');
var fs = require('fs')
var quotes = new MarkovChain(fs.readFileSync('./quotes.txt', 'utf8'))

// simple text
// var m = new MarkovChain('tx text te hey hey hey hey hey test on test on')

// m.parse('add additional text')

// console.log(m.parse('more and more text').end(5).process())


// import from file

console.log(quotes.start('The').end(5).process())


var config = require('./config');
var T = new Twit(config)

//Setting up a user stream
var stream = T.stream('user');

stream.on('follow', followed);

function followed(){

}

// Get request

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


//Example of Post();


// Tweet every 20 seconds
// setInterval(tweetIt, 1000* 20)

// tweetIt();

// function tweetIt(){
//   var tweet = {
//     status: 'testing'
//   }

//   T.post('statuses/update', tweet, tweeted);

//   function tweeted(err, data, response){
//     if(err) {
//       console.log("Uh oh:  ", err)
//     } else {
//       console.log("it worked")
//     }
//   }
// }

