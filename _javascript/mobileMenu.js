export const initializeMobileMenu = () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const hamburgerButton = document.querySelector("#hamburger-button");
  const mobileMenuButton = document.querySelector("#close-mobile-menu");

  if ([mobileMenu, hamburgerButton, mobileMenuButton].some(element => element === null)) {
    return false;
  }

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    setTimeout(() => mobileMenu.style.opacity = "1", 0);

    document.body.classList.add("fix");
  });

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.style.opacity = "0"
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 250);

    document.body.classList.remove("fix");
  });
}