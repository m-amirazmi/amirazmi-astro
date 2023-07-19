// When toggling dark mode
function toggleDark() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");

  // Store user preference
  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("isDarkMode", isDarkMode);
}

// On page load
window.addEventListener("DOMContentLoaded", function () {
  const isDarkMode = localStorage.getItem("isDarkMode") === "true";
  const body = document.querySelector("body");
  body.classList.toggle("dark", isDarkMode);
});
