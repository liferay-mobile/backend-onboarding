---
title: "WeDeploy Android SDK"
description: ""
layout: "guide"
icon: "code-file"
weight: 4
---

###### {$page.description}

<article id="1">

## Development
It's a SDK to use the WeDeploy easily in your mobile. You can use a cool feature like DATA in realtime to create reactive APPs.

## Repository
<https://github.com/wedeploy/wedeploy-sdk-android>

</article>

<article id="2">

## Release Process for the WeDeploy SDKs
This document describes the release process of our public SDKs. It exists to improve visibility among team members and it should be used by project maintainers to know what needs to be updated on every new release.

### WeDeploy Java projects can be released in the following repositories:

1. Public ***Maven Central*** (https://search.maven.org), for all the artifacts that have to be publically available. The releasing is done in two steps: first publishing artifacts to ***Sonatype*** (https://oss.sonatype.org) and then releasing them to Maven Central.
2. ***Wedeploy Nexus*** repo, for private artifacts needed by the infrastructure and/or for snapshots of public artifacts.
3. ***Bintray*** (https://bintray.com) - another public repo, used just for the Android artifacts.

Note: for the purpose of local development, all artifacts can be published locally.

Public Java repos (on Maven central)  are:

- common
- api-java
- api-java.api-client
- wedeploy-android-sdk
### Step 0 : Configuration
### WeDeploy Nexus
For the Wedeploy Nexus, you need these in ```~/.gradle/gradle.properties```:

```
wedeployRepo=https://repository.liferay.com/nexus/content/repositories/xanadu/
wedeployRepoUsername=...
wedeployRepoPassword=...
```
### Sonatype & Maven Central
For the Sonatype, you need these in ```~/.gradle/gradle.properties```:
```
sonatypeUsername=...
sonatypePassword=...
```

To get Sonatype credentials, you have to:
1. Sign up for a Sonatype Jira account:
https://issues.sonatype.org/secure/Signup!default.jspa
2. Ask for user rights to publish to `wedeloy`, refering this issue:
https://issues.sonatype.org/browse/OSSRH-30085


Now use your Sonatype jira credentials above.
### Bintray
Bintray requires the following environments to be set:

- BINTRAY_USER
- BINTRAY_KEY
### GPG Keys
Next thing to configure is your GPG keys. Create one and set it in ```~/.gradle/gradle.properties```:

```
signing.keyId=...
signing.password=...
signing.secretKeyRingFile=...
```

Publishing to Maven Central requires all artifacts to be signed.
### Step 1 : Publishing
1. To publish to Wedeploy Nexus:
```./gradlew publishJarPublicationToMavenRepository```
2. To publish a release to Sonatype:
***WEDEPLOY_RELEASE=true ./gradlew publishJarPublicationToSonatypeRepository***
3. To publish a release to Bintray:
***WEDEPLOY_RELEASE=true ./gradlew bintray***

Artifacts are now published. Wedeploy Nexus and Bintray artifacts are immediately available. Sonatype artifacts needs to be ‘released’ to Maven central.
### Step 2 : Releasing
Releasing is only needed for Sonatype artifacts - to be released in the Maven central.

Just run:
```./gradlew closeAndReleaseRepository```

Give it some time for artifact to be available on Maven Central.

Optionally, you can do this step in the UI - you can get more information about the issues.

For the Bintray - you have to confirm the upload on: https://bintray.com/liferay/liferay-mobile
### Step 3 : Update docs and changelog
1. Update documentation:
Edit [site.json](https://github.com/wedeploy/wedeploy.com/blob/4403c4becf56f5416bf8c4bdf4f2eaa2f7da8aa4/node/electric/src/site.json#L8) file
2. Update changelog
Edit [index.md](https://github.com/wedeploy/wedeploy.com/blob/master/node/electric/src/pages/updates/apis/android/index.md) file

</article>