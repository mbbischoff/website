import { setAndRenderPosts } from "./setPosts";
import capitalize from "capitalize";
import { setCategory, removeYear } from ".";
import { retractYearList, yearDropdownSetYear } from "./filterByYear";

const categoryButtons = document.querySelectorAll(".category");
const postList = document.querySelector(".posts");

export const initializeFilterByCategory = (data) => {
  if (!postList) { return; }

  categoryButtons.forEach((categoryButton) => {
    categoryButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearSelectedCategoryButtons();

      categoryButton.classList.add("blue-highlight");

      const categoryName = categoryButton.dataset.categoryName;
      setCategory(categoryName);
      removeYear();

      setAndRenderPosts(data, postList);

      const url = new URL(location.href);
      url.pathname = `category/${categoryName}`;
      url.search = "";

      document.title = `${capitalize(categoryName)} · Matthew Bischoff`;
      window.history.replaceState(document.title, document.title, url.toString());

      yearDropdownSetYear("latest");
      retractYearList();
    });
  });
}

export const clearSelectedCategoryButtons = () => {
  categoryButtons.forEach(btn => btn.classList.remove("blue-highlight"));
}