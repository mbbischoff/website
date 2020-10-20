const latestTag = document.querySelector("#latest");
const yearsList = document.querySelector("#years");

export const initializeFilterByYear = () => {
  latestTag.addEventListener("click", (event) => {
    event.preventDefault();

    if (yearsList.classList.contains("show")) {
      retractYearList();
    } else {
      extendYearList();
    }
  });

  latestTag.setAttribute("href", "#");
}

const extendYearList = () => {
  yearsList.style.height = `${yearsList.children.length * 38}px`;
  latestTag.classList.add("blue-highlight");
  yearsList.classList.add("show");
}

const retractYearList = () => {
  yearsList.style.height = "0px";
  latestTag.classList.remove("blue-highlight");
  yearsList.classList.remove("show");
}