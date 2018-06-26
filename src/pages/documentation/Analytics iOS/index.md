---
title: "Analytics iOS Development"
description: ""
layout: "guide"
icon: "code-file"
weight: 4
---

###### {$page.description}

<article id="1">

## Development
This library was developed in Swift, it is just a SDK to make a backpressure of Analytics events to send to Analytics Cloud. Actually we support only custom events and some forms events. More informations can be found in our repository.

### Repository
<https://github.com/liferay-mobile/liferay-analytics-ios>

</article>

<article id="2">

## Continuous Integration
We used the **Travis** to run our unit tests and generate the **test coverage**. We send all informations to **Codacy**, to generate a history of our code quality, using analisys static, code style and code coverage.
</article>
<article id="3">

## How to publish a new version ?
### Cocoapods
To publish any pod, you need to create a session using ```liferay.mobile@gmail.com```
```
pod trunk register liferay.mobile@liferay.com
```
After this, you need to open the link sent to ```liferay.mobile@gmail.com```. Now you are logged and able to publish our libraries.

#### Core
To release a new version of core of Analytics, it is necessary from root folder, increase the version on ```liferay-analytics-ios.podspec``` in ```s.version``` property, commit everything.

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
pod trunk liferay-analytics-ios.podspec
```
#### Forms plugin
From ```/Plugins/liferay-analytics-forms``` folder, it is necessary to increase the version on ```liferay-analytics-forms-ios.podspec``` in ```s.version``` property, commit everything.

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
liferay-analytics-forms-ios.podspec
```
</article>