const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');

const speechToText = new SpeechToTextV1({
  username: 'bb3c549e-dabc-4808-9207-f642b94174a2',
  password: 'tLY7nrLkw0wY',
});

const params = {
  objectMode: true,
  content_type: 'audio/ogg;codecs=opus',
  model: 'en-US_BroadbandModel',
  interim_results: true,
};

  // content_type: 'audio/flac',

// Create the stream.
const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('out5.ogg').pipe(recognizeStream);
// fs.createReadStream('out7.flac').pipe(recognizeStream);

// Listen for events.
recognizeStream.on('data', function (event) { onEvent ('Data:', event); });
recognizeStream.on('error', function (event) { onEvent ('Error:', event); });
recognizeStream.on('close', function (event) { onEvent ('Close:', event); });
recognizeStream.on('end', function (event) { onEvent2 ('End'); });

// Display events on the console.
function onEvent(name, event) {
  console.log(name, JSON.stringify(event, null, 2));
}

// Display events on the console.
function onEvent2(name) {
  console.log(name);
}
