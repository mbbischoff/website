import { postsThatShouldBeShown, renderNewPost } from "./renderPosts";
import { getYear, getCategory } from "./index";

export const initializeInfiniteScroll = (data, postListElement) => {
  const posts = document.querySelector(".posts");
  if (posts === null) { return; }

  window.addEventListener("scroll", () => {
    const year = getYear();
    const category = getCategory();

    const pixelsToBottomOfPage = document.body.clientHeight - window.scrollY - window.innerHeight;

    if (pixelsToBottomOfPage < 1500) {
      const postIndex = document.querySelectorAll("article.post").length;
      const postData = postsThatShouldBeShown(data, category, year)[postIndex];

      if (postData !== undefined) {
        renderNewPost(postData, postListElement);
      }
    }
  });
}