const tolerance = 100;
let touchStartX = 0;
let touchEndX = 0;


document.body.addEventListener('touchstart', event => {
    touchStartX = event.touches[0].clientX;
    console.log('touchstart', touchStartX, event);
});

document.body.addEventListener('touchend', event => {
    touchEndX = event.changedTouches[0].clientX;
    console.log('touchend', touchEndX, event);


    if (touchEndX - touchStartX >= tolerance) {
        console.log('Right');
    } else if (touchStartX - touchEndX >= tolerance) {
        console.log('Left');
    } else {
        console.log('Ignored touches');
    }
});