/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/

function getEvenElementsAtProperty(obj, key) {
  // your code here
    // your code here
  if (obj[key] === undefined || !Array.isArray(obj[key])) {
    return []
  }
  let evenArray = []
  for (let i = 0; i < obj[key].length; i++){
    if (obj[key][i] % 2 === 0) {
      evenArray.push(obj[key][i])
    }
  }
  return evenArray
}
