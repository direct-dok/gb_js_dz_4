'use strict';

function numberIntoObject(number) {
    number = parseInt(number);

    if(number > 1000 || number < 0 || typeof number !== 'number' || isNaN(number)) {
        console.log('Вы ввели число более 1000, или менее 0, или вы ввели не число')
        return {};
    }
    let arrNum = String(number).split('');
    const obj = {};

    obj.units = +arrNum[0];
    obj.tens = +arrNum[1] || 0;
    obj.hundreds = +arrNum[2] || 0;

    return obj;
}

console.log(numberIntoObject(122));

