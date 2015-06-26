---
layout: post
title: The New Dayton Web Developers Website
categories: blog
tags: []
published: True
---

#Follow along as we build a new website for the **[Dayton Web Developers] [1]**  

To share the experience of building our new website were going to talk with group members to get their advice and document what we learn. We'll also share any challenges we come across and detail about the work put into creating the website.  

**Step 1: What do we need to know before starting work?**  
Whether your working on your own website, a company web application or a client design the work doesn't start until their is a "client" need. ***You*** could be the "client", your boss could be the "client" or your client could be the "client".  

In this article, we'll explore that early contact with the client:  

  <ul class="post-list">
    {% for dwd in site.dwd %}
      <li>
        

        <h2>
          <a class="post-link" href="{{ dwd.url | prepend: site.baseurl }}">{{ dwd.title }}</a>
        </h2>
        <span class="post-meta">{{ dwd.subtext  }}</span>
      </li>
    {% endfor %}
  </ul>


[1]: http://www.meetup.com/Dayton-Web-Developers "Dayton Web Developers"  


