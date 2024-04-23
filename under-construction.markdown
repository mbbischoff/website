---
title: Under Construction
date: 2024-04-01 15:40:00 -04:00
position: 0
image: "/uploads/IMG_0337.gif"
layout: page
---

## The process of progress



*What if something was designed one day, one change at a time?  
What if every day, it got just a tiny bit better?  
With time, revealed more of itself? ![underconstruction2.gif](/uploads/underconstruction2.gif){:.inline}*

---

This project explores the ideas of [continuous improvement](https://en.wikipedia.org/wiki/Kaizen), [impermanence](https://en.wikipedia.org/wiki/Wabi-sabi), and [gradual transitions](https://en.wikipedia.org/wiki/Gender_transition).

It’s inspired by [Under Construction GIFs](http://textfiles.com/underconstruction/), [Wikipedia](http://wikipedia.org), [Thing a Week](https://en.wikipedia.org/wiki/Thing_a_Week), [Song a Day](https://songaday.world), [Atomic Habits](https://jamesclear.com/atomic-habits), [HRT](https://en.wikipedia.org/wiki/Hormone_replacement_therapy), the [IndieWeb](https://indieweb.org), & [CSS Zen Garden](https://csszengarden.com).

## Process

1. Start with the minimal markup and styles needed.
2. Make *one* small change to the styles every day.
3. Change markup, structure, and rules whenever.

## Progress

Each change will be documented here with a dated commit & screenshot.

<section class="changelog">
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
      <!-- GitHub Logo Link -->
      <a href="{{ entry.url }}" target="_blank" class="commit">
        <!-- Heroicons: code-bracket -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clip-rule="evenodd"/>
        </svg>
      </a>
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