/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {
  // your code here
  objectCounter = {}
  for (i = 0; i < str.length; i++){
    if (objectCounter[str[i]] === undefined) {
      objectCounter[str[i]] = 1
    } else {
      objectCounter[str[i]] += 1
    }
  }
  return objectCounter
}
