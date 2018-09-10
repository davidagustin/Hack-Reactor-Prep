/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Note: This is a simple (almost correct) implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// Your assertion function:
function assertEqual(actual, expected, testName) {
    // your code here
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`Error ${testName}, expected ${expected} but got ${actual}`)
    }
}

// Code under test:
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
    array.forEach(function(element) {
        doesEveryElementMatch = callbackFunction(element) && doesEveryElementMatch;
    })
    return doesEveryElementMatch;
}
// NOTE - every makes use of a callbackFunction. In orde to test it properly, you will need to write one.
function isEven(element) {
    return element % 2 === 0;
}
// Calls to 'assertEqual'

console.log(assertEqual(every([2,4,6], isEven), true), 'It returns true when all elements are even')

console.log(assertEqual(every([2,3,6], isEven), false), 'It returns false when at least one element is not even')
