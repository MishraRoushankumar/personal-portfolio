// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const backToTop = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  /* -------------------------------
   * Navbar Scroll Effect
   * ------------------------------- */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Show/Hide Back To Top Button
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

    // Highlight Active Nav Link
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  /* -------------------------------
   * Smooth Scroll for Nav Links
   * ------------------------------- */
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  /* -------------------------------
   * Back to Top Button
   * ------------------------------- */
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* -------------------------------
   * Contact Form Handling
   * ------------------------------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Simple validation (extra safety)
      if (name && email && subject && message) {
        alert(`✅ Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      } else {
        alert("⚠️ Please fill in all fields before submitting.");
      }
    });
  }

  /* -------------------------------
   * Image Loading Animation
   * (for images with .loading class)
   * ------------------------------- */
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.classList.add("loading");
    img.addEventListener("load", () => {
      img.classList.remove("loading");
    });
  });
});
