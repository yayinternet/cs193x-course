---
layout: article-nosidebar
title: 'Listicle'
subtitle: 'Homework 1'
permalink: /homework/1-listicle
parent: homework
active: 'homework'
---

<script src="js/dev-guide-script.js" defer></script>

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

In this homework, you will be practicing the HTML and CSS that we learned in lecture. For **Part 1**, you are given screenshots and a description of a specific web page to replicate. You will recreate the web page exactly as shown in the provided screenshots. For **Part 2**, you will create your own list-based article with any styling you'd like.

<span class="label">Due Date:</span> Mon, Apr 17, 2017 at 11:59pm _(late cutoff: Wed, Apr 19, 2017 at 11:59pm)_  
<span class="label">HW1 Mini:</span> Mini-Homework  
<span class="label">HW1 Turn-in:</span> [Submission Form](https://goo.gl/forms/lK8Me9DqLTWtEOZA3)

---

* TOC
{:toc}

<section class="part" markdown="1">
## Part 0: Mini-Homework

### 1. Mini-Homework
{:.no_toc}

- Complete the Mini-Homework to review the key concepts needed to complete this homework.

### 2. Accept the HW1 assignment
{:.no_toc}

- Follow this link, where HW1 is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in [Homework 0]({{relative}}/homework/hw0-welcome).

</section>


<section class="part" markdown="1">
## Part 1: Beverage Listicle

A [listicle](https://en.wikipedia.org/wiki/Listicle) is a somewhat trendy type of article that uses a list as its thematic structure.

For Part 1, you will create a listicle web page that describes the "4 on-campus beverages you should be drinking" at Stanford.

### 1. General appearance and behavior
{:.no_toc}


### 2. Appearance and behavior details
{:.no_toc}


### 3. HTML and CSS style requirements
{:.no_toc}

For full credit, please abide by the following rules:

- **Do not use an ordered list element (`ol`) to create the list layout.** There's nothing wrong with doing this, per se, but it involves some fairly esoteric CSS that we did not cover in class. We recommend you write out the numbers "1.", "2.", etc. in the HTML instead of using `ol`.
- **Follow the best practices** that were described in lecture and in the mini-homework.
- **Match the given appearance as closely as possible.** It's fine if your web page is off from our description by a few pixels here and there, but noticeable differences may result in a lower homework score.

---

### Development guide

We have provided a development guide for this homework below, which we've hidden by default.

- Using (or not using) the development guide has no effect on your homework score.
- If you would like more of a challenge, we encourage you to first try to complete the homework without using the development guide. Refer to the guide only when you get stuck or after you've completed the homework to check your work.
- However, if you are pressed for time, new to web programming, or otherwise would like more assistance, use the development guide to make sure you are on the right track.

<span id="dev-guide-link">
  <i class="fa fa-angle-right" aria-hidden="true"></i>
  <a>Click to view the development guide:</a>
</span>
<section id="dev-guide" markdown="1" class="hidden">
#### Getting started
{:.no_toc}

</section>

</section>

<section class="part" markdown="1">
## Part 2: Creative: Your Listicle

Design your own listicle!
</section>

<section class="part" markdown="1">

## Submit

Turn in the link to your GitHub repository and links to your two completed web pages via this form:
- [Turn in Homework 1](https://goo.gl/forms/lK8Me9DqLTWtEOZA3)

</section>
