/*

Write an "assertEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function in a series of test cases to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

*/

// Assertion function:

function assertEqual(actual, expected, testName) {
  // your code here
  if (actual === expected) {
    console.log('passed')
  } else {
    console.log(`FAILED ${testName}, expected ${expected} got ${actual}`)
  }
}


// Code Under Test:

function square(n) {
  return n * n;
}

let output = square(2)
// Calls to 'assertEqual':
assertEqual(output, 4, 'Should square then number 2 to equal 4')

//Finished in 4:56
