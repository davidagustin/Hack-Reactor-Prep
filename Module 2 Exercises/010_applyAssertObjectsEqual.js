/*

Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/


// Your assertion function:
function assertObjectsEqual(actual, expected, testName) {
    // your code here
    for (let key in expected) {
        if (JSON.stringify(actual[key]) !== JSON.stringify(expected[key])) {
            return console.log(`ERROR ${testName}, expected ${expected[key]} but got ${actual[key]}`);
        }
    }
    return console.log('passed')
}

// Your code under test:
function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj.lastName;

    if (firstName && lastName) {
        obj['fullName'] = firstName + ' ' + lastName;
    }

    return obj;
}

const obj = {
    firstName: "John",
    lastName: "Doe"
}

const expected = {
    firstName: "John",
    lastName: "Doe",
    ['fullName']: "John Doe"
}

let output = addFullNameProp(obj)
// Your calls to 'assertObjectsEqual':
console.log(obj)
assertObjectsEqual(obj, expected, 'It takes the two values of the properties and joins them with a space')

//finished in 11:56
