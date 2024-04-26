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

### Blockquote

<blockquote>All of a sudden – wham! – I got an image of myself sitting at a big CRT (cathode ray tube) screen with all kinds of symbols on it, new and different ones, manipulated by a computer that could be operated through various input devices. All the material on the screen could be controlled with great flexibility. Other people had their display units tied to the same computer complex, and you could connect them. Everybody could share knowledge. The vision unfolded rapidly, in about a half hour, and suddenly the potential of interactive, collaborative computing became totally clear.
<footer><cite>Douglas Englebart</cite></footer>
</blockquote>

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

### Preformatted

<pre>
i carry your heart with me(i carry it in
my heart)i am never without it(anywhere
i go you go,my dear;and whatever is done
by only me is your doing,my darling)
                                                      i fear
no fate(for you are my fate,my sweet)i want
no world(for beautiful you are my world,my true)
and it’s you are whatever a moon has always meant
and whatever a sun will always sing is you
</pre>

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

### Line Break

This is a sentence.<br>After a break, another one.

### Word Break

Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz

### Bidirectional Text Override

<bdo dir="rtl">
This text will go right-to-left.
</bdo>

### Bidirectional Isolate

<ul>
  <li>User <bdi>hrefs</bdi>: 60 points</li>
  <li>User <bdi>jdoe</bdi>: 80 points</li>
  <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>

### Data

<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>

### Ruby

<ruby>
漢 <rp>(</rp><rt>ㄏㄢˋ</rt><rp>)</rp>
</ruby>

## Links and Areas

### Anchor

This is a [link](/) to the homepage.

### Nav

<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>

### Map & Area

<img src="/uploads/workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="/computer">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="/phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="/coffee.htm">
</map>

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
  <figcaption>A photo of books</figcaption>
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

<svg height="3rlh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

### Iframe

<div class='video-wrapper'><iframe loading="lazy" title="Barely Managing" src='https://player.vimeo.com/video/153709318?title=0&byline=0&portrait=0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

## Tables

### Table

<table>
  <caption>
    Council budget (in £) 2018
  </caption>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>21,000</td>
    </tr>
  </tfoot>
</table>


## Forms

<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname">

  <textarea name="message" rows="5" cols="30">
    Enter your message here
    </textarea>

  <select name="colors">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    </select>
    
<select name="cars">
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
      <option value="bmw">BMW</option>
  </optgroup>
  <optgroup label="American Cars">
    <option value="ford">Ford</option>
      <option value="tesla">Tesla</option>
      </optgroup>
</select>

<fieldset>
  <legend>Personal information:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
    
<progress value="70" max="100">70 %</progress>
    
<meter value="2" min="0" max="10">2 out of 10</meter> 

<button type="submit">Submit</button>

</form>


### Buttons

A true `button`:  
<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"/></svg>
You Look Nice Today!</button>

A link button:  
<a class="button">Go somewhere nice…</a>

### Dialog

<dialog aria-labelledby="dialog_title" aria-describedby="dialog_description">
  <h2 id="dialog_title" class="h2">Use location services?</h2>
  <p id="dialog_description">
    In order to give directional instructions, we kindly ask you to turn
    on the location services.
  </p>
  <div class="flex flex-space-between">
    <button id="close_dialog">Close</button>
    <button id="confirm_dialog" class="cta">Confirm</button>
  </div>
</dialog>

## Special

### Div

<div>This is a `div`</div>

### Spans

#### Name

My `full-name` is <span class="full-name">mb bischoff</span>.

My initials (`mb`) are <span class="initials">mb</span>.

### Header

<header>This is a <code>header</code>.</header>

### Footer

<footer>This is a <code>footer</code>.</footer>

### Article 

<article>
  <p>This is an <code>article</code>.</p>
</article>

### Section

<section>This is a <code>section</code>.</section>

### Details

<details>
<summary>This is a <code>summary</code> element.</summary>
With lots and lots of details inside a disclosure triangle.
</details>

### Unstyled

* `dialog`