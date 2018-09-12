/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

function transposeTwoStrings(array) {
    // make a variable string1 and save the first element of the array input
    let string1 = array[0];
    // split string1
    string1 = string1.split('')
    // make a varible string2 and save the second element of the array input
    let string2 = array[1];
    // split string2
    string2 = string2.split('')
    // make a variable answerString equal to empty
    let answerString = '';
    // make a for-loop that will count the indexes string1 and string2 in parallel
    for (let i = 0; i < string1.length; i++) {
        // inside the for loop the answerString add the index letters in parallel followed by
        // a space with a next line \n
        answerString += string1[i] + ' ' + string2[i] + '\n';
    }
    //return  answerString
    return answerString;
}
let output = ("H W\ne o\nl r\nl l\no d\n");
let input = transposeTwoStrings(['Hello','World']);
function assertEquals(input, output, testName){
    if (JSON.stringify(input) !== JSON.stringify(output)) {
        return `ERROR ${testName}, expected ${output} but got ${input}`
    } else {
        return 'passed'
    }
}
let answer = assertEquals(input, output, "it transposes the string");
console.log(answer);
