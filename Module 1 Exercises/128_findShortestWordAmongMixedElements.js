/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (!arr) {
    return ''
  }
  answerString = ''
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string'){
      if (answerString.length === 0) {
        answerString = arr[i]
      } else if (arr[i].length < answerString.length) {
        answerString = arr[i]
      }
    }
  }
  return answerString
}
