const toggleNav = () => {
  const navIcon = document.querySelector(".nav-icon");
  const closeIcon = document.querySelector(".close-nav");
  const nav = document.querySelector(".navigation");

  const navItems = document.querySelectorAll(".nav-item");

  navIcon.addEventListener("click", () => {
    nav.classList.add("active");
  });
  closeIcon.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  for (let index = 0; index < navItems.length; index++) {
    navItems.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
};
