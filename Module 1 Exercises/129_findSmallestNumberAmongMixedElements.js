/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  if (!arr) {
    return ''
  }
  let answerNumber = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
      if (answerNumber === 0) {
        answerNumber = arr[i]
      } else if (arr[i] < answerNumber) {
        answerNumber = arr[i]
      }
    }
  }
  return answerNumber
}
