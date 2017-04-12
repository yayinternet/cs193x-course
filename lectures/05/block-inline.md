---
layout: article-nosidebar
title: 'Block and inline'
subtitle: 'Review'
parent: lectures
active: 'lectures'
---

{% assign lvl = page.url | append:'X' | split:'/' | size %}
{% capture relative %}{% for i in (3..lvl) %}../{% endfor %}{% endcapture %}

This is a review of the block vs inline rules we learned in [Lecture 2]({{relative}}/lectures#apr-5-block-vs-inline-classes-and-ids).

**This is arguably the most important rule to understand in CSS.** Please make sure this concept is crystal clear!

---

* TOC
{:toc}

<section class="part" markdown="1">

## Block elements

A `<div>` is an example of a block-level element in HTML. Other examples include `<h1>-<h6>`, `<p>`, `<section>`, `<nav>`, etc. The following code snippets use `<div>` to show how block-level elements behave in the default rendering mode.

**Block element properties:**
- The default height of a block-level element is the height of the content.
- The default width of a block-level element is the **length of the page**.
- You can set the `height` and `width` of block-level elements in CSS.
- Block elements are used to organize large sections of the HTML page.
- Block elements can have inline or block elements as children.
- Block-level elements flow top to bottom, meaning all block-level elements appear on their own line without an explicit line break (`<br/>`)

### Height and width of block elements
**By default**, the height of a block element is the height of the content, and the width is the length of the page:

<p data-height="265" data-theme-id="dark" data-slug-hash="zZggaE" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example: Default height and width " data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/zZggaE/">Block example: Default height and width </a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The default height and width can be overwritten in CSS using `height` and `width` properties. If you set the `height` and not the width, the default width is still the entire length of the page:

<p data-height="265" data-theme-id="dark" data-slug-hash="yMmmqV" data-default-tab="css,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example: Set height, and width " data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/yMmmqV/">Block example: Set height, and width </a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If there is no height and width set in CSS, and no content in the element, all you see is the border:

<p data-height="265" data-theme-id="dark" data-slug-hash="oZKKMP" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example: No content with border" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/oZKKMP/">Block example: No content with border</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

If there is no height and width set in CSS, no content in the element, and no border, then the elements do not show up at all:

<p data-height="265" data-theme-id="dark" data-slug-hash="LWwwXJ" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example: No content, no border" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/LWwwXJ/">Block example: No content, no border</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Top-to-bottom flow
Each element is laid out one on top of the other, regardless of the white space in HTML, and regardless of the size of the element:

<p data-height="265" data-theme-id="dark" data-slug-hash="YZmmeJ" data-default-tab="css,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example 1: Top to bottom flow" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/YZmmeJ/">Block example 1: Top to bottom flow</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


</section>

<section class="part" markdown="1">
## Inline elements

A `<span>` is an example of an inline element in HTML. Other examples include `<strong>`, `<a>`, `<em>`, etc. The following code snippets use `<span>` to show how block-level elements behave in the default rendering mode.

**Inline element properties:**
- The height of an inline element is the height of the content.
- The width of an inline element is the width of the content.
- The height and width of an inline element **cannot be set in CSS**.
- You **cannot** set the `height` and `width` of block-level elements in CSS
- Inline elements flow left to right, meaning inline elements appear on the same line unless the line wraps or there's an explicit line break (`<br/>`)

### Height and width of inline elements
The height and width of an inline element is exactly the height and width of the content.

<p data-height="265" data-theme-id="dark" data-slug-hash="zZggbR" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Inline example: Spans with content" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/zZggbR/">Inline example: Spans with content</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The box model still applies to inline elements, but the shape of the box is different: the box hugs the content of the line, and the box "snakes" to a second line if the inline element is long enough:

<p data-height="265" data-theme-id="dark" data-slug-hash="OmLLLV" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Inline example: Spans with content" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/OmLLLV/">Inline example: Spans with content</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>

If you try to set the `height` or `width` property in CSS, the properties are ignored:
<p data-height="265" data-theme-id="dark" data-slug-hash="rmBBaJ" data-default-tab="css,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Inline example: Height not settable" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/rmBBaJ/">Inline example: Height not settable</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>

If there is no content and no border to your inline elements, nothing will be shown, even if you set a `height` and `width`. That is because `height` and `width` are not settable CSS properties for inline elements.

<p data-height="350" data-theme-id="dark" data-slug-hash="XRrrbE" data-default-tab="css,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Inline example: Spans without content" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/bee-arcade/pen/XRrrbE/">Inline example: Spans without content</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Recall that the exact same CSS applies to a **block element**, such as `<p>`, **does** respect the height and width:

<p data-height="265" data-theme-id="dark" data-slug-hash="ZKzzbv" data-default-tab="css,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Block example: blockss- without content" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/bee-arcade/pen/ZKzzbv/">Block example: blockss- without content</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Left-to-right flow
Each inline element is laid out on the same line right next to each other, wrapping to the next line if necessary. To force a line break, you need to explicitly use `<br/>`.

<p data-height="358" data-theme-id="dark" data-slug-hash="NjKKrb" data-default-tab="html,result" data-user="bee-arcade" data-embed-version="2" data-pen-title="Inline example: Left-to-right flow" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/bee-arcade/pen/NjKKrb/">Inline example: Left-to-right flow</a> by vrk (<a href="http://codepen.io/bee-arcade">@bee-arcade</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

</section>
