---
layout: post
title: Daily Thorn - Laravel Again!
categories: []
tags: []
published: True

---

So, I started the day thinking I would explore how I would use Laravel to authenticate with LDAP but things soon came unraveled.

 
__Yes__, there are LDAP Auth modules available through GitHub but which one should I use. I wanna go with a stable/secure solution for authenticating. 
I decided to try the Laravel IRC channel and ask for a recommendation. One of the authors referred me to their app - __ccovey/leap-auth__.
 
I explained to __ccovey__ that I would be running this behind our firewall and he said it wouldn't work without a Composer update. Ugh!
He said he wrote this for Laravel 4.  Ugh! I have Laravel 3.2.10. 
 
**This puts me back to creating a new workflow. **
I need to have a Laravel install on my laptop that I can go off-network with to do Composer updates the go back on-network to synch with my web server. Pain pain pain. 
 
Another suggestion from the Laravel IRC was to look at Satis to create a static Composer library. Well.... I need to get [WAMP] [wamp] up and running on my laptop so I can get PHP/Curl running so I can then install [Composer] [comp] then [Satis] [satis].
I then had a great idea.. I have an off-network Ubuntu Linux machine.. why not get Laravel all "up and running" on my Linux machine then synch it to my laptop, then synch it to my web server. 
Well.. my Linux machine is now 100% of disk space. Ugh!!!


[wamp]: http://www.wampserver.com/en/
[comp]: http://getcomposer.org/
[satis]: https://github.com/composer/satis