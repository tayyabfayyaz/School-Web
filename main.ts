let currentIndex = 0;

function showSlide(index: number): void{
    let slides = document.querySelector('.slides') as HTMLElement;
    let totalSlides = slides.children.length

    if(index >= totalSlides){
        currentIndex = 0;
    }else if(index < 0){
        currentIndex =totalSlides - 1;
    }else{
        currentIndex = index;
    }

    let offSet = -currentIndex * 100;
    slides.style.transform = `translateX(${offSet}%)`;
};

function nextSlide(): void{
    showSlide(currentIndex +1);
}

function preSlide(): void{
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);

let menuBtn = document.getElementById('navbar-toggle') as HTMLElement;
let menuBar = document.getElementById('navbar-links') as HTMLElement;

menuBtn.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});