---
layout: post
title: Quickly Launch a Folder, As a Website, In Visual Studio
categories: []
tags: []
published: True

---

Thank you – [wavesmash] [wave] – for posting the instructions for running a website either from a command line or from a right-mouse-click, into Visual Studio.  
[http://sqlrs.blogspot.com/2008/10/how-to-open-website-in-visual-studio.html] [blink]  

I walked through his steps and it worked perfectly… exactly what I needed.

1. In Visual Studio, open the Macro IDE (Tools > Macros > Macros IDE…)
2. In MyMacros > References, make sure there is a reference to VsWebSite.Interop and/or VsWebSite.Interop90 (I did both)
3. Right-mouse click on MyMacros and choose Add > Add New Item
4. Choose Code File and give a name “Website” then click Add
5. In the new Website Code File paste the following:  
```
Public Module Website
Sub OpenWebsite(Optional ByVal path As String = "")
If (String.Compare(path, String.Empty) = 0) Then
MsgBox("Must supply a folder path to the OpenWebsite macro", MsgBoxStyle.OkOnly)
Else
Dim webPkg As VsWebSite.VSWebPackage
webPkg = DTE.GetObject("WebPackage")
webPkg.OpenWebSite(path, VsWebSite.OpenWebsiteOptions.OpenWebsiteOption_None, False)
End If
End Sub
End Module
```
6. Save and Build  

This is ready for running from a command line:
<pre>
devenv /command “Macros.MyMacros.Website.OpenWebsite C:\MyProjects\MyCompany\CompanySite”
</pre>
To do this copy the following into a OpenWebsite.reg file and run it.
<pre>
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell\OpenVSWeb]
@="Open as Visual Studio Website"
[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Folder\shell\OpenVSWeb\command]
@="devenv.exe /command \\\"Macros.MyMacros.Website.OpenWebsite %1\\\""
</pre>
Now you should be able to right click on a folder in Windows Explorer and select “Open as Website”.

[wave]: http://www.blogger.com/profile/01723071506840447394
[blink]: http://sqlrs.blogspot.com/2008/10/how-to-open-website-in-visual-studio.html