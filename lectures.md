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
* [NodeJS install instructions](/install-node): Follow these instructions to install NodeJS on your machine.

---

### May 15: Servers, NodeJS and Express
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1OwcbHRnvPR3MRmfdz3jeD6gvjC_3dx8FG-BGgQ_0S_g/edit#slide=id.g1dfc152969_0_553) / [lecture19.pdf](19/lecture19.pdf)
  - Servers in general
  - NodeJS
  - `npm`
  - Express
  - fetch() to localhost
- **Code**
  - [Lecture 19 GitHub repo](https://github.com/yayinternet/lecture19)
- **Node Installation**
  - [Instructions](/install-node): Follow these instructions to install NodeJS on your machine. This will be necessary to run lecture examples, to complete HW5 and to complete the final project. (Thanks to our TA Zach Maurer for writing these awesome instructions!)

---
### May 12: More Fetch; JavaScript Event Loop
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1whs6hJ6oBNKfVEwExf7dq8AnD8W4WAqzb5wMcI5GqQQ/edit#slide=id.p) / [lecture18.pdf](18/lecture18.pdf)
  - More Fetch API:
    - Querying 3rd-party REST APIs
    - Submitting forms
    - CORS
  - Asynchrony in JavaScript
  - JavaScript event loop
- **Code**
  - [Fetch from Spotify](https://github.com/yayinternet/lecture17/tree/master/spotify-albums) / [demo](https://yayinternet.github.io/lecture17/spotify-albums/spotify-discography.html)
  - Form elements JS syntax: [select](https://codepen.io/bee-arcade/pen/963ae17d61f828a7b5c321c148b84e40?editors=1011), [textarea](https://codepen.io/bee-arcade/pen/bd301158f62a54e40eea37da1aff0d7a?editors=1011), [checkbox](https://codepen.io/bee-arcade/pen/714933b816bf4f91a6ae4ab8eba6b649?editors=1011)

### May 10: Fetch API and JSON; 3rd-party APIs
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1Rim3-IXt6yN7yny_SBv7B5NMBiYbaQEiRMUD5s66uN8/edit#slide=id.g219bfd85d1_1_32) / [lecture17.pdf](17/lecture17.pdf)
  - Fetch API and JSON
  - Fetch in a class
  - REST APIs
    - HTTP Methods: GET
    - Query parameters
- **Code**
  - [GitHub repo](https://github.com/yayinternet/lecture17) / [live](https://yayinternet.github.io/lecture17/): Several examples of Fetch API
    - [Fetch from a class](https://github.com/yayinternet/lecture17/tree/master/oo-albums) / [demo](https://yayinternet.github.io/lecture17/oo-albums/discography.html)
    - [Fetch from Spotify](https://github.com/yayinternet/lecture17/tree/master/spotify-albums) / [demo](https://yayinternet.github.io/lecture17/spotify-albums/spotify-discography.html)
  - Form elements JS syntax: [select](https://codepen.io/bee-arcade/pen/963ae17d61f828a7b5c321c148b84e40?editors=1011), [textarea](https://codepen.io/bee-arcade/pen/bd301158f62a54e40eea37da1aff0d7a?editors=1011), [checkbox](https://codepen.io/bee-arcade/pen/714933b816bf4f91a6ae4ab8eba6b649?editors=1011)

### May 8: Fetch API, Promises
- **Slides:** [Google slides](https://docs.google.com/presentation/d/16uIU-dQrX6iBleAB9J_r9KyhUwfucCZF2wRGCi8EIAo/edit#slide=id.p) / [lecture16.pdf](16/lecture16.pdf)
  - Finish functional JS
    - Currying
    - Anonymous functions
    - Closures
  - Fetch API
    - `fetch()`
    - Promises and `.then()`
  - JSON

---
### May 5: Callbacks; Functional JavaScript
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1bfXbmli-eYiKJPrc1PB-p_WaqggLUIF7oO1KqsjZbKc/edit) / [lecture15.pdf](15/lecture15.pdf)
  - Callbacks
  - Functional JavaScript
    - Closures
- **Code**
  - [Button example](https://codepen.io/bee-arcade/pen/78575ded5baba8aa15642037c298d9b4?editors=0010): Communicating between two classes (`Button` to `Menu`) with callbacks

### May 3: Custom events, `this`, and `bind`; first-class functions
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1B8uwQt5OD-GJ4-OJvWfuqXfvSGKiqhy1Lgnsq9h_tqI/edit) / [lecture14.pdf](14/lecture14.pdf)
  - Custom events example
  - `this` keyword / `bind()`
  - First-class functions
  - Callbacks
- **Code**
  - [Button example](https://codepen.io/bee-arcade/pen/b0ae765cc6ccf3187c03afda2b2e085c?editors=0010): Communicating between two classes (`Button` to `Menu`) with custom events
  - [`this` mystery 1](https://codepen.io/bee-arcade/pen/b0c1f3c17814ba31d99c1e72a46b46e2?editors=1011): See how `this` changes in different contexts
  - [`this` mystery 2](https://codepen.io/bee-arcade/pen/d214bea753753099d49774157b98a71b?editors=0011): See how `this` changes in different contexts
  - [Present example](https://codepen.io/bee-arcade/project/editor/XqGzeD/): Communicating between two classes (`Present` to `App`) via callbacks

### May 1: More ES6 classes; `this` and `bind`
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1E2CvOxrtxF9clb3xqlyWAVX1x5q0YNk6t08Iteb9W_Y/edit) / [lecture13.pdf](13/lecture13.pdf)
  - More ES6 classes
  - `this` keyword / `bind()`
  - Communicating between classes
    - Custom events
  - JavaScript application architecture

---

### Apr 28: CSS Animations; ES6 classes
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1vIHDuMfLgeXWDlHy3SrZn2YDaqHwP4l2RhWHAk_jUq8/edit#slide=id.p) / [lecture12.pdf](12/lecture12.pdf)
  - Keyboard events
  - Pointer events
  - Animations
  - Intro ES6 classes
- **Code:** (see more in slide deck)
  - [Dragon walk](https://codepen.io/bee-arcade/pen/dd65e0fc478dac692c0874618eab9d36?editors=1011): Codepen example of dragging a dragon along the x-axis
  - [2D dragon walk](https://codepen.io/bee-arcade/pen/6a7de5577263dfc389605d19b33881f1)
  - [OO present with bind](https://codepen.io/bee-arcade/project/editor/ZBEqmD/) / [live](https://codepen.io/bee-arcade/project/live/ZBEqmD/): Object-oriented Present example
  - [OO photo album](https://codepen.io/bee-arcade/project/editor/AbJmLA/) / [live](https://codepen.io/bee-arcade/project/live/AbJmLA/): Object-oriented Photo Album example


### Apr 26: Keyboard, Mouse, and Touch events
- **Slides:** [Google slides](https://docs.google.com/presentation/d/19I7jtXPQGfOYBRc7PdwpaTWVqOgclNHCE2odkd9-gGQ/edit#slide=id.p) / [lecture11.pdf](11/lecture11.pdf)
  - Keyboard events
  - Pointer events
  - Animations
- **Code:**
  - [key-events.html](11/key-events.html): Prints out keyboard events in the Web Console.
  - [photos-start.html](11/photos-start.html): Starter code for our photos example.
  - [photos-desktop-finished.html](11/photos-desktop-finished.html): Finished photo album example with keyboard navigation
  - [photos-mobile-finished.html](11/photos-mobile-finished.html): Finished photo album example with swipe left/right navigation

### Apr 24: More JavaScript events
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1UWuchBk2aU1Qvq6VjW-AQAuFXs0XYHK2T1cVA_8v7Bo/edit#slide=id.p) / [lecture10.pdf](10/lecture10.pdf)
  - Event propagation: bubbling and capturing
  - Finish case study
  - `data-*` attributes
  - Mischief and hacks
- **Code:**
  - [display-toggle.html](10/display-toggle.html): Display toggle. Shows how clicking an inner element fires the click event on the outer element.
  - [bubbling.html](10/bubbling.html): Event bubbling example. See slides for more variants.
  - [empty-extension.zip](10/empty-extension.zip): Empty extension that does nothing but print a log message
  - [quora-extension.zip](10/quora-extension.zip): Extension that removes the Quora login nag screen
  - [adblock-block-block.zip](10/adblock-block-block.zip): Extension that unblocks [Adblock](https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom) on [OnDemandKorea](www.ondemandkorea.com)

---

### Apr 21: More DOM; case study
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1MZ6TMztOyLP000b6VlHjLTVLOAXCPfiCoXPAxZ6q0DQ/edit#slide=id.g1dd384a22c_0_101) / [lecture09.pdf](09/lecture09.pdf)
  - Adding and removing elements from DOM
  - Case Study: tic-tac-toe
  - Traversing the DOM
- **Code:**
  - [dom-walk-script.js](09/dom-walk-script.js) / [html](09/dom-walk.html): Recursively prints out every DOM element of the HTML page.
  - [tictactoe.js](09/tictactoe.js) / [html](09/tictactoe.html) / [css](09/tictactoe.css): Simple tic-tac-toe game

### Apr 19: DOM and events
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1FO1B6oVLYazYFFBV-EREdX9MVhp3w-wFJC5lk3LlaHQ/edit#slide=id.p) / [lecture08.pdf](08/lecture08.pdf)
  - Finish language feature tour
  - DOM: Document Object Model
  - Basic event handling

### Apr 17: Introduction to JavaScript
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1gc1ef_r_DCPWCXe_AS3czzstk6d5U9yLB3YeqWmXVhQ/edit#slide=id.p) / [lecture07.pdf](07/lecture07.pdf)
  - What is JavaScript?
  - Language feature tour
- **Code:**
  - [first-js.html](07/first-js.html) / [script.js](07/script.js): A button with a simple event handler.

---

### Apr 14: `position`; Mobile web
- **Slides:** [Google slides](https://docs.google.com/presentation/d/1C1_y51AGjiH1k76pxpkYYwh3E9Ah7fm_8SvySpoBvhs/edit#slide=id.p) / [lecture06.pdf](06/lecture06.pdf)
  - `position`
  - Useful `background-image` properties
  - Mobile CSS
  - **Skipped but useful:** `em` and `rem`
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

---

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
