---
layout: post
title:  "Open the Window for Some Fresh Air"
date:   2014-09-18 16:49:29
categories: git nodejs proxy
---
##After a long time trying I think I've finally got my HTTPS_PROXY settings set correctly. I can now use NPM and GIT!##

**GIT:** I have been trying to use GIT inside the corporate firewall for some time. Unfortunately it's blocked by the proxy server.

**NPM:** The same problem affects NODE.JS ... I can't NPM anything because it's blocked.

This has prevented me from doing any modern web development at work!

So what was the missing piece?..

I didn't have the right URL format for my HTTPS_PROXY environment variable. I attempted `http://proxyservername:9090` without success. What I was missing was the username/password embedded in the URL:
`http://[loginname]:[password]@[proxyserver]:[PORT]`

I just installed GULP with a `$ npm install --global gulp` (I'm soo excited).

With success with NPM I tried GIT. I finally got `git clone https://github.com/AllenMay/allenmay.github.io.git` to work for me (YAY! More excitement).

Links to resources that help me find my way:

* [Stack Overflow: How do I pull from a Git repository through an HTTP proxy?](http://stackoverflow.com/questions/128035/how-do-i-pull-from-a-git-repository-through-an-http-proxy)

* [Stack Overflow: How to set up Git to get through a proxy](http://stackoverflow.com/questions/7734518/how-to-set-up-git-to-get-through-a-proxy)
