---
layout: post
title: CentOS – LAMP Quick and Easy Config
categories: []
tags: []
published: True

---

(Thank you to ‘this213‘ on the OZZU Webmaster Forum)

To get Apache/PHP/MySQL setup under CentOS do the following:

1. Edit the file `/etc/yum.repos.d/CentOS-Base.repo`  
Under the `[CentOSPlus]` section, change:  
`“enabled = 0”` <<== change this to 1  
2.Then run:  
`“yum install php php-mysql mysql-server php-gd postgres ImageMagick ImageMagick-devel”`  
php-gd and Imagemagick are used for creating dynamic images which you’ll want later on if not now. Postgres is a more powerful database than MySQL which you’ll probably also want later on if not now.

That’s it, those two steps will give you a fully functional, ssl enabled, web server with PHP support. Your DocumentRoot is in `/var/www/html` and your logs are in `/var/log/httpd/`.