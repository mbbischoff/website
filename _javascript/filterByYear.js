import { setPosts } from "./setPosts";
import { getYear, setYear, removeCategory, removeYear } from "./index";

const latestTag = document.querySelector("#latest");
const latestTagCarrot = latestTag.querySelector("img");
const latestTagSpan = latestTag.querySelector("span");
const yearsList = document.querySelector("#years");
let uniqueYears;

export const initializeFilterByYear = (data, postList) => {
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");
  const categoryButtons = document.querySelectorAll(".category");

  if ([latestTag, yearsList].some(element => element === null)) { return; }

  const currentYear = getYear();

  if (currentYear) {
    latestTag.innerText = currentYear;
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

  const latestDropdownOption = document.querySelector(".latest-dropdown-option");

  document.querySelectorAll(".year").forEach((yearButton) => {
    yearButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (yearButton.dataset.year === "latest") {
        removeYear();
        removeCategory();

        latestTagSpan.innerText = "Latest";

        document.title = "Matthew Bischoff";
        window.history.replaceState(document.title, document.title, "/");
        latestDropdownOption.style.display = "none";
      } else {
        const year = parseInt(yearButton.dataset.year);

        setYear(year);
        removeCategory();

        const url = new URL(location.href);
        url.pathname = "";
        url.search = `year=${year}`;

        latestTagSpan.innerText = year;

        document.title = `${year} · Matthew Bischoff`;
        window.history.replaceState(document.title, document.title, url.toString());
        setTimeout(() => latestDropdownOption.style.display = "list-item", 200); 
      }

      footer.style.opacity = "0";
      main.style.opacity = "0";

      setTimeout(() => {
        setPosts(data, postList);
        setTimeout(() => {
          main.style.opacity = "1";
          footer.style.opacity = "1";
        }, 300);
      }, 300);

      yearsList.style.height = "0px";
      yearsList.classList.toggle("show");
      categoryButtons.forEach(btn => btn.classList.remove("blue-highlight"));
    });
  });

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