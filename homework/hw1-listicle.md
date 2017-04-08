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

### 1. Overall appearance and behavior
{:.no_toc}

A screenshot of the entire page (with a screen width of 1280px) is linked below:
- [Full-size screenshot](images/hw1-fullpage.png)

You should recreate the web page in the screenshot above.

- **You do not have to type in the contents of the page.** The text of the article is contained within `listicle-content.txt`, which is included in your Homework 1 starter code. Copy and paste the text of `listicle-content.txt` into your `listicle.html` file, then add the HTML tags necessary to style the page.
- The images are also in the `images/` directory of the Homework 1 starter code.

The sections below will describe the details of the web page.

### 2. Font faces, sizes, and colors

**Page Title:**
<img src="images/hw1-title.png" class="screenshot" />
- The font face is `'Roboto Slab'` and the fallback font is `serif`.
- The font size is `36px`.
- The font weight is `normal` (not bold).
- The font color is `white`.
- The title is vertical and center aligned to the header image.

**Profile Text:**
<img src="images/hw1-profile.png" class="screenshot" />
- The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
- The font size is `18px`.
- The font weight for the author name ("Victoria Kirst") is `bold`
- The font style for the last updated ("Last updated Apr 7, 2017") is `italic`.
- The font color is `rgb(51, 51, 51)`.
- The line height `24px`.
- The gray line under the "Last updated" line is `10px` under the text, `2px` wide, and the color is `#e6e6e6`.

**Body Text:**
<img src="images/hw1-body.png" class="screenshot" />
- Heading
  - The font face is `'Roboto Slab'` and the fallback font is `serif`.
  - The font size is `36px`.
  - The font weight is `bold`.
  - The number's color is `rgba(0, 0, 0, 0.25)`.
  - The title color is `rgb(51, 51, 51)`.
- Address
  - The address under the heading is a link and is described in the [Links section](#links).
- Paragraphs
  - The font face is `'Source Sans Pro'` and the fallback font is `sans-serif`.
  - The font size is `18px`.
  - The line height `32px`.
  - The font color is `rgb(51, 51, 51)`.

<img src="images/hw1-rec.png" class="screenshot" />
- Recommendation
  - The phrase "Recommendation:" is `bold`.


### 3. Links
Here is a description of how links should work on your page:

- Each address of the page is a link. The URL for each link is listed in `listicle-content.txt`.
- The link color is `#42b4d6`.
- The link is not bold, and the link is not underlined unless you hover over the link.
- When you hover over the link, the link becomes underlined.
- Hints:
  - To remove an underline, you can use CSS property `text-decoration: none;`
  - To add an underline, you can use CSS property `text-decoration: underline;`

### 4. Images

### 5. Section measurements
{:.no_toc}



<img src="images/hw1-measurements.png" />


### 3. HTML and CSS style requirements
{:.no_toc}

For full credit, please abide by the following rules:

- **Do not use an ordered list element (`ol`) to create the list layout.** There's nothing wrong with doing this, per se, but it involves some fairly esoteric CSS that we did not cover in class. We recommend you write out the numbers "1.", "2.", etc. in the HTML instead of using `ol`.
- **Follow the best practices** that were described in lecture and in the mini-homework.
- **Match the given appearance as closely as possible.** It's fine if your web page is off from our description by a few pixels here and there, but noticeable differences may result in a lower homework score.


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
