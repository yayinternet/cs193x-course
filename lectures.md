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
### Apr 14: `position`; Mobile web
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1C1_y51AGjiH1k76pxpkYYwh3E9Ah7fm_8SvySpoBvhs/edit#slide=id.p) / [lecture06.pdf](06/lecture06.pdf)
  - `position`
  - Useful `background-image` properties
  - `em` and `rem`
  - Mobile CSS
- **Code:**
  - [mobile.html](06/mobile.html) / [css](06/style.css): Our first mobile web example.
  - [squarespace-mobile.html](06/squarespace-mobile.html) / [css](06/squarespace-mobile-style.css): The mobile version of our Squarespace layout.

### Apr 12: More flexbox and layout
- **Slides:** [Google slides](https://docs.google.com/presentation/d/11hBjf4dq1WMdAgyM4-p0xPOo2geGble7yy_R6NXmde4/edit?usp=sharing) / [lecture05.pdf](05/lecture05.pdf)
  - More flexbox: shrink and grow
  - `height`/`width` percentage quirks: `vh`/`vw` and `box-sizing`
- [Block vs inline guide](05/block-inline): review if necessary
- **Code:**
  - [squarespace.html](05/squarespace.html) / [css](05/style.css): A rough copy of the [Bedford](https://bedford-demo.squarespace.com) Squarespace template. Be sure to inspect elements and view the source to see how it works!

### Apr 10: Flexbox
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1-RHZWIQ4kORqgVdXoYqbu2RseSZqznQLqHGXE7C4fk8/edit#slide=id.p) / [lecture04.pdf](04/lecture04.pdf)
  - Finish up Box Model
  - Debugging with Chrome Inspector
  - **Case study:** Squarespace layout
    - `display: flex;`
    - Google Fonts
    - Background images
- [Homework 1]({{ relative }}homework/1-listicle) <span class="label">HW1 assigned</span>

### Apr 7: More CSS; CSS Box Model
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1w3q6g-gJ_DeBZCUzz6E0VBQ9fVzJk7wYC5ouU6fX0KU/edit#slide=id.p) / [lecture03.pdf](03/lecture03.pdf)
  - HTML history and standard HTML
  - Combining selectors; cascading; inheritance
  - Box model
- <span class="label">HW0 DUE</span> **[HW0 due]({{relative}}homework/0-welcome) at 11:59pm**

### Apr 5: Block vs inline; classes and ids
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1OGSEAeWlZ9CSUi5xr73dnx3esIPS_FV4xtsBThmcV2I/edit#slide=id.p) / [lecture02.pdf](02/lecture02.pdf)
  - Block vs inline
  - `div` and `span`
  - `class`es and `id`s
  - [Block vs inline guide](05/block-inline)
- Code: [Course webpage](http://codepen.io/bee-arcade/pen/a3dbe970375f87f8330bfb2c303e5cc8/)

### Apr 3: Course overview and basic HTML/CSS
- **Slides:** [Google slides](https://docs.google.com/presentation/d/16Cx_pRg9a4stSVlhH1HcwXMaQwYm0-GtxuGhLi18m-s/edit#slide=id.p) / [lecture01.pdf](01/lecture01.pdf)
  - Syllabus and course info
  - HTML and CSS basics: syntax; element selector
- [Homework 0]({{ relative }}homework/0-welcome) <span class="label">HW0 assigned</span>
