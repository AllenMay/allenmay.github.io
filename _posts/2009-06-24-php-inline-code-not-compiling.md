---
layout: post
title: PHP Inline Code Not Compiling
categories: []
tags: []
published: True

---

I found my PHP code not working correctly, the web page was all screwed up.

Looking at rendered source of the page showed the PHP code explicitly being written out.

It came down to my PHP.INI config file having the short_open_tag set to off:
<pre>
; Allow the <? tag.  Otherwise, only <?php and  tags are recognized.
; NOTE: Using short tags should be avoided when developing applications or
; libraries that are meant for redistribution, or deployment on PHP
; servers which are not under your control, because short tags may not
; be supported on the target server. For portable, redistributable code,
; be sure not to use short tags.
short_open_tag = Off
</pre>
So I need to use the following:
<pre>
; WRONG WAY:


; CORRECT WAY:
</pre>