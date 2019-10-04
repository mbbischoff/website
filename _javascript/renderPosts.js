export const postsThatShouldBeShown = (postsData, category, year) => {
  let posts = [];

  if (category) {
    posts = postsData.items.filter(post => post.categories.includes(category));
  } else {
    posts = postsData.items;
  }

  if (year) {
    posts = posts.filter(item => new Date(item.date_published).getFullYear() == year);
  }

  return posts;
}

export const renderNewPost = (postData, postList) => {
  postList.insertAdjacentHTML("beforeend", postHTML(postData));
  const newPostElement = postList.querySelector(".post:last-child");

  const readMoreButton = newPostElement.querySelector(".read-more > a");

  if (readMoreButton) {
    const readMoreContent = newPostElement.querySelector(".read-more-content");

    readMoreButton.addEventListener("click", (event) => {
      event.preventDefault();

      readMoreContent.style.display = "block";
      setTimeout(() => { readMoreContent.style.opacity = "1"; }, 100 );

      const url = new URL(location.href);
      url.pathname = postData.url;
      url.search = "";

      document.title = `${postData.title} · Matthew Bischoff`;
      window.history.replaceState(document.title, document.title, url.toString());

      readMoreButton.remove();
    });
  }
}

const postHTML = (postData) => {
  let html;

  if (postData.format == "tweet") {
    html = tweetPostHTML(postData);
  } else if (postData.format == "link") {
    html = linkPostHTML(postData);
  } else {
    html = longFormPostHTML(postData);
  }


  return `
    <article class="post">
      ${html}
    </article>
  `
}

const longFormPostHTML = (postData) => {
  const url = postData.url;
  const title = postData.title;
  let content;

  if (postData.content_html.includes("<!-- more -->")) {
    const splitContent = postData.content_html.split("<!-- more -->")
    content = splitContent[0];
    content += `
      <div class="read-more">
        <a href="${url}"> Read More </a>
      </div>
      <div class="read-more-content">
        ${splitContent[1]}
      <div>
    `
  } else {
    content = postData.content_html;
  }

  return `
    <div class="long-form-post">
      ${dateHTML(postData)}
      <a href="${url}">
        <h2 class="post-title">
          ${title}
        </h2>
      </a>

      ${content}
    </div>
  `
}

const linkPostHTML = (postData) => {
  const link = postData.external_url;
  const title = postData.title;

  return `
    <div class="link-post">
      ${dateHTML(postData)}
      <h2><a href="${link}" target="_blank">${title}</a></h2>
    </div>
  `
}

const tweetPostHTML = (postData) => {
  const colour = postData.colour;
  const content = postData.content_html;

  return `
    <div class="short-form-post">
      <div class="colour-${colour}"></div>
      <div class="colour-dark-${colour}">
        ${dateHTML(postData)}
        ${content}
      </div>
    </div>
  `
}

const dateHTML = (postData) => {
  const xmlSchemaData = postData.date_published;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(postData.date_published).toLocaleDateString("en-US", options);

  return(`
    <time datetime="${xmlSchemaData}" class="post-date">
      <a href="${postData.url}">${date}</a>
    </time>
  `)
}