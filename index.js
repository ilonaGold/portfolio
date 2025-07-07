// Toggle between the light and the dark mode

const toggleBtn = document.querySelector("#darkmode-toggle");
document.addEventListener("click", toggleModes);

function toggleModes() {
  toggleBtn.classList.toggle("dark-mode");
}

// Flip a project card to display the description of a project

document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    const readMoreBtn = card.querySelector(".project-info-btn");
    const flipCardInner = card.querySelector(".flip-card_inner");
    const backBtn = card.querySelector(".back-btn");

    // Flip to back on "Read more" click
    readMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      flipCardInner.classList.toggle("flipped");
    });

    // Flip back to the front side of a card on "Back" button click
    backBtn.addEventListener("click", function () {
      flipCardInner.classList.remove("flipped");
    });
  });
});

// Dropdown menu for smaller screens

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".fa-bars");
  const closeIcon = document.querySelector(".fa-times");
  const navList = document.querySelector(".nav-list");

  menuIcon.addEventListener("click", function () {
    navList.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    navList.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });

  // Dark mode toggle
  document
    .getElementById("darkmode-toggle")
    .addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
});

// Modal for featured project images
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalImg = document.getElementById("project-modal-img");
  const closeModal = document.getElementById("project-modal-close");
  const projectImgs = document.querySelectorAll(".project-img");

  projectImgs.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      modal.classList.add("active");
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
    modalImg.src = "";
    document.body.style.overflow = "";
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalImg.src = "";
      document.body.style.overflow = "";
    }
  });
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      modalImg.src = "";
      document.body.style.overflow = "";
    }
  });
});

// Dynamically update the footer year
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("footer-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Back to Top button functionality with scroll and nav-link click
function handleBackToTopBtn() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  // Show/hide on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * 0.5) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  // Show on nav-link click (dropdown menu)
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(() => {
        if (window.scrollY > window.innerHeight * 0.5) {
          btn.style.display = "flex";
        } else {
          btn.style.display = "none";
        }
      }, 400); // Wait for scroll
    });
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  handleBackToTopBtn();
});
