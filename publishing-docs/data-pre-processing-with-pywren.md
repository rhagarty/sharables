# Short title

Build facial recognition data model

# Long title

Use PyWren over serverless functions to perform facial recognition deep learning

# Author

* Gil Vernik <GILV@il.ibn.com>
* Paul Van Eck <pvaneck@us.ibm.com>
* Rich Hagarty <rich.hagarty@ibm.com>

# URLs

### Github repo

https://github.com/IBM/data-pre-processing-with-pywren

### Other URLs

None

# Summary

In this code pattern we will use a Jupyter Notebook running in Watson Studio to demonstrate how serverless computing can provide a great benefit for AI data preprocessing. We demonstrate Face Recognition deep learning over Watson Machine Learning service, while letting PyWren with IBM Cloud Functions do the data preparation phase. As we will show this makes an entire process up to 50 times faster compared to running the same code without leveraging serverless computing.

# Technologies

* [Artifical Intelligence](https://developer.ibm.com/technologies/artificial-intelligence/)
* [Machine Learning](https://developer.ibm.com/technologies/machine-learning/)
* [Object Storage](https://developer.ibm.com/technologies/object-storage/)
* [Python](https://developer.ibm.com/technologies/python/)
* [Serverless](https://developer.ibm.com/technologies/serverless/)

# Description

Let’s say you write a function in Python to process and analyze some data. You successfully test the function using a small amount of data and now you want to run the function as a serverless action at massive scale, with parallelism, against terabytes of data.

What options do you have? Obviously, you don’t want to learn cloud IT tricks and setup VMs, for example. Nor do you necessarily want to become a serverless computing expert in scaling data inputs, processing outputs, and monitoring concurrent executions.

PyWren provides such a solution - it allows you to run your code against a large data set, get the results, and consider the value of insights gained. It greatly reduces the processing time by parallelization of the jobs in a simple manner.

In this code pattern, we will guide the user through an end-to-end workflow that covers data pre-processing with PyWren, then using the data to train AI models.

# Flow

1. Log into IBM Watson Studio
1. Run the Jupyter notebook in Watson Studio
1. Load image data into a Cloud Object Storage bucket
1. Pre-process the images using PyWren and IBM Cloud Functions
1. Use Watson Machine Learning with TensorFlow and scikit-learn to create and train the model

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.com/IBM/data-pre-processing-with-pywren/blob/master/README.md). The steps will show you how to:

1. Setup a Cloud Object Storage instance
1. Create a Watson Machine Learning Service instance
1. Create an IBM Cloud Functions service
1. Create a Watson Studio project
1. Create a custom runtime environment
1. Create the notebook
1. Run the notebook
1. See the results

# Components and services

* [IBM Cloud](https://developer.ibm.com/components/cloud-ibm/)
* [Jupyter Notebook](https://developer.ibm.com/components/jupyter/)
* [Tensor Flow](https://developer.ibm.com/components/tensorflow/)
* [Watson Studio](https://developer.ibm.com/components/watson-studio-c/)

* [IBM Cloud Functions](https://console.bluemix.net/openwhisk)
* [IBM Cloud Object Storage](https://console.bluemix.net/catalog/services/cloud-object-storage)
* [Watson Machine Learning](https://console.bluemix.net/catalog/services/machine-learning)

# Runtimes

* python

# Related IBM Developer content

* [Gil's Blog](https://github.ibm.com/IBMCode/IBMCodeContent/issues/2211): WIP

# Related links

* [Building a Facial Recognition Pipeline with Deep Learning in Tensorflow](https://hackernoon.com/building-a-facial-recognition-pipeline-with-deep-learning-in-tensorflow-66e7645015b8): Tutorial on how to use a convolutional neural network to perform facial recognition using TensorFlow, Dlib, and Docker.

# Announcement
> Every pattern must have an announcement post that introduces it. The announcement should explain why the pattern is important or useful. The announcement is an invitation to try the pattern; you can expand on why you created the pattern, discuss any challenges that you overcame, or expand on the technologies that you're using.

> *Announcements should be at least 2-3 paragraphs*