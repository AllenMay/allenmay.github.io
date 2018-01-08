---
layout: post
title: Eclipse, Java and SIP
categories: [post]
tags: []
published: True

---

## Eclipse
I've used the [Eclipse](http://www.eclipse.org/downloads) editor in the past but not since I started using a Mac in 2014. I've tried several times to to get Eclipse running on my MacBook but failed. Eclipse would complain that my version of [Java](https://www.java.com/en/) was too old. I would attempt to upgrade Java but it never worked.

## Java
For me upgrading Java required turning **OFF** the macOS **[System Integrity Protection](https://support.apple.com/en-us/HT204899)** (SIP).

Once SIP was turned **off** I could run the [Java upgrade](https://www.java.com/en/download/mac_download.jsp) and the [JDK upgrade](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

## System Integrity Protection (SIP)
**How do you turn off SIP?**  
1. Restart in [macOS Recovery](https://support.apple.com/en-us/HT201314)  
    How?  
    1. Restart your Mac and when the power comes back hold down Ctrl-R until the Apple icon displays. When you see the Apple icon, you can release the keys.
    2. After your macOS loads you will have a window with Utilities and other options in the menu. From the _Utilities_ menu select _Terminal_.
    3. From the Terminal window, run this command:  
        >csrutil disable  
    4. Restart your Mac and re-run your [Java upgrade](https://www.java.com/en/download/mac_download.jsp) and [JDK upgrade](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

3. When your done upgrading, you want to re-enable **System Integrity Protection** (SIP)  
    How?  
    1. Restart your Mac and get back into **macOS Recovery**
    2. Back in the Terminal window, run this command:
        >csrutil enable

## Back to Eclipse
Now that Java is updated you can re-run your [Eclipse](http://www.eclipse.org/downloads) installation and it shouldn't complain about Java.

