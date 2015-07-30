---
layout: post
title: Ubuntu VMWare Install
categories: []
tags: []
published: True

---

I wanted to see what WGetPro would do for me and I didn’t find a Windows version so I installed Ubuntu in a VMWare server environment. I have been using Microsoft Virtual Server, but it looks like a pain in the neck to get Virtual Server to run Ubuntu.

CHALLENGES

- During the install it complained about the DVD disk not being able to be read from. I said retry about 15 times during the install process and it finally finished.
- After the install I was prompted with multiple update suggestions. I had to figure out how to set myself as ROOT so those updates would run.
- Got it down to about 8 updates that won’t install :(
- I’m now trying to figure out where the “Filter” for the broken install packages:
<image src="/images/ubuntusnap.jpg">