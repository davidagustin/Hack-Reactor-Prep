/*
Flesh out the implementation and test it.

Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

===
*Some notes about the skeleton*

When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don't pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

*/

// Break up individual words into individual letters.
// Count the instances of each letter
// Iterate all the counts and find the highest
// Return this word's max repeat count
function findMaxRepeatCountInWord(word) {
    // Split string into array
    let wordSplit = word.split('')

    // Create counter hash
    let counterHash = {};
        // Create for loop
    for (let i = 0; i < wordSplit.length; i++){
        // If key value is undefined, assign it to 1
        if (counterHash[wordSplit[i]] === undefined) {
            counterHash[wordSplit[i]] = 1;
        } else {
            // Else increment the given letter
            counterHash[wordSplit[i]] += 1
        }
    }
    // Create variable to count the value of hash
    let highestCount = 0;
    // Create for in loop
    for (let key in counterHash) {
        if (counterHash[key] > highestCount) {
            highestCount = counterHash[key];
        }
    }
    // Return variable with highest value
    return highestCount
}
function findFirstWordWithMostRepeatedChars(text) {
    let counterHash = {};
    let textSplit = text.split(' ');
    // Break up input text into words (space-delimited).
    // For each word...
    for (let i = 0; i < textSplit.length; i++) {
        if (counterHash[textSplit[i]] === undefined) {
            counterHash[textSplit[i]] = findMaxRepeatCountInWord(textSplit[i])
        }
    }
    let keys = Object.keys(counterHash);
    let counter2 = 0;
    let highestFrequencyWord = '';

    for (let i = 0; i < Object.keys(counterHash).length; i++) {
        if (counterHash[keys[i]] > counter2) {
            counter2 = counterHash[keys[i]];
            highestFrequencyWord = keys[i];
        }
    }
    return highestFrequencyWord;
}
