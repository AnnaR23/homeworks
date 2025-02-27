//массив(содержит пути к изображениям)
const links = [
    "images/boat.jpg",
    "images/nature.jpg",
    "images/penguin.jpg",
    "images/snow-mountain.jpg",
];


let currentSlide = 0;
let slideCount = links.length;
let intervalId;
let isPlaying = false; //флаг
let dots = document.querySelectorAll('.dot');
let sliderContainer = document.querySelector('.slider');


//динамическое создание слайдов
links.forEach((link, index) => {
    const slide = document.createElement('div');//создает слайд
    slide.classList.add('slide');

    const img = document.createElement('img');//создает изображение
    img.src = link;
    img.alt = `Image ${index + 1}`;

    slide.appendChild(img); //добавляет изображение на слайд
    sliderContainer.appendChild(slide);//добавляет слайд в контейнер
});


//Ф-ция для обновления активных индикаторов
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

//Ф.ция для переключения слайдов: на след.
export function nextSlide() {
    if (currentSlide < links.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSliderPosition();
    updateDots();
}

//Ф-ция для переключения слайдов: на пред.
export function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slideCount - 1;
    }
    updateSliderPosition();
    updateDots();
}

//Ф-ция для обновления позиции слайдера
export function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`; //сдвигаем слайдер влево на 100% от ширины слайда
}

//Обработчики событий для кнопок
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

//Ф-ция для автопрокрутки слайдов: старт
function startAutoSlide() {
    if (!isPlaying) {
        intervalId = setInterval(nextSlide, 2000);
        isPlaying = true;
        document.querySelector('.play').classList.add('active');
        document.querySelector('.pause').classList.remove('active');
    }
}

//Ф-ция для автопрокрутки слайдов: стоп
function stopAutoSlide() {
    if (isPlaying) {
        clearInterval(intervalId);
        isPlaying = false;
        document.querySelector('.pause').classList.add('active');
        document.querySelector('.play').classList.remove('active');
    }
}

//Обработчики событий для кнопок
document.querySelector('.play').addEventListener('click', function () {
    startAutoSlide();
});
document.querySelector('.pause').addEventListener('click', function () {
    stopAutoSlide();
});


//обработка кликов по индикаторам
dots.forEach((dot, index) => {
    dot.addEventListener('click',() => {
        currentSlide = index;
        updateSliderPosition();
        updateDots();
    });
})




