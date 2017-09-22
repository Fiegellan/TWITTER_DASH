const $ = require('jquery')  // jQuery now loaded and assigned to $
const Twitter = require('twitter')
const Stream = require('stream')


const items = ['Twitter Test','hello']

const twitterClient = new Twitter({

});

var streaming = twitterClient.stream('statuses/filter', {track: 'Autodesk'});
streaming.on('data', function(event) {
  #skelton of how to look
  #assign to ID user name

  items.push(event.text + ' -  ' + event.user.screen_name);

  console.log(items);
  var c = items.length-1;
#give ids and classes
  for (var c = items.length-1; c < items.length; c++) {
      var newElement = document.createElement('div');
      newElement.id = items[c];
      newElement.innerHTML = items[c];
      document.body.appendChild(newElement);
  }


  //$('#tweets').text(items);

});

streaming.on('error', function(error) {
    throw error;
  });
