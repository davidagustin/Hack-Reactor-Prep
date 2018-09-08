/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

function filterOddLengthWords(words) {
  // your code here
  let answerArray = []
  for (let i = 0; i < words.length; i++){
    if (words[i].length % 2 !== 0) {
      answerArray.push(words[i])
    }
  }
  return answerArray
}
