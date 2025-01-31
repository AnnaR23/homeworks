'use strict';


export function createCounter() {
    let count = 0;

    return function (newCount) {
        if (newCount !== undefined) {
            count = newCount;
        }
        return count++;
    }
}


export function newCounter() {
    let count = 0;

    function value(n) {
        if (n === undefined) {
            return count;
        } else {
            count = n;
            return count;
        }
    }

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    return {
        value,
        increment,
        decrement
    }
}


export const myMax = (arr) => {
    return Math.max.apply(Math, arr);
}


export const myMul = (a, b) => {
    return a * b;
}


export const myDouble = (n) => {
    const double = myMul.bind(null, 2);
    return double(n);
}


export const myTriple = (n) => {
    const triple = myMul.bind(null, 3);
    return triple(n);
}