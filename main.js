"use strict";
let currentIndex = 0;
function showSlide(index) {
    let slides = document.querySelector('.slides');
    let totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    }
    else if (index < 0) {
        currentIndex = totalSlides - 1;
    }
    else {
        currentIndex = index;
    }
    let offSet = -currentIndex * 100;
    slides.style.transform = `translateX(${offSet}%)`;
}
;
function nextSlide() {
    showSlide(currentIndex + 1);
}
function preSlide() {
    showSlide(currentIndex - 1);
}
setInterval(nextSlide, 5000);
let menuBtn = document.getElementById('navbar-toggle');
let menuBar = document.getElementById('navbar-links');
menuBtn.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});
