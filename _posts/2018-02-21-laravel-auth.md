---
layout: post
title: Setting up AUTH in Laravel 5.6
categories: [post]
tags: [laravel]
published: True

---

## User authenticate [AUTH] in Laravel 5.6
I've been away from my friend **Laravel** for a while and wanted to get back into the groove by building some components for Laravel.  
I planned to build a custom user authentication module but soon found that user authentication is built-in with version 5.6.

**Here's how I got things running:**
1. My local test environment for PHP and Laravel was neglected.  
I spent some time get thigs updated:
    - **DOCKER:** I have a PHP-Docker resource but, because I'm using Laravel (and I want a simple local test environment) I chose to use the native PHP on my MacBook Pro. 
    - **LOCAL PHP:** I had PHP 7.0 on my MacBook. Laravel wanted 7.1.3 or newer.
      - Thanks to [Romans Malinovskis' instructions](https://medium.com/@romaninsh/install-php-7-2-on-macos-high-sierra-with-homebrew-bdc4d1b04ea6) I was able to get my local PHP running on version 7.2.2 with these commands:
      `> brew update `  
      `> brew remove --force --ignore-dependencies httpd`  
      `> brew remove --force --ignore-dependencies  php70-xdebug php71-xdebug`  
      `> brew remove --force --ignore-dependencies  php70-imagick php71-imagick`  
      `> brew remove --ignore-dependencies --force php70 php71 php72`  
      `> brew install httpd php72`  
      `> brew install php72 --with-httpd --with-thread-safety`  
      `> brew install httpd php72`  
      `> brew install php72 --with-httpd --with-thread-safety`  

    - I can now get Laravel running on my local environment
2. I needed a database to store my users. I chose sqlite instead of a MySQL.
3. Install the AUTH component of Laravel  
    - Following the instructions from the [Laravel - Authentication](https://laravel.com/docs/5.6/authentication) page, I was able to get AUTH working.
    - 