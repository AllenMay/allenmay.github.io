---
layout: post
title:  "Score: Paper Ball 3 - Jekyll Default 1"
date:   2014-09-08 02:41:29
categories: jekyll update
---
## **MISSION:** Create a Central Profile Blog Using GitHub Pages

<img src="/images/paperballOPTIMIZED.svg" alt="Paperball" class="post-icon">

I had a great idea - use GitHub Pages as my central blog for projects and interest. Sounds simple enough, right? Well it is simple if you keep focus on the project priority, start with the basics and explore your options later.

Well, after several hours I found myself exploring [Jekyll][jekyll], themes for Jekyll and the GitHub Layout themes. 

**This is where I went off track:** I wanted to combine the best parts of all my options and found myself drifting away from the mission.
I had to "paper ball" my efforts 3 times before accepting the fact that I had gone off target and needed to get back to the original goal.

## **Paper Ball 1:** GitHub Page Layout
Creating a GitHub page is an easy implementation, just create a new repo with the name `[your GitHubID].github.io`. 

GitHub provides a nice theme tool to get your GitHub page up and running. Go to **Settings -> GitHub Pages -> Automatic Page Generator** and you'll find find several layouts to choose from. I had already installed Jekyll locally and found the default style of Jekyll pretty plain so the MERLOT layout look like a nice style for my project.

**Conflict:** Looking at the MERLOT layout, I didn't see the same structure as the default Jekyll layout. A lot of the default structure didn't seem to be in the MERLOT layout.

So I decided to use the MERLOT style on the Jekyll default configuration. <span class="parened">(See "Comparison Between MERLOT and Jekyll Default" below)</span>

Well it turns out the MERLOT Layout is pretty structured and then I would have to redo the mobile style.

**[Paperball!]**

## **Paper Ball 2:** Jekyll Theme 1
Ah! There are themes for Jekyll! Nice... Let's go shopping.

One of the first results from searching `jekyll themes` is [Jekyll Themes][jekyllthemes]...

I found a nice looking theme that focused on displaying a portfolio of work for an artist or developer.  
The portfolio grid was nice, and I would use it someday but for now I wanted to just hide it and use a basic blog approach. 

**Problem:** The portfolio grid is fed by the _posts listings. So, if I comment-out the portfolio grid, I have no _post ability. Well after a couple hours I realized that I would need to do too much re-engineering to make this work for my needs.

**[Paperball!]**

## **Paper Ball 3:** Jekyll Theme 2
Ok, back to [Jekyll Themes][jekyllthemes] to see if I can find a tighter fit to a simple blog with some style.

Found one.. It's a very nice them and focused on technical blogging. I dive in and start customizing it with my data and find; it's going to take me another couple hours to get it to a baseline setup before beginning to add any content.

This would be a great solution for a client re-design but not for my immediate need.

**[Paperball!]**

I was running out of project time.  
**I needed to get my blog up and running!**  
I am now back to the basics - the Jekyll default theme.

You win for now **Jekyll default style**, but I'm coming back and when I do...  
**_I'm going to create my own theme!!_**

<hr>


**Comparison Between MERLOT and Jekyll Default:**

**index.MERLOT:** `<meta http-equiv="X-UA-Compatible" content="chrome=1">`  
**head.JEKYLL:**  `<meta http-equiv="X-UA-Compatible" content="IE=edge">`

**index.MERLOT:** `<meta name="viewport" content="width=640">`  
**head.JEKYLL:**  `<meta name="viewport" content="width=device-width">`

**index.MERLOT:* `n/a`  
**head.JEKYLL:**  `<meta name="description" content="{{ site.description }}">`

**index.MERLOT:** `<link rel="stylesheet" href="stylesheets/core.css" media="screen">`  
                  `<link rel="stylesheet" href="stylesheets/mobile.css" media="handheld, only screen and (max-device-width:640px)">`  
                  `<link rel="stylesheet" href="stylesheets/pygment_trac.css">`  
**head.JEKYLL:**  `<link rel="stylesheet" href="{{ "/css/main.css" | prepend: site.`baseurl }}">

**index.MERLOT:** `<script type="text/javascript" src="javascripts/modernizr.js"></script>`  
                  `<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>`  
                  `<script type="text/javascript" src="javascripts/headsmart.min.js"></script>`  
                  `<script type="text/javascript">`  
                    `$(document).ready(function () {`  
                    `$('#main_content').headsmart()`  
                    `})`  
                  `</script>`  
**head.JEKYLL:**  `n/a`

**index.MERLOT:** `n/a`  
**head.JEKYLL:**  `<link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">`  

**index.MERLOT:** `<title>Allen May&#39;s GitHub Page by AllenMay</title>`  
**head.JEKYLL:**  `<title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}</title>`

**index.MERLOT:**    `<body>`  
**default.JEKYLL:**  `<body>`


**List of resources used for this project:**

 * [Markdown Cheatsheat][mdcs] 

[mdcs]:         https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[jekyll]:       http://jekyllrb.com/
[jekyllthemes]: http://jekyllthemes.org/