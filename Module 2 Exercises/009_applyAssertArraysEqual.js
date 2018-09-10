/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Your assertion function:
function assertArraysEqual(actual, expected, testName) {
    // your code here
    let flag = true;
    for (let i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            return console.log(`ERROR ${testName}, excpected ${expected}, but got ${actual}`)
        }
    }
    return console.log('passed')
}


//Your code under test:
function map(array, callbackFunction) {
    var newArray = [];
    array.forEach(function(element) {
        newArray.push(callbackFunction(element));
    });
    return newArray;
}

function cubeAll(n) {
    return n * n * n;
}

let output = map([1,2,3], cubeAll)
// Your calls to 'assertArraysEqual':

assertArraysEqual(output, [1,8,27], 'It raises all elements by a factor of 3')
