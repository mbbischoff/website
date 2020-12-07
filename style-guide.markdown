---
title: Style Guide
date: 2020-03-29 17:54:00 -04:00
position: 3
---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

Single line blockquote:

> Stay hungry. Stay foolish.

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.

<cite>Steve Jobs</cite> — Apple Worldwide Developers’ Conference, 1997

## Tables

<table>
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

## Forms

<form>
  <fieldset>
    <legend>Personalia:</legend>
    Name: <input type="text" size="30"><br>
    Email: <input type="text" size="30"><br>
    Date of birth: <input type="text" size="10">
  </fieldset>
</form>

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

### Code

<p>You will learn later on in these tests that <code class="language-plaintext highlighter-rouge">word-wrap: break-word;</code> will be your best friend.</p>

### Strike

<p>This tag will let you <strike>strikeout text</strike>.</p>

### Emphasis

<p>The emphasize tag should <em>italicize</em> text.</p>

### Insert

<p>This tag should denote <ins>inserted</ins> text.</p>

### Keyboard

<p>This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the <code class="language-plaintext highlighter-rouge">&lt;code&gt;</code> tag.</p>

### Preformatted

<p>This tag styles large blocks of code.</p>

<pre>.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Qiote

<p><q>Developers, developers, developers…</q> –Steve Ballmer</p>

### Strong

<p>This tag shows <strong>bold text</strong>.</p>

### Subscript

<p>Getting our science styling on with H<sub>2</sub>O, which should push the “2” down.</p>

### Superscript

<p>Still sticking with science and Albert Einstein’s E = MC<sup>2</sup>, which should lift the 2 up.</p>

### Variable

<p>This allows you to denote <var>variables</var>.</p>