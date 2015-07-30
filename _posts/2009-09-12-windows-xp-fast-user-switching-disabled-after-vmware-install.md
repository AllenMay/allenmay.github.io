---
layout: post
title: Windows XP Fast User Switching Disabled After VMWare Install
categories: []
tags: []
published: True

---

My kids use my PC for games and learning software so I have **Fast User Switching** setup to jump between their and my profile.

I just re-installed VMware Server 2.0.1 and had to re-dig through the steps to re-enable the **Fast User Switching**.

Following the Microsoft [KB302346] [kb] points me to the **GinaDLL** entry in the registry.

You just need to delete the following line from the registry:
<pre>
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\GinaDLL
</pre>

[kb]: http://support.microsoft.com/kb/302346