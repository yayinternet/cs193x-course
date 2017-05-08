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

Note that we will not grade on having good OO design. However, we do expect you to implement HW4 using an object-oriented approach. You must use classes and you can have **at most 2 global variables** in your solution.

<span class="label">Due Date:</span> Wed, May 17, 2017 at 11:59pm _(late cutoff: Fri, May 19, 2017 at 11:59pm)_  
<span class="label">HW4 Turn-in:</span> [Submission Form]()  

---

* TOC
{:toc}

<section class="part" markdown="1">
## 1. Getting started

### 1. Accept the HW4 assignment
{:.no_toc}

- [Follow this link](https://classroom.github.com/assignment-invitations/6ef3e8ba6fe3b0b63a01de20a67fb477), where HW4 is stored on GitHub Classroom.
- Accept the homework and download the starter code as you did in [Homework 0]({{relative}}homework/0-welcome).

### 2. Overall behavior
{:.no_toc}

You will be creating a simple music visualizer that displays gifs in time with the beat of a song.
- You will present a list of songs for the user to choose from. The song list is stored in a JSON file.
- The user will also type in a theme for the visualization. This will be the search query you pass to the Giphy API.
- When the user has chosen a song and a theme, use the provided `AudioPlayer` class to play the song. Display gifs retrieved from the Giphy API in time with the kicks in the song.
  - You will use some caching and preloading techniques to make your music visualization play smoothly.

Watch the video below to see and hear the behavior of the completed HW4:

**The video has sound!**

<iframe src="https://drive.google.com/file/d/0BxtKIz3gISunU1g4S19LeHpZaVE/preview" width="640" height="360"></iframe>

This homework is inspired by the [see hear party](https://www.chromeexperiments.com/experiment/see-hear-party) Chrome experiment by Peter Javidpour.

</section>

<section class="part" markdown="1">

## 2. Starter code

### 1. Menu HTML and CSS
{:.no_toc}

**Menu screen**
- Open `index.html` in a browser. It should look like the following:

<img src="images/hw4-starter-screen.png" class="screenshot" />

- We have written the HTML and CSS for the menu screen only. You will have to add the necessary HTML and CSS to `index.html` and `musicbox-style.css` to complete the rest of the UI. You will also need to add the JavaScript to populate the menu.

### 2. `AudioPlayer`
{:.no_toc}

The `AudioPlayer` is a class we're providing to help you implement the audio-related functionality of this assignment. You can give the `AudioPlayer` a URL to an audio file and it will play and pause the song when instructed. You can also give the `AudioPlayer` a callback to fire whenever it has detected a kick drum sound.

We do **not** expect you to modify `AudioPlayer`, but we do expect that you will create one `AudioPlayer` object for your music visualizer. Unlike some of the other classes we have written and used in CS193X, `AudioPlayer` is not associated with a UI element or a DOM element that is visible on the page.

Here are the public\* methods of `AudioPlayer`:

Method name | Description
--- | ---
`constructor()` | Creates a new `AudioPlayer` object.
`setSong(songUrl)` | Sets the song that the `AudioPlayer` will play. `songURL` is a URL to an audio file, such as an MP3 file. This does **not** play the song yet.<br/>**Note:** `songURL` cannot be a `file:///` URL. It must be served by `http` or `https`.
`setKickCallback(kickCallback)` | Sets the function that will fire every time `AudioPlayer` thinks there was a kick in the song. `kickCallback` is a function. The `kickCallback` will only begin firing when `play()` has been called.
`play()` | Plays whatever song was set by an earlier call to `setSong`. While the song is playing, the `kickCallback` set by `setKickCallback` will fire when the `AudioPlayer` thinks there was a kick in the song.
`pause()` | Pauses the song that was playing.

(\*As explained in class, all methods of JavaScript classes are technically public, but these are the methods we intend for you to call.)

**Limitations**
- The `AudioPlayer` is **not perfect** at detecting kicks. Sometimes it will fail to detect a kick in a song, and other times it will detect a kick when none is there. This is because audio processing is an imperfect art that will always have some degree of error. This is not something that you need to fix in your code.
- Some songs **do not have kick drum sounds in them** and therefore the `kickCallback` set by `setKickCallback` will never fire, or it will fire very rarely. "Toby Fox: Spear of Justice" is an example of such a song.

 The `AudioPlayer` class uses an [Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) for audio playback and the [dancer.js](https://github.com/jsantell/dancer.js) library to detect kicks in the song. Dancer.js is built natively in the browser using the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

### 3. `App` and `script.js`
{:.no_toc}
 We have created a stub `App` class that represents the entire music visualizer, similar to how the `App` class represented the entire Flashcard app in HW3. We also provide a `script.js` that creates an instance of the `App` class.

</section>

<section class="part" markdown="1">

## 3. Class decomposition

We recommend you architect your program in the following way:

<img src="images/hw4-class-architecture.png" class="screenshot" />

Create 4 new JavaScript classes:
- `MenuScreen` Represents the menu screen that you see when you first load the music visualizer.
- `MusicScreen`: Represents the music visualizer screen, i.e. the screen that you see after you select a song. Creates the `AudioPlayer` as well as the classes below:
  - `GifDisplay:` Represents the gif display area. Keeps track of which gif is being shown and can select a new random gif to be shown.
  - `PlayButton:` Represents the play button. Clicking on it toggles audio playback.

Modify `App` to create the `MenuScreen` and the `MusicScreen`.

**Note:** The HW4 spec is written with the assumption that you have structured your app in the way that we've recommended above. However, you don't _have_ to follow our recommendation; you can structure your web app however you'd like. If you prefer a different class breakdown, you do not have to follow our suggestions.
- That said, if you do choose to architect your web app in a way that's different from what we suggesetion, we will grade your object-oriented design more strictly. You will probably lose points if you only make an `App` class and create no other classes, for example.  
</section>

<section class="part" markdown="1">

## 4. Implementation: Menu Screen

### Choose a song
{:.no_toc}

You should populate select box with song choices loaded from **URL**.

<video src="videos/hw4-song-options.mp4" controls autoplay loop></video>

- You will need to use the `fetch()` command to load the JSON file.
- Use JavaScript to populate the `<select id="song-selector">` element in `index.html`.

### Choose a theme
{:.no_toc}

You should prepopulate the text input box with a random theme, chosen from a
hardcoded list of predefined themes. ([video](videos/hw4-random-query.mp4))

- In our solution, we choose randomly from one of the following themes: `'candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'`
  - You are welcome to use our list or you can make one of your own.
- The user should still be able to delete the suggested text and write their own query.

### Submitting the form
{:.no_toc}

When the user submits the form, query the Giphy API with the theme entered.

- If the user leaves the theme input box empty ([video](videos/hw4-blank-option.mp4)):
  - Choose a random theme for the user and query the Giphy API with the randomly chosen search term
- If the query returns less than 2 gifs ([video](videos/hw4-too-few-gifs.mp4)):
  - Show the message "Not enough gifs for this theme. Please try another." This message is already in `index.html` in the `div` with `id="error"`. You can remove the `inactive` class to display it.
  - The message should go away after a user types anything into the input text area.

The form should be submitted if the user clicks the "Go" button **or** if they hit the "enter" button.

</section>

<section class="part" markdown="1">

## 5. Implementation: Querying the Giphy API

You should load gifs using the [Giphy Search API](https://github.com/Giphy/GiphyAPI#search-endpoint). Use the following parameters:
- **q**: The search term the user entered, or a randomly chosen theme if the user left the theme blank.
- **limit**: `25`
- **rating**: `g`
- **api_key**: `dc6zaTOxFJmzC`

Here is a sample query: [hot+chocolate](https://api.giphy.com/v1/gifs/search?q=hot%20chocolate&api_key=dc6zaTOxFJmzC&limit=25&rating=g)

- The Giphy API has the following format: [indented](https://gist.github.com/vrk/3dd93294a4a53970013dbc23ae7008b9)
  - The `data` field is an array of objects, where each object represents a gif.
  - Each object has an `images` property, which is another object that contains several versions of the gif such as `original`, `downsized`, etc. ([rendering options](https://github.com/giphy/Giphyapi#rendition-guide))
  - Use the `downsized` version of the image. The `url` property on the `downsized` object has the URL for the gif.
- Example: `const gifUrl = json.data[i].images.downsized.url;`

**Hints:**
- Use the `fetch()` API to load the JSON results from Giphy ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))
- Use `encodeURIComponent()` to escape the characters in the query for use in a URL. ([mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent))

</section>

<section class="part" markdown="1">

## 6. Implementation: Music visualization screen

### General layout
{:.no_toc}

Modify the HTML and CSS to create the Music Screen:

<img src="images/hw4-music-screen-layout.png" class="screenshot" />

- The control bar at the bottom of the screen is set at 70px.
- The gif display area fills up the rest of the viewport space.
- **Hints:**
  - This layout is very similar to [this example](https://codepen.io/bee-arcade/pen/2f97b2cdfc04949c2c73dda852f739d7?editors=1100), which was shown in [lecture 4](https://docs.google.com/presentation/d/1-RHZWIQ4kORqgVdXoYqbu2RseSZqznQLqHGXE7C4fk8/edit#slide=id.p) and [lecture 5](https://docs.google.com/presentation/d/1C1_y51AGjiH1k76pxpkYYwh3E9Ah7fm_8SvySpoBvhs/edit#slide=id.g1d7594117b_0_61).

### Audio playback
{:.no_toc}

After the user submits the form, the `MusicScreen` should play the song the user chose via the `AudioPlayer` object. Every time the `AudioPlayer` detects a beat, a different gif should be displayed.

When the `AudioPlayer` is paused, the gif being displayed should remain the same.

### Image preloading
{:.no_toc}

When you receive the list of gifs from Giphy, you should **preload** all of the images for smoother playback. You can do this by creating offscreen `<img>` elements for each gif that you receive from the Giphy API.  You will not actually render these `<img>` elements, since you should display the gifs using the `background-image` CSS property instead of the `<img>` tag. You are just using the `<img>` tag as vessels to download the image data.

To preload an image, do the following:
- Create a new `Image` object ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image); creating a `new Image` is the same as calling  `document.createElement('img')`);
- Set the `src` of this `Image` to the URL of the gif, e.g. `image.src = json.data[0].images.downsized.url;`
- When the image has finished loading, the `Image` element will fire the `load` event ([mdn](https://developer.mozilla.org/en-US/docs/Web/Events/load)).
- When the `load` event fires for the `Image`, you can then preload the next gif.

You should save your preloaded images in an Array field of a class so that it does not get garbage collected.

### Gif display details
{:.no_toc}

**Gif layer:**
- A gif should be displayed as a **background image** of a `div`, with the following CSS properties:
  - `background-size: cover;`
  - `background-position: center center;`
  - `background-repeat: no-repeat;``
- You should render the gif as a `background-image` of a `div` instead of an `img` element because of the handy `background-size: cover` property. (The equivalent of `background-size` for `<img>` is `object-fit`, but Edge [does not support it yet](http://caniuse.com/#search=object-fit). We are going to use `background-image` until it does.)

**Double buffering:**
To display the gifs more smoothly, you should use a double buffering technique, where you store the next image to be displayed in a "back buffer" that is rendered but not visible:
<img src="images/hw4-display-diagram.png" class="screenshot" />

- Create two gif layers:
  - The foreground `div` is a layer containing the gif currently displayed (as a `background-image`).
  - The background `div` is a layer containing the _next_ gif that will be displayed.
  - Each `div` should be absolutely positioned on top of each other so that only the gif layer on top is visible.
- When the music visualizer is first loaded, you should fill both the foreground and the background layers with two random gifs.
- When a kick in the song occurs, you should update the gif being displayed:
  - Swap the positions of the buffers: The background should be shown on top of the foreground.
  - Update the new background layer (with the previously shown gif) to contain the next gif to be displayed.

You should also make sure that you show a **different gif** on every kick, i.e. you should not show the same gif for two kicks in a row.
- This means the background layer and the foreground layer should never contain the same image.

</section>

<section class="part" markdown="1">

## 7. Implementation: Putting it all together

</section>

<section class="part" markdown="1">

## Submit

Upload your completed homework to your GitHub repository and publish them, in the same way that you did with [Homework 0]({{relative}}homework/0-welcome).

Turn in the link to your GitHub repository and the link to your completed flashcard web page via this form:
- [Submission Form]()

</section>
