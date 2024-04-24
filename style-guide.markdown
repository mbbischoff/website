---
title: Style Guide
date: 2020-03-29 17:54:00 -04:00
position: 4
layout: page
---

_Inspired by: [<cite>Minimal Mistakes</cite>](https://mmistakes.github.io/minimal-mistakes/markup/markup-html-tags-and-formatting/)_

  * 
  {:toc} 

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
    
Cryptids of Cornwall:
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
