---
title: Under Construction
date: 2024-04-01 15:40:00 -04:00
position: 0
image: "/uploads/IMG_0337.gif"
layout: page
---

## The process of progress

![underconstruction2.gif](/uploads/underconstruction2.gif){:.vr-height-2}

*What if something was designed one day, one change at a time? What if every day, it got just a tiny bit better? With time, revealed more of itself?*

---

This project explores the ideas of [continuous improvement](https://en.wikipedia.org/wiki/Kaizen), [impermanance](https://en.wikipedia.org/wiki/Wabi-sabi), and [gradual transitions](https://en.wikipedia.org/wiki/Gender_transition).

It’s inspired by Web 1.0 [Under Construction GIFs](http://textfiles.com/underconstruction/), [Wikipedia](http://wikipedia.org), [Thing a Week](https://en.wikipedia.org/wiki/Thing_a_Week), [Song a Day](https://songaday.world), [Atomic Habits](https://jamesclear.com/atomic-habits), [HRT](https://en.wikipedia.org/wiki/Hormone_replacement_therapy), the [IndieWeb movement](https://indieweb.org), and [CSS Zen Garden](https://csszengarden.com).

## Process

1. Start with the minimal markup and styles needed.
2. Make *one* small change to the styles every day.
3. Change markup, structure, and rules whenever.

## Progress

Each change will be documented here with a dated commit and screenshot.

<section class="changelog">
{% for entry in site.data.changelog %}

{% assign description_html = entry.description | markdownify | remove: '<p>' | remove: '</p>' %}

<details>
  <summary>
    <div class="summary-content">

    <div class="summary-text">
	   <time datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date }}</time>{{ description_html  }}
    </div>
    
  <div class="github">
    <a href="{{ entry.url }}" target="_blank"><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg></a>
  </div>
    </div>
</summary>
{% if entry.image %}
  <img src="{{ entry.image }}" alt="Change image for {{ entry.date }}">
{% endif %}
{% if entry.video %}
  <video autoplay loop>
	<source src="{{ entry.video }}" type="{{ entry.video_type }}">
  </video>
{% endif %}
</details>
{% endfor %}
</section>