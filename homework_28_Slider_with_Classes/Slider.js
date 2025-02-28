/*
Класс для создания слайдера изображений.
Обеспечивает функциональность для переключения слайдов, автопрокрутки и индикаторов.
Реализует автоматическую паузу при наведении мыши на слайдер.
*/
export class Slider {

    images = []; //Массив изображений для слайдера.
    currentSlide = 0; //Индекс текущего слайдера.
    slideCount = 0; //Общее колличество слайдов.
    intervalId = 0; // ID для хранения интервала автопрокрутки.
    isPlaying = false; //Флаг для проверки, включена ли автопрокрутка.
    interval = 2000; //Интервал автопрокрутки(по умолчанию 2000мс).


//Конструктор класса Slider.
    constructor(images, interval = 2000, slider1) {
//Проверяет, что images является массивом и не пустой.
        if (!Array.isArray(images) || images.length === 0) {
            throw new Error('No images specified');
        }

//Инициализация свойств слайдера.
        this.images = images;
        this.slideCount = images.length;
        this.interval = interval;


//Инициализация элементов DOM.
        this.dots = document.querySelectorAll('#slider1 .dot');
        this.sliderContainer = document.querySelector('#slider1 .slider');


        this.createSlider();// создание слайдов
        this.addEventListeners(); //привязка обработчиков событий
    }

//Добавляет обработчики событий для кнопок, индикаторов и наведения мыши.
    addEventListeners() {
        document.querySelector('#slider1 .next').addEventListener('click', () => this.nextSlide());
        document.querySelector('#slider1 .prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('#slider1 .play').addEventListener('click', () => this.startAutoSlide());
        document.querySelector('#slider1 .play').addEventListener('click', () => this.stopAutoSlide());

//Обработчики для индикаторов.
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentSlide = index;
                this.updateSliderPosition();
                this.updateDots();
            });
        });

//Автопауза при наведении мыши.
        this.sliderContainer.addEventListener('mouseenter', e => {
            this.stopAutoSlide();
        });

//Возобновление автопрокрутки при уходе мыши.
        this.sliderContainer.addEventListener('mouseleave', e => {
            this.startAutoSlide();
        });
    }


//Создает слайдер и добавляет слайды в контейнер
    createSlider() {
        this.images.forEach((link, index) => {
            const slide = document.createElement('div');//создает слайд
            slide.classList.add('slide');

            const img = document.createElement('img');//создает изображение
            img.src = link;
            img.alt = `Image ${index + 1}`;

            slide.appendChild(img); //добавляет изображение на слайд
            this.sliderContainer.appendChild(slide);//добавляет слайд в контейнер
        });

        this.updateDots();
    }

//Обновляет индикаторы слайдов, делает активным тот, который соответствует текущему слайду.
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }


//Переключает слайд на следующий. При достижении последнего слайда переключается на первый.
    nextSlide() {
        if (this.currentSlide < this.images.length - 1) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0;
        }
        this.updateSliderPosition();
        this.updateDots();
    }


//Переключает слайд на предыдущий. При достижении первого слайда переключается на последний.
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.slideCount - 1;
        }
        this.updateSliderPosition();
        this.updateDots();
    }


//Обновляет позицию слайдера, сдвигая его на текущий слайд.
    updateSliderPosition() {
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`; //сдвигаем слайдер влево на 100% от ширины слайда
    }


//Запускает автопрокрутку слайдов.
    startAutoSlide() {
        if (!this.isPlaying) {
            this.intervalId = setInterval(() => this.nextSlide(), this.interval);
            this.isPlaying = true;
            document.querySelector('#slider1 .play').classList.add('active');
            document.querySelector('#slider1 .pause').classList.remove('active');
        }
    }


//Останавливает автопрокрутку слайдов.
    stopAutoSlide() {
        if (this.isPlaying) {
            clearInterval(this.intervalId);
            this.isPlaying = false;
            document.querySelector('#slider1 .pause').classList.add('active');
            document.querySelector('#slider1 .play').classList.remove('active');
        }
    }
}