# Short title

Build a mobile app

# Long title

Build a Watson Discovery mobile app using React Native

# Author

* Tom Markiewicz <tmarkiewicz@ibm.com>
* Rich Hagarty <rich.hagarty@ibm.com>

# URLs

### Github repo

* https://github.com/IBM/build-react-native-app-for-watson-discovery

### Other URLs

* Video URL - COMING

# Summary

In this code pattern we create a cross-platform mobile app that fetches news for a specific company. The application uses Watson Discovery to get news articles with sentiment, keywords, and related concepts. This application is easily customizable and provides a starting point to use Watson Discovery in your own React Native applications.

# Technologies

* [Mobile Development](https://developer.ibm.com/technologies/mobile/)

# Description

While there have been numerous attempts at effective cross-platform mobile development over the years, none have really met expectations and become extremely popular among programmers until [React Native](https://facebook.github.io/react-native/). React Native is a JavaScript framework that allows developers to write mobile apps for iOS and Android. Originally created and then open-sourced by Facebook, the company still actively participates and updates the platform.

This code pattern illustrates how to create a cross-platform (iOS and Android) mobile app that fetches news for a specific company. The application uses Watson Discovery News to get news articles with sentiment, keywords, and related concepts. This application is easily customizable and provides a starting point to use Watson Discovery in your own React Native applications. Instead of learning Swift, Java, or Kotlin to build native mobile applications, you can now rapidly build mobile applications using Javascript.

In this code pattern, we provide an intro to using React Native as well as Watson Discovery. The pattern details a mobile application built using JavaScript and React Native to fetch recent news articles for a specific company using Watson Discovery News. Each news article returned is displayed in a card within a list view. Clicking on the article provides additional in-depth analysis from Watson Discovery including keywords, related concepts, and sentiment.

# Flow

1. Watson News data is loaded into the Watson Discovery service collection.
1. The user interacts with the Watson Discovery service via the React Native mobile app UI running in the XCode iOS Simulator.
1. The initial load of the mobile app will pull up recent, relevant articles for a company. The user can then click on insights to get sentiment, keywords, and concepts from Watson Discovery for any specific article.

# Instructions

> Find the detailed steps for this pattern in the [readme file](https://github.com/IBM/build-react-native-app-for-watson-discovery/blob/master/README.md). The steps will show you how to:

1. Clone the repo
1. Create IBM Cloud services
1. Configure credentials
1. Run the application

# Components and services

* [IBM Cloud](https://developer.ibm.com/components/cloud-ibm/)
* [Watson Discovery News](https://developer.ibm.com/components/watson-discovery-news/)

* [Watson Discovery Service](https://console.bluemix.net/catalog/services/discovery)

# Runtimes

* javascript/node

# Related IBM Developer content

* [Watson Discovery Getting Started Tutorial](https://console.bluemix.net/docs/services/discovery/getting-started.html#getting-started-tutorial)
* [Watson Discovery API docs](https://console.bluemix.net/apidocs/discovery)

# Related links

* [How to use XCode iOS Simulator for responsive web testing on Mac](https://medium.com/@ali.dev/how-to-use-xcode-ios-simulator-for-responsive-web-testing-on-mac-7870ee4fc22b)

# Announcement
> Every pattern must have an announcement post that introduces it. The announcement should explain why the pattern is important or useful. The announcement is an invitation to try the pattern; you can expand on why you created the pattern, discuss any challenges that you overcame, or expand on the technologies that you're using.

> *Announcements should be at least 2-3 paragraphs*