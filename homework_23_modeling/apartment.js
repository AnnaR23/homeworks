'use strict';

import {Human} from './human.js';

export class Apartment {
    residents = [];

    addResident(human) {
        if (human instanceof Human) {
            this.residents.push(human);
            console.log(`${human.name} has been added to the apartment.`);
        } else {
            console.log('The object is not a human!');
        }
    }
}