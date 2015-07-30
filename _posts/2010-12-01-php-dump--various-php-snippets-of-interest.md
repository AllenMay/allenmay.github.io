---
layout: post
title: PHP Dump – Various PHP Snippets of Interest
categories: []
tags: []
published: True

---

Parse a URL:
Source: [http://forums.digitalpoint.com/showthread.php?t=2017044] [parse]

   
<pre>
$url = "http://domain.com/page-slug/the/rest/of/the/link";$url = str_replace
("http://","",$url);$parts = explode("/", $url); echo $parts[1]; // = page-slug // 
$parts[0]; = domain.com // $parts[2]; = the
</pre>

[parse]: http://forums.digitalpoint.com/showthread.php?t=2017044