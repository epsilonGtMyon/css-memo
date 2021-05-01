document.getElementById("showNav").addEventListener("click", () => {
  const navElement = document.querySelector(".nav");
  const headerElement = document.querySelector(".header");
  const mainElement = document.querySelector(".main");

  const navClass = "is-show-nav";
  if (navElement.classList.contains(navClass)) {
    navElement.classList.remove(navClass);
    headerElement.classList.remove(navClass);
    mainElement.classList.remove(navClass);
  } else {
    navElement.classList.add(navClass);
    headerElement.classList.add(navClass);
    mainElement.classList.add(navClass);
  }
});
