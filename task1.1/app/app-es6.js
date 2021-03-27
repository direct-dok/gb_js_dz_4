'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        return this.price = this.price - (this.price * .25);
    }
}

let pr = new Product('Phone', 1200);
console.dir(pr);

console.log(pr.name, pr.price)
console.log(pr.make25PercentDiscount())