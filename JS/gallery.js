window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.slider-track').forEach(track => {
    const slides = [...track.children];
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });
  });
});
