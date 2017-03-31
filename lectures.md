---
layout: page
title: Lectures
permalink: /lectures/
active: 'lectures'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

This page will contain the slides, notes, and example code pertaining to lecture.

* [Tentative Course Schedule]({{ relative }}syllabus): See the roadmap for the entire quarter.
