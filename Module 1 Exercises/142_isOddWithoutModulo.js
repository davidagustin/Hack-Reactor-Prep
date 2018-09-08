/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {
    // your code here
    num = Math.abs(num)
    while(num !==1 && num !== 0){
        num -= 2
    }
    if (num === 1) {
        return true
    } else {
        return false
    }
}
