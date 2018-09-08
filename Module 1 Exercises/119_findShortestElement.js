/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
    // your code here
    // your code here
    let shortestString = ''
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            shortestString = arr[i]
        } else if (shortestString.length > arr[i].length) {
            shortestString = arr[i]
        }
    }
    return shortestString
}
