/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
    // your code here
    num = Math.abs(num)
    while(num !==1 && num !== 0){
        num -= 2

    }
    if (num === 0) {
        return true
    } else {
        return false
    }
}
