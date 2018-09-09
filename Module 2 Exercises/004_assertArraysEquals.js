/*
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Examples

SUCCESS CASE

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

FAILURE CASE

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7); //just an example
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

*/

function arrayMultiplyMap(array, num) {
    // Make for loop
    for (let i = 0; i < array.length; i++) {
        // Multiply array[i] by number
        array[i] = array[i] * num
    }
    // Return array
    return array
}



function assertArraysEqual(actual, expected, testName) {
    // your code here
    // Make boolean flag false initially
    let flag = false

    // Use a for loop to iterate through array and compare values of both elements and return flag = false as soon as two
    // elements do not equal each other, if there is no false in each element, return true at the end of the loop
    // Make if statement to compare actual expected

    for (let i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            break
        } else if (i === expected.length-1 && actual[i] === expected[i]) {
            flag = true
            break
        }
    }
  // If false output error message
    if (actual.length !== expected.length || flag === false) {
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    }else if (flag === true) {
        console.log('passed')
    }
}

//Create a variable and assign function to variable
let output = arrayMultiplyMap([1,2,3], 2)
//Run assert function
assertArraysEqual(output, [2,4,6], "It multiplies each element by 2")

//Finished in 39:19
