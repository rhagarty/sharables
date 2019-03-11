# Short title

Train a Speech to Text Model

# Long title

Create a custom Watson Speech to Text model using specialized domain data

# Author

* Ton Ngo <ton@us.ibm.com>
* Paul Van Eck <pvaneck@us.ibm.com>
* Yihong Wang <yh.wang@ibm.com>
* Ted Chang <htchang@us.ibm.com>
* Rich Hagarty <rich.hagarty@ibm.com>

# URLs

### Github repo

* https://github.com/IBM/Train-Custom-Speech-Model

### Other URLs

* Video URL - COMING!

# Summary

In this code pattern, we show how to create a custom Watson Speech to Text model for handling specialized domain data. To improve the acuracy of the service, we will leverage transfer learning by training the existing model with new data from the medical industry.

# Technologies

* [Analytics](https://developer.ibm.com/technologies/analytics/)
* [JavaScript](https://developer.ibm.com/technologies/javascript/)
* [Node.js](https://developer.ibm.com/technologies/node-js/)

# Description

In this code pattern, we will create a custom speech to text model. The `Watson Speech to Text` service is among the best in the industry. However, like other Cloud speech services, it was trained with general conversational speech for general use; therefore it may not perform well in specialized domains such as medicine, law, sports, etc. To improve the accuracy of the speech-to-text service, you can leverage transfer learning by training the existing AI model with new data from your domain.

In this example, we will use a medical speech data set to illustrate the process. The data is provided by [ezDI](https://www.ezdi.com) and includes 16 hours of medical dictation in both audio and text files.

When the reader has completed this code pattern, they will understand how to:

* Prepare audio data and transcription text for training a speech-to-text model.
* Work with the `Watson Speech to Text` service through API calls.
* Train a custom speech-to-text model with a data set.
* Enhance the model with continuous user feedback.

# Flow

1. The user downloads the custom data set and prepares the audio and text data for training.
1. The user sets up access to the `Watson Speech to Text` service by configuring the credentials.
1. The user uses the provided application GUI or command line to run training using the batch of data.
1. The user interactively tests the new custom Speech model by speaking phrases to the computer microphone and verify the text transcription returned from the model.
1. If the text transcription is not correct, the user can make corrections and resubmit the updated data for training.
1. Several users can work on the same custom model at the same time.

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.com/IBM/Train-Custom-Speech-Model/blob/master/README.md). The steps will show you how to:

1. Clone the repo
1. Create IBM Cloud services
1. Configure credentials
1. Download and prepare the data
1. Train the models
1. Transcribe your dictation
1. Correct the transcription

# Components and services

* [IBM Cloud](https://developer.ibm.com/components/cloud-ibm/)
* [npm](https://developer.ibm.com/components/npm/)
* [React](https://developer.ibm.com/components/react/)
* [Watson Speech to Text](https://console.bluemix.net/catalog/services/speech-to-text)

# Runtimes

* javascript/node
* python

# Related IBM Developer content

* [Watson Speech recognition](https://console.bluemix.net/docs/services/speech-to-text/getting-started.html#gettingStarted): Advanced models for processing audio signals and language context can accurately transcribe spoken voice into text.
* [Watson Speech customization](https://console.bluemix.net/docs/services/speech-to-text/custom.html#customization): Ability to further train the model to improve the accuracy for your special domain.

# Related links

* [AI in medical services](https://www.ezdi.com): Save time for medical care providers by automating tasks such as entering data into Electronic Medical Record.

# Announcement
> Every pattern must have an announcement post that introduces it. The announcement should explain why the pattern is important or useful. The announcement is an invitation to try the pattern; you can expand on why you created the pattern, discuss any challenges that you overcame, or expand on the technologies that you're using.

> *Announcements should be at least 2-3 paragraphs*
