import {nextSlide, prevSlide} from './script.js';


let startX = 0;
let endX = 0;
let isDragging = false;
let sliderContainer = document.querySelector('.slider-container');



//на мобильных устройствах(события touch)
sliderContainer.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX;//сохраняем начальную точку касания по оси Х
}, false);

sliderContainer.addEventListener('touchmove', event => {
    if (isDragging) {
        endX = event.touches[0].clientX;//отслеживаем текущее движение пальца
    }
}, false);
sliderContainer.addEventListener('touchend', event => {
    const tolerance = startX - endX;//разница между начальной и конечной точкой
    if (Math.abs(tolerance) > 100) { //порог
        if (tolerance > 0) {
            nextSlide();//если свайп влево -> след. слайд
        } else {
            prevSlide();//если свайп вправо -> пред. слайд
        }
    }
    isDragging = false;//закрываем флаг перетаскивания
}, false);




//на десктопных устройствах(события мыши)
sliderContainer.addEventListener('mousedown', event => {
    startX = event.clientX;
    isDragging = true;
}, false);

sliderContainer.addEventListener('mousemove', event => {
    if (isDragging) {
        endX = event.clientX;
    }
}, false);

sliderContainer.addEventListener('mouseup', event => {
    const tolerance = startX - endX;
    if (Math.abs(tolerance) > 100) {
        if (tolerance > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    isDragging = false;//закрываем флаг перетаскивания
}, false);



