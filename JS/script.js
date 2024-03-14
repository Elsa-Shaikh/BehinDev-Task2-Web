const menuBtn = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-lists");
const menuIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("mobile");

  const isOpen = navLinks.classList.contains("mobile");
  menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("mobile");
  menuIcon.setAttribute("class", "ri-menu-line");
});
