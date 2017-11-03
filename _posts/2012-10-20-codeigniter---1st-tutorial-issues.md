---
layout: post
title: CodeIgniter - 1st Tutorial Issues
categories: []
tags: []
published: True

---

I've started looking at CodeIgniter to help simplify my development efforts (vs. coding everything from scratch for each new project).

To get familiar with CodeIgniter I followed their [VideoTutorials] [vtutor] but soon found myself in "troubleshooting mode". 
 
A minor discrepancy was between the class names - CodeIgniter now uses the CI_ prefix on the core classes. The video tutorial showed the controller class name as `Controller`. Setting my code to `CI_Controller` fixed that small problem.
 
Everything was going well until the end of the video. The final instructions to build a constructor caused my code to throw a `Call to undefined method` error.
 
I eventually found the answer as I was looking over the config.php file. The Class Extension Prefix section had two URL's to the CodeIgnitor User Guide for classes and libraries. At the bottom of the [Core Classes] [core] page, I found new examples of creating the class.
So; here is what wasn't working.. and throwing the `Call to undefined method` error: 

<pre>
...
class Blog extends Controller {

  function Blog()          <--- PROBLEM
  {
    parent::Controller;    <--- PROBLEM

  }

 function index()
 {
   $data['title'] = "My Blog Title";
   $data['heading'] = "My Blog Heading";
   $data['todo'] = array('clean house','eat lunch','call mom');
   
  $this-&gtload-&gtview('blog_view', $data);
 }
}
...
</pre>

And here is the change that fixes the issue:

<pre>
...
class Blog extends CI_Controller {

  function __construct()     <-- CORRECTED
  {
    parent::__construct();   load->view('blog_view', $data);
 }
}
...
</pre>

I looked back at the VideoTutorial page and found the comment __\"Sorry, we currently don't have any new tutorials\"__ and below that __\"The following tutorials are based on older versions of the CodeIgniter software, and as such may contain outdated code.\"__

<img src="/images/CodeIgnitor.png">


As most people, I went strait to the video (because I was soo excited to get started) and missed the disclaimer.

I tried to find a "Comments" for the page but found none. I would have suggested they make this more obvious. Simply putting the disclaimer right above the image link in bolded text would help avoid this.

[vtutor]: http://codeigniter.com/tutorials/
[core]: http://codeigniter.com/user_guide/general/core_classes.html