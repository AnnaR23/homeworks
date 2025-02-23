let touchStartX = 0;
let touchEndX = 0;
let tolerance = 100;

document.body.addEventListener('touchstart', event => {
    touchStartX = event.touches[0].clientX;
    console.log('touchstart', touchStartX, event);
});

document.body.addEventListener('touchend', event => {
    touchEndX = event.changedTouches[0].clientX;
    console.log('touchend', touchEndX, event);

    if (touchStartX - touchEndX >= tolerance) {
        console.log('RIGHT');
    } else if (touchEndX - touchStartX >= tolerance) {
        console.log('LEFT');
    } else {
        console.log('ignored touch');
    }
});

