---
title: Style Guide
date: 2020-03-29 17:54:00 -04:00
position: 4
layout: page
---
  * 
{:toc} 

_Inspired by: [<cite>Minimal Mistakes</cite>](https://mmistakes.github.io/minimal-mistakes/markup/markup-html-tags-and-formatting/)_

# Headings

Header 1 is used for the site, page, and post titles. It’s styled smaller when used on link posts. Headers 2–6 are used within pages and posts.

# Header 1
{:.no_toc}
## Header 2
{:.no_toc}
### Header 3
{:.no_toc}
#### Header 4
{:.no_toc}
##### Header 5
{:.no_toc}
###### Header 6
{:.no_toc}

## Typography

### Paragraph

This is a simple paragraph that is designed to demonstrate the usage of the <code>&lt;p&gt;</code> HTML tag. It contains text that will be displayed as a paragraph on a webpage. This tag is one of the most frequently used tags in HTML, and it's crucial for structuring text content on the web.

### Anchor

This is a [link](/) to the homepage.

### Strong

If everything is **bold**, nothing is **bold**.

### Emphasis

Important text can be _emphasized_.

### Small

Text that’s <small>(less)</small> important can be small.

### Strikethrough

Text ~~that’s no longer relevant~~ can struck.

### Cite

Referenced works can be cited: <cite>[Wikipedia](https://wikipedia.org)</cite>.

### Quote

<q>Be yourself; everyone else is already taken.</q> — <cite>Oscar Wilde</cite>

### Definition

A <dfn>validator</dfn> is a program that checks for syntax errors in code or documents

### Abbreviations

The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

### Time

I have a date on <time datetime="2024-02-14 20:00">Valentine's Day</time>.

### Code

Inline code for `HelloWorld.swift`.

Syntax-highlighted code using the Dracula theme: 

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```

### Variables

The area of a triangle is: ½ ✕ <var>b</var> ✕ <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.

### Sample Output

Message from my computer:

<samp>
File not found.<br>
Press F1 to continue
</samp>

### Keyboard

To save a document, press <kbd>⌘ S</kbd>.  
The hyperkey <small>(<kbd>caps lock</kbd>)</small> acts as <kbd>^⌥⌘⇧</kbd>.

### Subscript

Getting our science styling on with H<sub>2</sub>O, which should push the “2” down.

### Superscript

Still sticking with science and Albert Einstein’s E = MC<sup>2</sup>, which should lift the 2 up.

## Lists

### Unordered Lists

- Feather Ruffling
    - Who could rustle the most 
        - Larry the Lion
        - Benny the Bear
- Pin the tail on the Donkey
    - Winners:
        - Gertrude the Giraffe
        - Benny the Bear
- Dance off 
    - Hip pop and Lock 
        - Larry the Lion
    - Waltz
        - Gertrude the Giraffe
    - Breakdance
        - Benny the Bear

### Ordered Lists

1. Invitations
    1. Mailed to:
        1. Larry the Lion
        2. Gertrude the Giraffe
        3. Benny the Bear
2. Menu
    1. Starters
        1. Beetle Bruschetta
        2. Caterpillar Canapes
    2. Main Course
        1. Gazelle Goulash 
    3. Dessert
        1. Honeycomb Heartache 
3. Music
    1. Live Performance
        1. The Cooing Crows


### Definition Lists
    
<dl>
  <dt>Definition List Title</dt>
  <dd>Definition list division.</dd>
  <dt>Startup</dt>
  <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>
  <dt>#dowork</dt>
  <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>
  <dt>Do It Live</dt>
  <dd>I’ll let Bill O’Reilly <a href="https://www.youtube.com/watch?v=O_HyZ5aW76c" title="We'll Do It Live">explain</a> this one.</dd>
</dl>

## Media

### Image

![mb](/assets/images/avatar.jpeg)

// TODO: Inline Image

// TODO: Centered image

 <!-- ﻿<picture>, ﻿<audio>, ﻿<video>, ﻿<source>, ﻿<track>, ﻿<canvas>, ﻿<svg>, ﻿<iframe> -->


### Figure

<figure>
  <img class="center" src="/uploads/Books.jpg">
  <figcaption>A photo of books.</figcaption>
</figure>

### Picture

<picture>
  <img
    alt="MSCH Image"
    width="460"
    height="360"
    loading="lazy"
    src="/uploads/mschf-app.png"
  />
</picture>


### Audio

<figure>
  <figcaption>Everyday Robots #63: Build and Watch</figcaption>
  <audio controls preload="none" src="https://traffic.libsyn.com/secure/everydayrobots/EverydayRobots63finalVersion.mp3?dest-id=1530128"></audio>
</figure>

### Video

<video autoplay loop>
  <source src="/uploads/2024-04-14.mp4" type="video/mp4">
</video>

### Canvas

<canvas id="myCanvas" width="200" height="100">
</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>

### SVG

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

### Iframe

<div class='video-wrapper'><iframe loading="lazy" title="Barely Managing" src='https://player.vimeo.com/video/153709318?title=0&byline=0&portrait=0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

## Tables

### Table

<table>
  <caption>Table Caption</caption>

  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>