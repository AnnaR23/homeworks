'use strict';


import {generateKey} from "./functions.js";





// #1 Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length
// Функцію треба покласти в файл functions.js та імпортувати за допомогою import


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i - випадкові символи з набору characters

const numbersOnly = '0123456789';
const numberKey = generateKey(25, numbersOnly);
console.log(numberKey); // 3847501826482930485728394 - випадкові символи з набору numbersOnly


// Check:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i - випадкові символи з набору characters
//
// const numbersOnly = '0123456789';
// const numberKey = generateKey(25, numbersOnly);
// console.log(numberKey); // 3847501826482930485728394 - випадкові символи з набору numbersOnly

// ============================================

// #2 Дано масив з елементами різних типів.
// Створити функцію average яка приймає масив та вираховує середнє арифметичне числових елементів
// або елементів, які можуть бути приведені до number (включно з 0 та '5')
// Заборонено використовувати for. Користуватися тільки методами масиву.

function average(mixed) {
    const numbers = mixed.map(item =>Number(item));
    const filteredNumbers =numbers.filter(item => !isNaN(item));
    return filteredNumbers.reduce((sum, current) => sum + current, 0) / filteredNumbers.length;
}

// Check:
 console.log(average(['hello', 12, 'hi', 3, 4, 'another hell', 1, '5', 7, 'end', 0, 'you again?', 8])); // 5
 console.log(average([34, 'call me', 23, 'no, call me!', '11', 48, null, 51, {}, 37, undefined, 20, [], 26])); // 25

// ============================================

// #3 Написати рекурсивну функцію showDeepArray, яка проходить по вложених масивах і виводить усі цифри підряд.
// кожна цифра у своєму рядку
// Заборонено використовувати for та [].flat()

function showDeepArray(array) {
    if (!Array.isArray(array)) {
        return;
    }

    array.forEach(item => {
        if(typeof item === 'number') {
            console.log(item);
        } else {
          showDeepArray(item);
        }
    })
}

const myArray = [1, 2, 3, [31, 32, 33], 4, 5, 6, 7, [71, 72, [721, 722, 723, [7231, 7232, 7233], 724]], 8, 9];
showDeepArray(myArray);

// Має вивести:
// 1
// 2
// 3
// 31
// 32
// 33
// 4
// 5
// 6
// 7
// 71
// 72
// 721
// 722
// 723
// 7231
// 7232
// 7233
// 724
// 8
// 9

