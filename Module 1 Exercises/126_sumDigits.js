/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
    // your code here
    let negative = false;
    num = num.toString();
    num = num.split('');
    if (num[0] === '-') {
        negative = true
    }
    let numbersArray = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '-') {
            numbersArray.push(Number(num[i]))
        }
    }
    if (negative === true) {
        numbersArray[0] = numbersArray[1] - numbersArray[0]
        numbersArray.splice(1, 1)
    }
    return numbersArray.reduce((acc, num) =>
    acc + num)
}
