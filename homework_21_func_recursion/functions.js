'use strict';


export function generateKey(keyLength, symbols) {
    let result = '';
    const symbolsLength = symbols.length;

    for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * symbolsLength);
        result += symbols[randomIndex];
    }
    return result;
}
