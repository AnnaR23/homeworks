'use strict';


export class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    introduce() {
        console.log(`I am ${this.name}, I'm ${this.gender}`);
    }
}