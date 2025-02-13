
export function handleButtonClick(buttonId, message) {
    const button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', function () {
            console.log(message);
        });
    }else {
        console.log(`Кнопка з ID ${buttonId} не знайдена`);
    }
}






export function trackMousePosition(event) {
    const viewportX = event.clientX;
    const viewportY = event.clientY;
    console.log(`Mouse X: ${viewportX}, Mouse Y: ${viewportY}`);
}







export function setupEventDelegation(selector) {
    const list = document.querySelector(selector);


    if (!list) {
        console.log('List not founded');
        return;
    }

    list.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'LI') {
            console.log('Item clicked: ' + event.target.textContent.trim());
        }
    });
}