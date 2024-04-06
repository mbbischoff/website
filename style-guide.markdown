---
title: Style Guide
date: 2020-03-29 17:54:00 -04:00
position: 4
layout: page
---

Inspired by: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/markup/markup-html-tags-and-formatting/)

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.

<cite>Steve Jobs</cite> — Apple Worldwide Developers’ Conference, 1997
{: .small}

“Hanging punctuation is also a thing we can and should do.”

This is an example of <small>small text</small> in a sentence.

This is an example of <mark>marked text</mark> in a sentence.

<details>
<summary>This is a summary element.</summary>
With lots and lots of details inside a disclosure triangle.
</details>

## Tables

<table>
  <caption>Human Resources</caption>
  <thead>
    <tr>
      <th>Employee</th>
      <th>Salary</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">John Doe</a></td>
      <td>$1</td>
      <td>Because that’s all Steve Jobs needed for a salary.</td>
    </tr>
    <tr>
      <td><a href="#">Jane Doe</a></td>
      <td>$100K</td>
      <td>For all the blogging she does.</td>
    </tr>
    <tr>
      <td><a href="#">Fred Bloggs</a></td>
      <td>$100M</td>
      <td>Pictures are worth a thousand words, right? So Jane × 1,000.</td>
    </tr>
    <tr>
      <td><a href="#">Jane Bloggs</a></td>
      <td>$100B</td>
      <td>With hair like that?! Enough said.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th style="text-align: left">Header1</th>
      <th style="text-align: center">Header2</th>
      <th style="text-align: right">Header3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">cell1</td>
      <td style="text-align: center">cell2</td>
      <td style="text-align: right">cell3</td>
    </tr>
    <tr>
      <td style="text-align: left">cell4</td>
      <td style="text-align: center">cell5</td>
      <td style="text-align: right">cell6</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td style="text-align: left">cell1</td>
      <td style="text-align: center">cell2</td>
      <td style="text-align: right">cell3</td>
    </tr>
    <tr>
      <td style="text-align: left">cell4</td>
      <td style="text-align: center">cell5</td>
      <td style="text-align: right">cell6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td style="text-align: left">Foot1</td>
      <td style="text-align: center">Foot2</td>
      <td style="text-align: right">Foot3</td>
    </tr>
  </tfoot>
</table>

## Definition Lists

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

## Unordered Lists

<ul>
  <li>List item one
    <ul>
      <li>List item one
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>
      </li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ul>
  </li>
  <li>List item two</li>
  <li>List item three</li>
  <li>List item four</li>
</ul>

## Ordered Lists

<ol>
  <li>List item one
    <ol>
      <li>List item one
        <ol>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ol>
      </li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ol>
  </li>
  <li>List item two</li>
  <li>List item three</li>
  <li>List item four</li>
</ol>

## HTML Tags

### Addresss Tags

<address>
  1 Infinite Loop<br> Cupertino, CA 95014<br> United States
</address>

### Anchor Tag

<p>This is an example of a <a href="http://apple.com" title="Apple">link</a>.</p>

### Abbreviation Tag

<p>The abbreviation <abbr title="Cascading Style Sheets">CSS</abbr> stands for “Cascading Style Sheets”.</p>

### Cite Tag

<p>“Code is poetry.” —<cite>Automattic</cite></p>

### Meter

<label for="fuel">Fuel level:</label><meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>


### Code

<p>You will learn later on in these tests that <code class="language-plaintext highlighter-rouge">word-wrap: break-word;</code> will be your best friend.</p>

```javascript
function sayHello(name) {
  if (!name) {
    console.log('Hello World');
  } else {
    console.log(`Hello ${name}`);
  }
}
```

### Strike

<p>This tag will let you <strike>strikeout text</strike>.</p>

### Emphasis

<p>The emphasize tag should <em>italicize</em> text.</p>

### Insert

<p>This tag should denote <ins>inserted</ins> text.</p>

### Keyboard

<p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code class="language-plaintext highlighter-rouge">&lt;code&gt;</code> tag.</p>

### Preformatted

<p>This tag styles large blocks of preformatted text.</p>

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

### Quote

<p><q>Developers, developers, developers…</q> –Steve Ballmer</p>

### Strong

<p>This tag shows <strong>bold text</strong>.</p>

### Subscript

<p>Getting our science styling on with H<sub>2</sub>O, which should push the “2” down.</p>

### Superscript

<p>Still sticking with science and Albert Einstein’s E = MC<sup>2</sup>, which should lift the 2 up.</p>

### Variable

<p>This allows you to denote <var>variables</var>.</p>

### Horizontal Rule

Above the line.

<hr>

Below the line.
