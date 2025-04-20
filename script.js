//untuk komponen button
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const link = button.getAttribute("data-link");
    const scrollTarget = button.getAttribute("data-scroll");
    if (link) {
      window.open(link, "_blank"); // Buka di tab baru
    } else {
      e.preventDefault();

      const targetElement = document.querySelector(scrollTarget);

      if (targetElement) {
        // Scroll ke target dengan smooth scroll
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      } else {
        alert("Section tidak ditemukan!");
      }
    }
  });
});

// untuk komponen a
const a = document.querySelectorAll("a");

a.forEach((a) => {
  a.addEventListener("click", (e) => {
    const link = a.getAttribute("data-sosmed");
    if (link) {
      window.open(link, "_blank"); // Buka di tab baru
    } else {
      e.preventDefault();

      const targetId = a.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll ke target dengan smooth scroll
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      } else {
        alert("Section tidak ditemukan!");
      }
    }
  });
});

// sidebar elements
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");

menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});
