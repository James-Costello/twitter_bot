console.log ('BOT IS BOOTING UP...');

var Twit = require('twit');

var config = require('./config');
console.log(config);

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

tweetIt();

function tweetIt(){
  var tweet = {
    status: 'testing'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if(err) {
      console.log("Uh oh:  ", err)
    } else {
      console.log("it worked")
    }
  }
}

