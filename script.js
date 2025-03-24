let index = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide() {
    if (index >= slides.length) {
        // Apply transition for the last normal slide
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-index * 100}%)`;

        // After the transition, reset to the first slide instantly
        setTimeout(() => {
            slider.style.transition = "none";
            index = 0;
            slider.style.transform = `translateX(${-index * 100}%)`;
        }, 500); // Time should match CSS transition duration
    } else if (index < 0) {
        index = slides.length - 1; // Move to last slide instantly
        slider.style.transition = "none";
        slider.style.transform = `translateX(${-index * 100}%)`;
    } else {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-index * 100}%)`;
    }
}

function nextSlide() {
    index++;
    showSlide();
}

function prevSlide() {
    index--;
    showSlide();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);