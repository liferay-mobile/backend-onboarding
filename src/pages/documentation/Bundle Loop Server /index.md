---
title: "Bundle Loop Server"
description: ""
layout: "guide"
icon: "code-file"
weight: 4
---

###### {$page.description}

<article id="1">

## How to configure a Loop bundle ?

1. Clone the repositories
    ```
    git clone git@github.com:liferay/liferay-portal-ee.git
    git clone git@github.com:liferay/liferay-plugins-ee.git
    ```
2. Actually the Loop server is using the portal 6.2 version that using **Java 1.7** 
    - You can download this version here (<http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jdk-7u80-oth-JPR>)
3. It is strongly recommended to use the ```.bash_profile``` to switch the Java version. To help you, you can add these alias to switch easily in terminal
    ```
    alias java7="export JAVA_HOME=(/usr/libexec/java_home -v 1.7)"
    alias java8="export JAVA_HOME=(/usr/libexec/java_home -v 1.8)"
    ```
4. You need to install a compatible version of ```Ant``` with ```Java 7```, only version ```1.9.x``` is compatible
    - To install using brew, you can run this command
        ```ruby 
        brew install ant@1.9
        ```
    - To link this old version, use the command
        ```ruby
        brew link ant@1.9 --force
        ```
5. Add the file ```app.server.mac_username.properties``` in ***root directory of portal*** and in ***root directory of plugins***
    ```
    app.server.type=tomcat
    app.server.tomcat.version=7.0.62
    app.server.parent.dir=${project.dir}/../bundles/loop-portal-ee-6.2.x
    ```
6. Now we are ready to deploy the ```portal``` and of ```loop portlet````
    ```
    java7
    cd {portal.dir}
    ant all

    cd {loop.portlet.dir}
    ant all
    ```
7. Create the ```deploy.sh``` file on root folder
    ```
    #!/bin/sh
    #export JAVA_HOME=(/usr/libexec/java_home -v 1.7)
    export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home

    ant -buildfile ./liferay-plugins-ee/hooks/portal-compat-hook/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/portlets/asset-entry-set-portlet/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/portlets/asset-sharing-portlet/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/portlets/loop-portlet/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/portlets/push-notifications-portlet/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/portlets/token-auth-portlet/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/themes/loop-theme/build.xml clean deploy
    ant -buildfile ./liferay-plugins-ee/webs/url-metadata-scraper-web/build.xml clean deploy

    echo "auth.token.ignore.portlets=82,1_WAR_loopportlet" > ./bundles/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes/portal-ext.properties
    ```
8. Run ```deploy.sh``` in root folder from both ```portal.dir``` and ```loop.portlet.dir```

    ```
    ./deploy.sh run
    ```
9. Create a file ```portal-ext.properties``` in ***bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes*** with the content
    ```
    auth.token.ignore.portlets=82,1_WAR_loopportlet
    ```
10. Start the tomcat from ```bundle.tomcat.dir/bin```
    ```
    ./catalina.sh run
    ```
11. After started the server, you need to configure the database in user interface

</article>

<article id="2">

## Additional information
1. You need to put the token auth in ***/bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/token-auth-portlet/WEB-INF/classes/portlet.properties*** (can be any value) 
    ```
    token.secret = ANY_VALUE
    ```
2. Create a file ```portal-ext.properties``` in ***loop/server/bundles/loop-portal-ee-6.2.x/tomcat-7.0.62/webapps/ROOT/WEB-INF/classes*** with the content
    ```
    auth.token.ignore.portlets=82,1_WAR_loopportlet
    ```
</article>

<article id="3">

## Configure Push Notifications
1. Give permission to all users allow register their push token in ***portal***, in Roles > Define permission > configuration > push notification

    <img src="/images/role_loop_person.png" />
2. Configure Android API Key using our development key. Put this API Key [Push Android API Key Development](https://github.com/liferay-mobile/mobile-passwords/blob/master/README.markdown#loop-push-android-api-key-development)
    <img src="/images/push_apikey_android.png" />
3. Configure the iOS certificate, the development certificate can be found in ***loop/liferay-loop-ios/certificates/push/development/certificate_sandbox.p12*** and the password is [Push iOS Certificate password](https://github.com/liferay-mobile/mobile-passwords/blob/master/README.markdown#loop-push-ios-certificate-password)
    <img src="/images/push_certificate_ios.png" />

</article>

