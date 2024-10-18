function initMenuButton() {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });
}

document.addEventListener('astro:page-load', () => {
  initMenuButton();
});
