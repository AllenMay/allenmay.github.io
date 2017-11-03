---
layout: post
title: ASP:AdRotator and XML
categories: []
tags: []
published: True

---

I’m using the asp:AdRotator control and an XML source file. I found that a web link in the NavigateUrl value, in the XML file, needs to be free of special characters, like an ampersand (which I had in my URL):

[http://destination_domain/subdirectory/?someid=235&AnotherVar=TRUE] [blink1]

This line above broke my page. I replace the ampersand with the friendlier & and all is good:

[http://destination_domain/subdirectory/?someid=235&AnotherVar=TRUE] [blink2]

REFERENCE  

My ASPX contains:
…
<pre>
code lost
</pre>
…

My XML file contains:
<pre>

/root/dept/images/NewAniBanner.gif



http://destination_domain/subdirectory/?someid=235&AnotherVar=TRUE



This is a banner



<

80

Clicky Click
</pre>

[blink1]: http://destination_domain/subdirectory/?someid=235&AnotherVar=TRUE
[blink2]: http://destination_domain/subdirectory/?someid=235&AnotherVar=TRUE