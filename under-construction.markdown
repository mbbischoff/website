---
title: Under Construction
date: 2024-04-01 15:40:00 -04:00
position: 0
image: "/uploads/IMG_0337.gif"
layout: page
---

## The process of progress



*What if something was designed one day, one change at a time? What if every day, it got just a tiny bit better? With time, revealed more of itself? ![underconstruction2.gif](/uploads/underconstruction2.gif){:.vr-height-1}*

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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
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