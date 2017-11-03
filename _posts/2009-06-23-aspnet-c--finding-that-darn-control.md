---
layout: post
title: ASP.NET C# – Finding That Darn Control
categories: []
tags: []
published: True

---

<img srce = "/images/aspnetsnap.jpg">

I’ve spent untold hours trying to find the path to update a control from the code behind file. It seems to bite me every couple months. I spend hours twiddling with it.

My current problem is made worse because of the layering of controls. I’m using a DataList inside a LoginView inside Master.pages.

I finally pressed through using an event on the ItemDataBound event of the DataList.

In the code behind I can finally get my hands on the individual control elements:
<pre>
    protected void DataList1_ItemDataBound(object sender, DataListItemEventArgs e)
    {

        Label _IsLockedOutLabel = (Label)e.Item.FindControl("IsLockedOutLabel");
        Label _TechCodeLabel = (Label)e.Item.FindControl("TechCodeLabel");
        LinkButton _lbUnlock = (LinkButton)e.Item.FindControl("lbUnlock");     
        if (_IsLockedOutLabel.Text == "False")
        {
            _lbUnlock.Text = "Youdles - " + _TechCodeLabel.Text;

        };
    }
</pre>