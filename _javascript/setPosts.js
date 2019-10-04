import { postsThatShouldBeShown, renderNewPost } from "./renderPosts"
import { getYear, getCategory } from "./index";

export const setPosts = (data, postList) => {
  const year = getYear();
  const category = getCategory();


  const posts = document.querySelector(".posts");
  if (posts === null) { return; }

  Array.from(document.querySelectorAll("article.post")).forEach(article => article.remove());
  postsThatShouldBeShown(data, category, year).slice(0, 5).forEach(post => renderNewPost(post, postList));
}
