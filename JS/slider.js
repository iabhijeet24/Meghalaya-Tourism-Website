document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    current = index;
  }

  window.currentSlide = function(index) {
    showSlide(index);
  };

  function autoSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  setInterval(autoSlide, 3000);
});
