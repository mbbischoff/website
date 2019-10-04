import { setPosts } from "./setPosts";
import { getYear, setYear, removeCategory } from "./index";

const latestTag = document.querySelector("#latest");
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

  document.querySelectorAll(".year").forEach((yearButton) => {
    yearButton.addEventListener("click", (event) => {
      const year = parseInt(yearButton.dataset.year);
      setYear(year);
      removeCategory();

      if (!postList) { return; }
      event.preventDefault();

      footer.style.opacity = "0";
      main.style.opacity = "0";

      setTimeout(() => {
        setPosts(data, postList);
        setTimeout(() => {
          main.style.opacity = "1";
          footer.style.opacity = "1";
        }, 300);
      }, 300);

      const url = new URL(location.href);
      url.pathname = "";
      url.search = `year=${year}`;

      latestTag.innerText = year;

      document.title = `${year} · Matthew Bischoff`;
      window.history.replaceState(document.title, document.title, url.toString());

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
  yearsList.style.height = `${uniqueYears.length * 38}px`;
  latestTag.classList.add("blue-highlight");
  yearsList.classList.add("show");
}

export const retractYearList = () => {
  yearsList.style.height = "0px";
  latestTag.classList.remove("blue-highlight");
  yearsList.classList.remove("show");
}