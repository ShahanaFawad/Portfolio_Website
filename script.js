const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 4) % images.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 4 + images.length) % images.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Trigger next and previous slides
document.querySelector('#next').addEventListener('click', nextSlide);
document.querySelector('#prev').addEventListener('click', prevSlide);

//COLLAPSED SIDE PANEL

function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}
