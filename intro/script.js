document.addEventListener("DOMContentLoaded", function () {
  // Typed.js for Home Section
  var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Frontend Developer", "Content Creator", "Prompt Engineer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });

  // Particles.js Configuration
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

  // Navbar Sticky and Scroll Button
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  };

  // Mobile Menu Toggle
  let body = document.querySelector("body");
  let navBar = document.querySelector(".mobile-menu");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");

  menuBtn.onclick = function () {
    navBar.classList.remove("hidden");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
  };

  cancelBtn.onclick = function () {
    navBar.classList.add("hidden");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  };

  // Close Mobile Menu on Link Click
  let navLinks = document.querySelectorAll(".menu a, .mobile-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navBar.classList.add("hidden");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      body.style.overflow = "auto";
      scrollBtn.style.pointerEvents = "auto";
    });
  });
});