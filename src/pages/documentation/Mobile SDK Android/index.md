---
title: "Mobile SDK Android Development"
description: ""
layout: "guide"
icon: "code-file"
weight: 4
---

###### {$page.description}

<article id="1">

## Development
The Liferay Mobile SDK is a framework for building native mobile apps that integrate with your different Liferay Portal instances and their portlets. The SDK provides the means for your mobile apps to easily consume Liferay Portal's core web services and the web services of your custom portlets. It wraps Liferay JSON web services, takes care of authentication, makes HTTP requests (synchronously or asynchronously), parses JSON results and handles server side exceptions.

[Learn how to use](https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/mobile-sdk)

### Repository
<https://github.com/liferay/liferay-mobile-sdk/>

</article>

<article id="2">

## How to publish a new version ?
We use the bintray to send versions to JCenter and to Maven Central. You need to request an account on Bintray to allan.melo@liferay.com or victor.oliveira@liferay.com.

After this, you need to create a ```local.properties``` file on root of project, using your bintray user and your API key.
```
bintray.user=your_bintray_user
bintray.apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Your API Key can be found here.

<img src="/images/bintray_apikey.png" />

You need to increase the version, found in ```/android/build.gradle``` file, in ```android/defaultConfig/versionName``` property.

In terminal, from ```/android```, you need run ```../gradlew build``` and ```../gradlew bintrayUpload```

</article>