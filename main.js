
const slider = document.querySelector('.imageslider');
let count = 0;
let intervalId = null;
const totalImages = 7 // this varies depending how many images i have

function nextSlide() {
    count++;
    if (count >= totalImages) {
        count = 0;
    }
    updateSlider();
}

function prevSlide() {
    count--;
    if (count < 0) {
        count = totalImages - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(${-count * 100}%)`;
    if (intervalId == null) { resetInterval(); }
}

function resetInterval() {
    clearInterval(intervalId); // Clear existing interval
    intervalId = setInterval(nextSlide, 3500); // Set new interval, image should rotate automatically every 3.5 secs
}

// Automatic carousel effetct
intervalId = setInterval(nextSlide, 3500); // Start the carousel

// Event listeners for buttons if pressed

document.querySelector('.prev-butt').addEventListener('click', function() {
    prevSlide();
});

document.querySelector('.next-butt').addEventListener('click', function() {
    nextSlide();
});