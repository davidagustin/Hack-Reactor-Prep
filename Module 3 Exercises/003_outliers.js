// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
//
// The return value should be 1-indexed, not 0-indexed.
//
// Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue (string){
    // convert string to array using split and save it to an array variable
    let splitString = string.split(' ');
    // map with the Number() function
    splitString = splitString.map(Number);
    // use filter to find the odd numbers and save it to a variable
    let oddNumbers = splitString.filter((num) => {
        return num % 2 !== 0;
    });
    // use filter to find the even numbers and save it to a variable
    let evenNumbers = splitString.filter((num) => {
        return num % 2 === 0;
    });
    // use an if statement to compare the lengths of the odd number array and even number array
    // if the odd array length is more than the even array length, return the array
    //varible with indexOf(evenArray[0]) + 1
    if (oddNumbers.length > evenNumbers.length) {
        return splitString.indexOf(evenNumbers[0]) + 1
        // else if the even array length is more than the even array length, return the array
        //varible with indexOf(odd Array[0]) + 1
    }else if (oddNumbers.length < evenNumbers.length) {
        return splitString.indexOf(oddNumbers[0]) + 1
    }
}

function assertEquals(input, output, testName){
    if (input !== output) {
        return `ERROR ${testName}, expected ${output} but got ${input}`
    } else {
        return `passed`
    }
}

let output = detectOutlierValue("2 4 7 8 10");

let answer = assertEquals(output, 3, 'Third number is odd, while the rest of the numbers are even');

console.log(answer);
