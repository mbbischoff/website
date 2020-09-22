import { initializeFilterByYear, retractYearList } from "./filterByYear";
import { initializeMobileMenu } from "./mobileMenu";

initializeFilterByYear();
initializeMobileMenu();

// Navbar scroll into view on mobile. Commented out for now.
const nav = document.querySelector("#categories>div");
// const cssTransitionTime = 800;

// if (window.innerWidth < 700) {
//   window.onload = () => {
//     nav.style.left = "-20px";
//     setTimeout(() => {
//       nav.style.left = "0px";
//       setTimeout(() => {
//         nav.style.width = "initial";
//         nav.parentElement.style.overflowX = "visible";
//       }, cssTransitionTime);
//     }, cssTransitionTime);
//   }
// } else {
  nav.style.width = "initial";
  nav.parentElement.style.overflowX = "visible";
// }

nav.addEventListener("scroll", retractYearList);