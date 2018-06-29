var Twitter = require('twitter');
const fs = require('fs')

var client = new Twitter({
  consumer_key: 'y3dr9J31XeIkl2Sh7URGvxV9X',
  consumer_secret: 'BAyKmItGvK55e9bYa3L0qBUn8o9aNVruCPOvHCE8pLaO5vTZgA',
  access_token_key: '464452830-zZxkiNfOT54skWuSMKJI03VC86WgaYWrz8X6VDWZ',
  access_token_secret: 'gfsIr65ew4UupS62nIZ5oLPqugF0NQweY4dpA1r2zR8ry'
});

function basicSearch(params, callback) {
    console.log('performing search request to twitter');
    console.log(params);
    //params = {q: params.screen_name, };


    client.get('search/tweets', params, function(error, tweets, response) {
      if (!error) {
        console.log('succesful search request to twitter');
        console.log(tweets.statuses.map(e => `${e.user.screen_name} says ${e.text}`));
        callback(tweets)
      }
    });
    
}

module.exports = {
    basicSearch
}

// basicSearch(tweets => {
//     fs.writeFileSync('./example-tweets.js', JSON.stringify(tweets, null, 2))
// })


// console.log(tweets.map(e => e.user.location));