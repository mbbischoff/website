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
}

export const extendYearList = () => {
  yearsList.style.height = `${7 * 38}px`;
  latestTag.classList.add("blue-highlight");
  yearsList.classList.add("show");
}

export const retractYearList = () => {
  yearsList.style.height = "0px";
  latestTag.classList.remove("blue-highlight");
  yearsList.classList.remove("show");
}