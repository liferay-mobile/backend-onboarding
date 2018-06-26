---
title: "Analytics Android Development"
description: ""
layout: "guide"
icon: "code-file"
weight: 4
---

###### {$page.description}

<article id="1">

## Development
This library was developed in Kotlin, it is just a SDK to make a backpressure of Analytics events to send to Analytics Cloud. Actually we support only custom events and some forms events. More informations can be found in our repository.

## Repository 
<https://github.com/liferay-mobile/liferay-analytics-android>

</article>

<article id="2">

## Continuous Integration
We used the **Travis** to run our unit tests and generate the **test coverage**. We send all informations to **Codacy**, to generate a history of our code quality, using analisys static, code style and code coverage.

You need to request an account an invite to have access on Codacy

</article>

<article id="3">

## How to publish a new version ?
We use the bintray to send versions to JCenter and to Maven Central. You need to request an account on Bintray to allan.melo@liferay.com or victor.oliveira@liferay.com.

After this, you need to create a ```local.properties``` file on root of project, using your bintray user and your API key.
```
bintray.user=your_bintray_user
bintray.apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Your API Key can be found here.

<img src="/images/bintray_apikey.png" />

### Core

You need to increase the version, found in ```/analytics-core/build.gradle``` file, in ```android/defaultConfig/versionName``` property.

In terminal, from ```/analytics-core```, you need run ```../gradlew build``` and ```../gradlew bintrayUpload```

## Forms plugin

You need to increase the version, found in ```/analytics-forms/build.gradle``` file, in ```android/defaultConfig/versionName``` property.

In terminal, from ```/analytics-forms```, you need run ```../gradlew build``` and ```../gradlew bintrayUpload```

</article>