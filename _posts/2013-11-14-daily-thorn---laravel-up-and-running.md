---
layout: post
title: Daily Thorn - Laravel up and running
categories: []
tags: []
published: True

---

**I tried, again, to get Laravel up and running on our IntrAnet. This time I WIN!**

I spent a lot of time tracing down why the paths weren't working but finally found that PHP 5.2.6 doesn't support NAMESPACE. Ugh!!

Luckily, I have another server running 5.4.12. Copied the folder over there and BAM! Laravel loads for me.

**Root cause:** The first thing that \laravel\laravel.php does is declare a [Laravel namespace] [name].

The PHP.NET site defines this in the Namespace Overview (PHP 5 >= 5.3.0)

Sometimes it can be a real pain being the server admin, database admin and the developer.....

[name]: http://www.php.net/manual/en/language.namespaces.rationale.php