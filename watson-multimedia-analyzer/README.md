This code pattern can be found [here](https://github.com/IBM/watson-multimedia-analyzer)

This code pattern uses Speech-to-Text, and Visual Recognition


```
npm install watson-developer-cloud
node test.js
```

The test app passes in an audio file to be translated by STT.

Modify test.js to point change which file it translates. Depending on the file type, you may also have to modify the option `content_type`. 

STT has the following behavior, depending on the options set and audio file used:

```
const params = {
  objectMode: true,
  content_type: 'audio/ogg;codecs=opus',
  model: 'en-US_BroadbandModel',
  interim_results: true,
};

fs.createReadStream('samples/out5.ogg').pipe(recognizeStream);
```

