---
layout: post
title: An "Oldy-But-Goody"
categories: []
tags: []
published: True

---

A common task I need to do on XP machines is remove the “Compress Old Files” from the registry so the “Disk Cleanup” utility will run. Otherwise it will run forever.

Open the registry and search for “compress old files”. Delete the “Compress Old Files” key then run your “Disk Cleanup”.

Contents of the registry key:
<pre>
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Compress Old Files]
@="{B505260-oC21-11D2-AB56-00AoC9082678}"
"Priority"=dword:0000012c
"StateFlags"=dword:00000001
</pre>
Put this in a .reg file and run it.
<pre>
Windows Registry Editor Version 5.00

[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Compress old files]
</pre>
The hyphen at the front does the removal  
Resource: [http://support.microsoft.com/kb/310516] [kb]

[kb]: http://support.microsoft.com/kb/310516