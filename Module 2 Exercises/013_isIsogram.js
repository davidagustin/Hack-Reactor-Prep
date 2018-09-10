/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Write and test a function that determines whether a string is an isogram.

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram.
* Ignore case.
* Follow the pseudocode exactly!

*/

function isIsogram(text) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    textSplit = text.split('');
    console.log(textSplit)
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    charSet = new Set();
    // add each char to a set
    for (let i = 0; i < textSplit.length; i++) {
        charSet.add(textSplit[i])
    }
    // check length of text and the size of the set
    return charSet.size === textSplit.length
}
