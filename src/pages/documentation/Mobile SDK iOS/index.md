---
title: "Mobile SDK iOS Development"
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
### Cocoapods
To publish any pod, you need to create a session using ```liferay.mobile@gmail.com```
```
pod trunk register liferay.mobile@liferay.com
```
After this, you need to open the link sent to ```liferay.mobile@gmail.com```. Now you are logged and able to publish our libraries.

To release a new version of core of Analytics, it is necessary from root folder, increase the version on ```Liferay-iOS-SDK.podspec``` in ```s.version``` property, commit everything.

- Create a tag with the version name
    ```
    git tag "X.X.X"
    ```
- Push the tag to remote
    ```
    git push --tags
    ```
- Upload the new version to Cocoapods
    ```ruby
    pod trunk push Liferay-iOS-SDK.podspec
    ```
</article>