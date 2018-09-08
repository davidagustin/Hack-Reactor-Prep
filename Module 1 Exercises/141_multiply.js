/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  // your code here
  answer = 0
  for (let i = 0; i < num1; i++) {
    answer += num2
  }
  return answer
}
