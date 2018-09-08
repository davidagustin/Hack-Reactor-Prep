/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  if (!arr) {
    return ''
  }
  let answerNumber = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
      if (answerNumber === 0) {
        answerNumber = arr[i]
      } else if (arr[i] > answerNumber) {
        answerNumber = arr[i]
      }
    }
  }
  return answerNumber
}
