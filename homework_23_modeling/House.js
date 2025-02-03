'use strict';


export class House {
    apartments = [];
    maxApartments;

    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
            console.log('Apartment has been added to the house.');
        } else {
            console.log('Maximum number of apartments exceeded!');
        }
    }
}
