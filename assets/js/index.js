export function mainJs() {
  const burger = document.getElementById("burger-menu");
  const nav = document.getElementById("nav-menu");

  function openMenu() {
    nav.classList.add("open");
    burger.classList.add("active");
  }
  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("active");
  }

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    if (nav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  const categoryButtons = document.querySelectorAll(".services-category-btn");

  function toggleAccordion(button) {
    const itemsList = button.nextElementSibling;

    itemsList.classList.toggle("active");
    button.classList.toggle("active");
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        toggleAccordion(this);
      }
    });
  });

  const title = document.querySelector(".hero__title");

  const mobTitle = title.textContent.split("—")[0];
  if (window.innerWidth <= 767) title.textContent = mobTitle;
}
