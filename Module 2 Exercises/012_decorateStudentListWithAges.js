/*
Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example:
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

Hint: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
    // create a variable object to push classname and age
    let classListObjectsArray = []

    // your code here
    //make a forloop iterating through the classList
    for (let i = 0; i < classList.length; i++) {
        //inside the forloop create an object
        let object = {
            // within the object make a key value pair with name
            ['name']: classList[i],
            ['age']: getRandomIntInclusive(10, 11)
        }
        //push object as the last line of the loop
        classListObjectsArray.push(object)
    }


    return classListObjectsArray
}




//create assert function
function assertClassList(actual, expected, testName) {
    for (let key in expected) {
            if (actual[key].age < 10 || actual[key].age > 11 || expected[key].age < 10 || expected[key].age > 11) {
                errorMessage(actual[key].age, expected[key].age, testName)
            } else if (actual[key].name !== expected[key].name) {
                errorMessage(actual[key].name, expected[key].name, testName)
            }
        }
    return console.log('passed')
}

function errorMessage(actual, expected, testName) {
    return console.log(`FAILED ${testName}, expected ${expected}, but got ${actual}`)
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
    "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
    "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
    {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
    {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
    {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
    {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
    {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
    {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
    {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
    {"name":"Dora","age":10}]
// create output variable
let output = decorateClassListWithAges(classList)

assertClassList(output, classListWithAges, 'It creates an object from an array and has a name with age either 10 or 11')
