const $ = require('jquery')  // jQuery now loaded and assigned to $
const Twitter = require('twitter');

const twitterClient = new Twitter({

});

var streaming = twitterClient.stream('statuses/filter', {track: 'Autodesk'});
streaming.on('data', function(event) {
  $('#tweets').text(event.text);
  console.log(event && event.text);
});

  streaming.on('error', function(error) {
    throw error;
  });
