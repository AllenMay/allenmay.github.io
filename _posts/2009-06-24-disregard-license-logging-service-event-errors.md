---
layout: post
title: Disregard "License Logging Service" Event Errors
categories: []
tags: []
published: True

---

I was getting multiple Event ID: 213 errors on our Windows 2000 server:
<pre>
   Event ID 213, License ServiceEvent
   Type: Warning
   Event Source: LicenseService
   Event Category: None
   Event ID: 213
</pre>
Research reveals:
<pre>
“For the reason above, by default LLS is disabled in Windows Server 2003 and future products.
In other words, the events reported by LLS are not accurate and you can safely disregard them.
To prevent these events from being recorded, you can turn off the licensing service on all
domain controllers.”
</pre>
SOURCE:  
[http://www.eventid.net/display.asp?eventid=213&eventno=52&source=LicenseService&phase=1] [dlink]

[dlink]: http://www.eventid.net/display.asp?eventid=213&eventno=52&source=LicenseService&phase=1

