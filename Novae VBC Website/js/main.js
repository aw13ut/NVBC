console.log("Site loaded successfully!");
var slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: false,
  nav: true,
  autoplayButtonOutput: false,
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "Toggle Theme";
  button.classList.add("theme-toggle");

  document.querySelector("nav").appendChild(button);

  button.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
  });
});
