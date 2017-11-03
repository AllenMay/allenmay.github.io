---
layout: post
title: Disable Windows Desktop Search
categories: []
tags: []
published: True

---

This valuable info was found on [Scott Hanselman’s Computer Zen] [dl1].

Change the following:  
`HKEY_CURRENT_USER\Software\Microsoft\Windows Desktop Search\DS`  
and set “`ShowStartSearchBand`” to 0, to get the default search behavior back.

While you’re at it you might as well go to:  
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ContentIndex`  
and set `FilterFilesWithUnknownExtensions` to `DWORD` with the value of “1” in order to enable full-text searching of files (like code!) that Explorer by default skips over.  

Thanks Scott Hanselman. This was a great help.

[dl1]: http://www.hanselman.com/blog/HowToDisableWindowsDesktopSearchExplorerIntegrationAfterInstallingOffice2007.aspx