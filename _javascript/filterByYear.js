import { setAndRenderPosts } from "./setPosts";
import { getYear, setYear, removeCategory, removeYear } from "./index";
import { clearSelectedCategoryButtons } from "./filterByCategory";

const latestTag = document.querySelector("#latest");
const latestTagSpan = latestTag.querySelector("span");
const yearsList = document.querySelector("#years");
const postList = document.querySelector(".posts");
let uniqueYears;
let latestDropdownOption;

export const initializeFilterByYear = (data) => {
  if ([latestTag, yearsList].some(element => element === null)) { return; }

  const currentYear = getYear();

  if (currentYear) {
    latestTagSpan.innerText = currentYear;
    latestTag.classList.add("blue-highlight")
  }

  yearsList.insertAdjacentHTML("beforeend", `
    <li class="button-round latest-dropdown-option" ${currentYear ? '' : 'style="display: none;"'}>
      <a class="year" data-year="latest" href="/">
        Latest
      </a>
    </li>
  `);

  uniqueYears = Array.from(new Set(data.items.map(item => new Date(item.date_published).getFullYear())));

  uniqueYears.forEach((year) =>  {
    yearsList.insertAdjacentHTML("beforeend", `
      <li class="button-round">
        <a class="year" data-year="${year}" href="/?year=${year}">
          ${year}
        </a>
      </li>
    `);
  });

  latestDropdownOption = document.querySelector(".latest-dropdown-option");

  if (postList) {
    initializeYearButtonEventListeners(data);
  }

  latestTag.addEventListener("click", (event) => {
    event.preventDefault();

    if (yearsList.classList.contains("show")) {
      retractYearList();
    } else {
      extendYearList();
    }
  });
}

export const extendYearList = () => {
  yearsList.style.height = `${(uniqueYears.length + 1) * 38}px`;
  latestTag.classList.add("blue-highlight");
  yearsList.classList.add("show");
}

export const retractYearList = () => {
  yearsList.style.height = "0px";
  latestTag.classList.remove("blue-highlight");
  yearsList.classList.remove("show");
}

export const yearDropdownSetYear = (year) => {
  if (year === "latest") {
    latestTagSpan.innerText = "Latest";
    latestDropdownOption.style.display = "none";
  } else {
    latestTagSpan.innerText = year;
    setTimeout(() => latestDropdownOption.style.display = "list-item", 200);
  }

  yearsList.style.height = "0px";
  yearsList.classList.toggle("show");
}

export const initializeYearButtonEventListeners = (data) => {
  document.querySelectorAll(".year").forEach((yearButton) => {
    yearButton.addEventListener("click", (event) => {
      event.preventDefault();

      const year = yearButton.dataset.year;

      if (year === "latest") {
        document.title = "Matthew Bischoff";
        window.history.replaceState(document.title, document.title, "/");

        removeYear();
        removeCategory();
        yearDropdownSetYear("latest");
      } else {
        const url = new URL(location.href);
        url.pathname = "";
        url.search = `year=${year}`;

        document.title = `${year} · Matthew Bischoff`;
        window.history.replaceState(document.title, document.title, url.toString());

        setYear(year);
        removeCategory();
        yearDropdownSetYear(year);
      }

      clearSelectedCategoryButtons();
      setAndRenderPosts(data);
    });
  });
}