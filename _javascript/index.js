import { setPosts } from "./setPosts";
import { initializeMobileMenu } from "./mobileMenu";
import { initializeInfiniteScroll } from "./infiniteScroll";
import { initializeFilterByYear, retractYearList } from "./filterByYear";
import { initializeFilterByCategory } from "./filterByCategory";

export const getCategory = () => {
  const category = document.querySelector("meta[name='category']").content;
  return category !== "" ? category : null;
}

export const setCategory = (category) => {
  const metaTag = document.querySelector("meta[name='category']");
  metaTag.setAttribute("content", category);
}

export const removeCategory = () => {
  const metaTag = document.querySelector("meta[name='category']");
  metaTag.removeAttribute("content");
}

export const getYear = () => {
  const year = document.querySelector("meta[name='year']").content;
  return year !== "" ? parseInt(year) : null;
}

export const setYear = (year) => {
  const metaTag = document.querySelector("meta[name='year']");
  metaTag.setAttribute("content", year);
}

export const removeYear = () => {
  const metaTag = document.querySelector("meta[name='year']");
  metaTag.removeAttribute("content");
}

// Set initial year
const year = new URL(location.href).searchParams.get("year");
if (year) {
  document.head.insertAdjacentHTML("beforeend", `<meta name="year" content="${year}">`);
} else {
  document.head.insertAdjacentHTML("beforeend", `<meta name="year">`);
}

// Set initial category
const match = location.href.match(/\/category\/(\w+)/);
if (match) {
  document.head.insertAdjacentHTML("beforeend", `<meta name="category" content="${match[1]}">`);
} else {
  document.head.insertAdjacentHTML("beforeend", `<meta name="category">`);
}

const postListElement = document.querySelector(".posts");

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const posts = document.querySelector(".posts");

if (posts) {
  footer.style.opacity = "0";
  footer.style.transition = "opacity 0.4s ease";

  main.style.opacity = "0";
  main.style.transition = "opacity 0.4s ease";
}

fetch("/feed.json").then(response => response.json()).then((data) => {
  setPosts(data, postListElement);
  initializeInfiniteScroll(data, postListElement)
  initializeFilterByYear(data, postListElement);

  initializeFilterByCategory(data, postListElement)

  setTimeout(() => {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
}).catch(() => {
  setTimeout(() => {
    main.style.opacity = "1";
    footer.style.opacity = "1";
  }, 100);
})

initializeMobileMenu();

// Navbar scroll into view on mobile
const nav = document.querySelector("#categories>div");

if (window.innerWidth < 700) {
  const img = new Image();
  img.src = "/uploads/hero-image.jpg";
  img.onload = () => {
    nav.style.left = "0px";
    setTimeout(() => {
      nav.style.width = "initial";
      nav.parentElement.style.overflowX = "visible";
    }, 800); // wait for css animation to finish
  }
} else {
  nav.style.width = "initial";
  nav.parentElement.style.overflowX = "visible";
}

nav.addEventListener("scroll", retractYearList);