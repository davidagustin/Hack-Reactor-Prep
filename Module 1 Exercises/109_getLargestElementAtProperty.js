/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

function getLargestElementAtProperty(obj, key) {
  // your code here
  if (obj[key] === undefined || !Array.isArray(obj[key])) {
    return undefined
  }
  let newArray = obj[key]

  if (newArray.length === 0) {
    return undefined
  }
  return Math.max.apply(null, newArray)
}
