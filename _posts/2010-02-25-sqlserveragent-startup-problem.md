---
layout: post
title: SQLServer Agent Startup Problem
categories: []
tags: []
published: True

---

I did not recieve my e-mail notifications of backups and data migration. On investigation, I found my SQL Server SQLServerAgent service disabled. Every time I tried to restart it, I would get an event:

<pre>
Event Type: Error
Event Source: SQLSERVERAGENT
Event Category: Service Control
Event ID: 103
Date:  2/24/2010
Time:  6:35:23 PM
User:  N/A
Computer: MySERVER
Description:
SQLServerAgent could not be started (reason: Unable to connect to server 'MySERVER Local Host Connection'; SQLServerAgent cannot start).

For more information, see Help and Support Center at http://go.microsoft.com/fwlink/events.asp.
</pre>
I beat my head against the wall.. searching endlessly for a solution..
The root resolution was:

- Make sure the all the services were running as Local System vs Service
- Add ‘Administrator’ to `Local Policies => User Rights Assignment => ‘Lock pages in memory’` in the Local Security Policy  

I then ran:
<pre>
sp_configure 'show advanced options', 1;
GO
RECONFIGURE;
GO
sp_configure 'Agent XPs', 1;
GO
RECONFIGURE
GO
</pre>
from a SQL query window.