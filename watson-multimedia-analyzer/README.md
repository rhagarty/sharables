The code pattern this is based off of is located at [https://github.com/IBM/watson-multimedia-analyzer](https://github.com/IBM/watson-multimedia-analyzer).

This code pattern uses `Speech-to-Text`, and `Visual Recognition`. 

Uses latest version of the Node SDK - `watson-developer-cloud: 3.12.0`


How to run the test app:
```
# cp rhagarty/sharables/watson-multimedia-analyzer to your local system
cd watson-multimedia-analyzer
npm install watson-developer-cloud
node test.js
```

The test app passes in an audio file to STT for translation.

Modify test.js to change which file it translates. Depending on the file type, you may also have to modify the option `content_type`. 

STT has the following behavior, depending on the options set and audio file used:

### This works correctly. Final translated text is returned with completion code 1000.
```
const params = {
  objectMode: true,
  content_type: 'audio/flac',
  model: 'en-US_BroadbandModel',
  interim_results: false,
};

// Create the stream.
const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('samples/audio.flac').pipe(recognizeStream);
```

### This works correctly. A constant stream of translated text is returned, and eventually ends with completion code 1000.
```
const params = {
  objectMode: true,
  content_type: 'audio/flac',
  model: 'en-US_BroadbandModel',
  interim_results: true,
};

// Create the stream.
const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('samples/audio.flac').pipe(recognizeStream);
```

### This works correctly. A constant stream of translated text is returned, and eventually ends with completion code 1000.
```
const params = {
  objectMode: true,
  content_type: 'audio/ogg;codecs=opus',
  model: 'en-US_BroadbandModel',
  interim_results: true,
};

// Create the stream.
const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('samples/out5.ogg').pipe(recognizeStream);
```

### This fails. The only data returned is a completion code of 1006.
```
const params = {
  objectMode: true,
  content_type: 'audio/ogg;codecs=opus',
  model: 'en-US_BroadbandModel',
  interim_results: false,
};

// Create the stream.
const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('samples/out5.ogg').pipe(recognizeStream);
```

### NOTE: The ogg file used in the previous test contains a large amount of recorded text, while the flac file used earlier is very small. I did run a test where I created a flac file version of the ogg file contents. This file, however, was too large (>38MB) to store in this repo. That test also FAILED, so ogg file format is NOT the only issue.

| Format        | size    | interim_results | Result  |
| ------------- |:------ :| ---------------:| -------:|
| flac          | small   | true            | pass    |
| flac          | small   | false           | pass    |
| flac          | large   | true            | pass    |
| flac          | large   | false           | fail    |
| ogg           | large   | true            | pass    |
| ogg           | large   | false           | fail    |
| flac          | small   | true            | pass    |
| flac          | small   | false           | fail    |
