//массив(содержит пути к изображениям)
const links = [
    "images/boat.jpg",
    "images/nature.jpg",
    "images/penguin.jpg",
    "images/snow-mountain.jpg",
];


let currentSlide = 0;
let slideCount = 4;
let intervalId;
let isPlaying = false; //флаг
let dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');


//динамическое добавление изображений на слайды
slides.forEach((slide, index) => {
    const img = document.createElement("img");
    img.src = links[index];
    img.alt = `Image ${index + 1}`;
    slide.appendChild(img); //добавляет изображение в Html слайд
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
function nextSlide() {
    if (currentSlide < slideCount - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSliderPosition();
    updateDots();
}

//Ф.ция для переключения слайдов: на пред.
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slideCount - 1;
    }
    updateSliderPosition();
    updateDots();
}

//Ф-ция для обновления позиции слайдера
function updateSliderPosition() {
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


dots.forEach((dot, index) => {
    dot.addEventListener('click',() => {
        currentSlide = index;
        updateSliderPosition();
        updateDots();
    });
})




