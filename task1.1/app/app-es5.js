'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    return this.price = this.price - (this.price * .25);
};

let pr = new Product('Phone', 1200);
console.dir(pr);

console.log(pr.name, pr.price)
console.log(pr.make25PercentDiscount())