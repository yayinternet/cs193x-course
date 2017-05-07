---
layout: article-nosidebar
title: 'Music Box'
subtitle: 'Homework 4'
permalink: /homework/4-musicbox
parent: homework
active: 'homework'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

In this homework, you will be creating a simple music visualizer. You will be querying the [Giphy API](https://github.com/Giphy/GiphyAPI#search-endpoint) to load a different gif on each "kick" of the song.  We have provided an `AudioPlayer` class to help you implement the desired audio behavior.

This assignment gives you more practice with object-oriented web programming, and you will also practice using the `fetch` API. You will be writing most of the classes needed to create this assignment. We are giving suggestions on what classes to create, though you do not need to follow these suggestions. We are **not** telling you what methods / fields / etc you need to add to your classes; that is for you to decide.

Note that we will _not_ grade on having good OO design. However, we do expect you to implement HW4 using an object-oriented approach. You must use classes and you can have **at most 2 global variables** in your solution.

<span class="label">Due Date:</span> Wed, May 17, 2017 at 11:59pm _(late cutoff: Fri, May 19, 2017 at 11:59pm)_  
<span class="label">HW4 Turn-in:</span> [Submission Form]()  

---

* TOC
{:toc}

<section class="part" markdown="1">
## 1. Getting started

### 1. Accept the HW4 assignment
{:.no_toc}

- [Follow this link](), where HW4 is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in [Homework 0]({{relative}}homework/0-welcome).

### 2. Overall behavior
{:.no_toc}

You will be creating a simple music visualizer that displays gifs in time with the beat of a song.
- You will present a list of songs for the user to choose from. The song list is stored in a JSON file.
- The user will also type in a theme for the visualization. This will be the search query you pass to the Giphy API.
- When the user has chosen a song and a theme, use the provided `AudioPlayer` class to play the song. Display gifs retrieved from the Giphy API in time with the kicks in the song.
  - You will use some caching and preloading techniques to make your music visualization play smoothly.

Watch the video below to see the behavior of the completed HW4:

This homework is inspired by the [see hear party](https://www.chromeexperiments.com/experiment/see-hear-party) Chrome experiment by Peter Javidpour.

</section>


<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did with [Homework 0]({{relative}}homework/0-welcome).

Turn in the link to your GitHub repository and the link to your completed flashcard web page via this form:
- [Submission Form]()

</section>
