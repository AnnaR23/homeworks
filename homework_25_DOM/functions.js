export function createDomElement(tagName, textContent, container) {
    const newElement = document.createElement(tagName);
    newElement.textContent = textContent;
    container.appendChild(newElement);
    return newElement;
}


export function setLocalStorageInfo(key, value, timeout) {
    if (typeof (value) === 'object') {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
    console.log(`Data with key ${key} saved successfully.`);

    if (timeout) {
        setTimeout(() => {
            localStorage.removeItem(key);
            console.log(`Data with key ${key} was deleted from localStorage after ${timeout} seconds.`);
        }, timeout * 100);
    }
}


export function getLocalStorageInfo(key) {
    const saveData = localStorage.getItem(key);

    if (saveData === null) {
        return undefined;
    }

    try {
        return JSON.parse(saveData);
    } catch (e) {
        return saveData;
    }
}