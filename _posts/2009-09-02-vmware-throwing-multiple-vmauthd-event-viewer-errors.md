---
layout: post
title: VMWare Throwing Multiple VMAUTHD Event Viewer Errors
categories: []
tags: []
published: True

---

1. Verify the user account: _\_\_vmware_user\_\__  
Control Panel > Administrative Tools > Computer Management > Local users and groups
2. Open **Local Security Settings**:  
Start > Run > secpol.msc
3. In **Local Security Settings**, go _Security Settings > Local Policy > User Rights Assignment > “Allow logon through Terminal Services Properties”_  
4. Make sure _\_\_vmware_user\_\__ is a member of the “Allow logon through Terminal Services Properties”
5. Make sure __vmware_user__ is in the “**Log on as a service**“  

Thanks to CrispinH on this forum:  
[http://communities.vmware.com/thread/120532;jsessionid=F389BA6619393BBE59D35FAF6AECFF29?start=15&tstart=0] [crispin]

[crispin]: http://communities.vmware.com/thread/120532;jsessionid=F389BA6619393BBE59D35FAF6AECFF29?start=15&tstart=0