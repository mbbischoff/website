---
title: Under Construction
date: 2024-04-01 15:40:00 -04:00
position: 6
subtitle: a process for progress
image: "/uploads/IMG_0337.gif"
icon: fa-triangle-person-digging
short_title: Changes
layout: page
---

*What if something was designed one day, one change at a time?  
What if every day, it got just a tiny bit better?  
With time, revealed more of itself?*

---

This project explores the ideas of [continuous improvement](https://en.wikipedia.org/wiki/Kaizen), [impermanence](https://en.wikipedia.org/wiki/Wabi-sabi), and [gradual transitions](https://en.wikipedia.org/wiki/Gender_transition).

It’s inspired by [Under Construction GIFs](http://textfiles.com/underconstruction/), [Wikipedia](http://wikipedia.org), [Thing a Week](https://en.wikipedia.org/wiki/Thing_a_Week), [Song a Day](https://songaday.world), [Atomic Habits](https://jamesclear.com/atomic-habits), [HRT](https://en.wikipedia.org/wiki/Hormone_replacement_therapy), the [IndieWeb](https://indieweb.org), & [CSS Zen Garden](https://csszengarden.com).

## Process

1. Start with the minimal markup and styles needed.
2. Make _at least_ one small change every day.
3. Change the rules whenever.

## Progress

Each change will be documented here with a dated commit & screenshot.

<div class="changelog">
  {% for entry in site.data.changelog %}

  {% assign description_html = entry.description | markdownify | remove: '<p>' | remove: '</p>' %}

  <details>
    <summary class="summary">
      <div class="time-description">
        <!-- Time and Description -->
        <time datetime="{{ entry.date | date_to_xmlschema }}">
          {{ entry.date }}
        </time>
        <span>{{ description_html }}</span>
      </div>
      <a href="{{ entry.url }}" target="_blank" class="commit">
      <i class="fa-regular fa-code-commit"></i>
      </a>
    </summary>
    {% if entry.image %}
    <img src="{{ entry.image }}" alt="Change image for {{ entry.date }}">
    {% endif %}
    {% if entry.video %}
    <video>
      <source src="{{ entry.video }}" type="{{ entry.video_type }}">
    </video>
    {% endif %}
  </details>
  {% endfor %}
</div>
