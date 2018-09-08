/*
Write a function called "isSameLength".
Given two words, "isSameLength" returns whether the given words have the same length.
var output = isSameLength('words', 'super');
console.log(output); // --> true
*/

function isSameLength(word1, word2) {
  // your code here
  if (word1.length === word2.length) {
    return true
  } else {
    return false
  }
}
