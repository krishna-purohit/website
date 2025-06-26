// script.js
console.log("Apex Visuals site loaded!");
// script.js
window.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".fade-in");
  animated.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });
});
