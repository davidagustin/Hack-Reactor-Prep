/*
Write an "assertObjectsEqual" function from scratch.

Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

It is OK to use JSON.stringify().

Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Examples

SUCCESS CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Blow'
};

assertObjectsEqual(person, expected, 'updates person's existing first name field');
// console output:
// passed

FAILURE CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'age', 35);

var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}

*/

//Create object
let person = {
    'information': {
        name: 'Bob'
    }
}


//Make function to add email to object
function addEmailToObject(obj, email) {
    obj['information'].email =  email
    return obj
}

//Make output variable
let output = addEmailToObject(person, 'Bob@bobby.com')

//Make expected object
let personExpected = {
    'information': {
        name: 'Bob',
        email: 'Bob@bobby.com'
    }
};

function assertObjectsEqual(actual, expected, testName) {
    // your code here
    // Make a for loop to compare each object property

    for (let key in expected){
        console.log(Object.keys(expected[key]).length)
        console.log(Object.keys(actual[key]).length)
        if ((JSON.stringify(actual[key]) !== JSON.stringify(expected[key])) || JSON.stringify(actual).length !== JSON.stringify(expected).length) {
            return console.log(`FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)
        }
    };
    return console.log('passed')
}

assertObjectsEqual(person, personExpected, 'It adds an email property to object');

//Finished in 1:04:08
