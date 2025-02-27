document.addEventListener("DOMContentLoaded", function () {
  // Add any JavaScript functionality here, such as animations or interactive elements
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseout", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

let currentSlide = 0;
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");

function updateCarousel() {
  // Use percentage-based translation
  carousel.style.transform = `translateX(-${currentSlide * 102}%)`;

  // Update active states with transition
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Initialize with first slide active
slides[0].classList.add("active");

// Safe interval with cleanup
let autoSlide = setInterval(nextSlide, 5000);

function toggleMenu() {
  const nav = document.querySelector("nav ul");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}
