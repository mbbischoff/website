---
title: Now
date: 2024-04-01 16:32:00 -04:00
position: 3
place: NYC
image: "/uploads/Photo%20on%203-31-24%20at%201.25%E2%80%AFPM%20%233.jpg"
description: This now page covers the things I’m thinking, feeling, and working on,
  well, right now.
icon: fa-clock
layout: page
---

  * 
{:toc} 

<img src="{{ page.image }}" width="1024" height="768" alt="Latest Selfie">

**Updated:** [{{ page.date | date: "%B %-d, %Y" }}](https://github.com/mattbischoff/website/com/commits/gh-pages/now.markdown) from {{ page.place }}

This *[now page](https://nownownow.com/about)* is [inspired by Derek Sivers](https://sivers.org/nowff). It covers the things I’m thinking, feeling, and working on, well, *right now*.

---

Right now, I’m [building a little at a time](/under-construction).


## <i class="fa-regular fa-camera-movie fa-sm"></i> Watching

<div id="letterboxd-embed-wrapper-tc">Loading...</div>
<script>
fetch('https://lb-embed-content.bokonon.dev?username=mbbischoff')
.then(response => response.text())
.then(data => {
document.getElementById('letterboxd-embed-wrapper-tc').innerHTML = data;
});
</script>