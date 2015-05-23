var Twit = require('twit');
var fs = require('fs');
var twit = new Twit({
	consumer_key : '???',
	consumer_secret : '???',
	access_token : '???',
	access_token_secret : '???'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
//var stream = twit.stream('statuses/filter', { locations: uk })
var stream = twit.stream('statuses/filter', { locations: uk })
stream.on('tweet', processTweet);
var log=fs.createWriteStream('tweets.log')
function processTweet(tweet) {
  //console.log(tweet);
	//var strTweet=JSON.stringify(tweet);
	//log.write(strTweet);

	var regexp=/[Ff]ootball|[Ss]aturday/g;
	if(regexp.test(tweet.text)) {
	console.log(tweet.text);
		}

};

