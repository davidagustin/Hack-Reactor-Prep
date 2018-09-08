/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0
  }
 let numbersArray = []
  for (let i = 0; i < arr.length; i++) {
    numbersArray.push(arr[i].length)
  }
  return Math.min.apply(null,numbersArray)
}
