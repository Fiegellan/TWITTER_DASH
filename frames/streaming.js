const $ = require('jquery')  // jQuery now loaded and assigned to $
const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: 'syHtTqkEtfnWfgnralw0xowBk',
  consumer_secret: 'jBCIxvDDoRLDAF0tyCfbIOU4nPxUT4y0nw1Xuj8FSj25jPPkaf',
  access_token_key: '853858664037228544-n7n9sJHUMQdql37V12H1EeYHKK6Iwbi',
  access_token_secret: 'MqkruxDt7hksKZte56mRpI2Zclk2da39FhzJ7hDBpN7OI'
});

var streaming = twitterClient.stream('statuses/filter', {track: 'Autodesk'});
streaming.on('data', function(event) {
  $('#tweets').text(event.text);
  console.log(event && event.text);
});

  streaming.on('error', function(error) {
    throw error;
  });
