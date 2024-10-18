function getTheme() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    window.localStorage.setItem("theme", "dark");
    return "dark";
  }
  window.localStorage.setItem("theme", "light");
  return "light";
}

function applyTheme() {
  const theme = getTheme();
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}

function initThemeToggle() {
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
}

/**
 * Apply theme and set events on page load
 */
document.addEventListener("astro:page-load", () => {
  applyTheme();
  initThemeToggle();
});

/**
 * Re-apply theme on page-transition
 */
document.addEventListener("astro:after-swap", () => {
  applyTheme();
});
