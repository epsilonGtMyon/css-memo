(function () {
  const allTheme = ["ep-theme-blue"];

  const root = document.querySelector("html");
  const themeDefault = document.getElementById("themeDefault");
  const themeBlue = document.getElementById("themeBlue");
  console.log(root);

  themeDefault.addEventListener("click", () => {
    for (let t of allTheme) {
      root.classList.remove(t);
    }
  });

  themeBlue.addEventListener("click", () => {
    for (let t of allTheme) {
      root.classList.remove(t);
    }
    root.classList.add("ep-theme-blue");
  });
})();
