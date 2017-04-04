---
layout: page
title: Lectures
permalink: /lectures/
active: 'lectures'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

This page will contain the slides, notes, and example code pertaining to lecture.

* [Tentative Course Schedule]({{ relative }}syllabus): See the roadmap for the quarter.

---

### Apr 3: Course overview and basic HTML/CSS
- **Slides:** [Google slides](https://docs.google.com/presentation/d/16Cx_pRg9a4stSVlhH1HcwXMaQwYm0-GtxuGhLi18m-s/edit#slide=id.p) / [lecture01.pdf](01/lecture01.pdf)
  - Syllabus and course info
  - HTML and CSS basics: syntax; element selector
  - Block vs inline
- [Homework 0]({{ relative }}homework/0-welcome) <span class="label">HW0 assigned</span>
