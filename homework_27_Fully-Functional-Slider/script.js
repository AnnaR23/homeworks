const imagesLinks = [
    'images/penguin.jpg',
    'images/nature.jpg',
    'images/snow-mountain.jpg',
    'images/boat.jpg',
];

let currentSlide = 0;
const slideCount = imagesLinks.length;
let imageWidth;
let isSliding = false;
let slidingIntervalId;
const slideTime = 1;


generateImages();
generateDots();
const backElem = document.querySelector('#slider .back');
const forwardElem = document.querySelector('#slider .forward');
const imageContainerElem = document.querySelector('#slider .image-container');
const slideButtonsElem = document.querySelector('#slider .slide-buttons');
const firstImageElem = document.querySelector('#slider img');
const playStopElem = document.querySelector('#slider .play-slide-button');


imageWidth = firstImageElem.offsetWidth;


backElem.addEventListener('click', onBackClick);
forwardElem.addEventListener('click', onForwardClick);
slideButtonsElem.addEventListener('click', onDotClick);
playStopElem.addEventListener('click', playStopSlide);


function generateImages() {
    let resultHtml = '';
    imagesLinks.forEach(imageLink => {
        resultHtml += `<img src="${imageLink}" alt="">`;
    })
    document.querySelector('#slider .image-container').innerHTML = resultHtml;
}


function generateDots() {
    let resultHtml = '';
    imagesLinks.forEach((imageLink, index) => {
        const activeClass = index === 0 ? 'active' : '';
        resultHtml += `<div class="slide-button ${activeClass}" data-img="${index}"></div>`;
    })
    document.querySelector('#slider .slide-buttons').innerHTML = resultHtml;
}


function onBackClick() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slideCount - 1;
    }
    imageContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
    refreshActiveDot();
}

function onForwardClick() {
    currentSlide++;

    if (currentSlide === slideCount) {
        currentSlide = 0;
    }

    imageContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;
    refreshActiveDot();
}

function onDotClick(event) {
    if (!event.target.classList.contains('slide-button')) {
        return;
    }

    currentSlide = event.target.dataset.img;
    imageContainerElem.style.transform = `translate(-${currentSlide * firstImageElem.offsetWidth}px)`;

    refreshActiveDot();
}

function refreshActiveDot() {
    const activeDotElem = document.querySelector('#slider .active');
    if (activeDotElem) {
        activeDotElem.classList.remove('active');
        activeDotElem.style.backgroundColor = '#ffffff';
    }
    const newActiveDot = document.querySelector(`#slider div[data-img="${currentSlide}"]`);
    newActiveDot.classList.add('active');
    newActiveDot.style.backgroundColor = '#3cd2ed'; // Меняем цвет активной кнопки

}

function playStopSlide(event) {
    isSliding = !isSliding;
    event.target.classList.toggle('stopped');

    if (isSliding) {
        slidingIntervalId = setInterval(onForwardClick, slideTime * 1000);
    } else {
        clearInterval(slidingIntervalId);
        slidingIntervalId = null;
    }
}


