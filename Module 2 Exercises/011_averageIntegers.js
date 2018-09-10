/*
Use the skeleton provided to write a working implementation.

Notes:
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

*/

// Skeleton
function average(numbers) {
    // process array of numbers
    let length = numbers.length
    //pass the array in the function sum and then divided in by the array length and return the answer
    let total = (sum(numbers) / length)
    return total

}

function sum(numbers) {
    // process array of numbers
    let total = numbers.reduce((acc, num) =>
        acc + num
    )
    //return the reduced array of numbers
    return total;
}

function assertSum(actual, expected, testName) {
    if (actual !== expected) {
        return console.log(`ERROR: ${testName}, expected ${expected}, but got ${actual}`)
    }
    return console.log('passed')
}

function assertAverage(actual, expected, testName) {
    if (actual !== expected) {
        return console.log(`ERROR: ${testName}, expected ${expected}, but got ${actual}`)
    }
    return console.log('passed')
}

let outputAverage = average([1,3])
let outputSum = sum([1,3])

assertSum(outputSum, 4, 'It sums up all the elements in the array')

assertAverage(outputAverage, 2, 'It takes the average of the array elements')

// Finished in 33:36
