/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/
function findLongestPalindrome(sentence) {
    // split sentence into words
    let sentenceSplit = sentence.split(' ');
    // iterate words and collect the palindromes

    let palindromeArray = [];
    for (let i = 0; i < sentenceSplit.length; i++) {
        if (isPalindrome(sentenceSplit[i]) === true) {
            palindromeArray.push(sentenceSplit[i]);
        }
    }
    // sort the list of palindromes by word length
    let counterHash = {};

    for (let i = 0; i < palindromeArray.length; i++) {
        if (counterHash[palindromeArray[i]] === undefined) {
            counterHash[palindromeArray[i]] = palindromeArray[i].length;
        }
    }

    let keys = Object.keys(counterHash);
    // return the largest item in the sorted list
    return sortAscendingByLength(counterHash, keys);
}

function reverseString(string) {
    let reversedSplitWord = [];
    let length = string.length;
    for (let i = 0; i < length; i ++) {
        let reverseChar = string.shift();
        reversedSplitWord.unshift(reverseChar)
    }
    return reversedSplitWord
}

function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    let splitWord = word.split('');
    let length = splitWord.length;
    let deepCopy = [];

    for (let i = 0; i < splitWord.length; i++) {
        deepCopy.push(splitWord[i])
    }


    let reversedSplitWord = reverseString(deepCopy);

    for (let i = 0; i < length; i++) {
        if (splitWord[i] !== reversedSplitWord[i]) {
            return false
        }
    }
    return true
}

function sortAscendingByLength(counterHash, keys) {
    let largestItem = '';
    let counter = 0;
    for (let i = 0; i < keys.length; i++) {
        if (counterHash[keys[i]] > counter) {
            counter = counterHash[keys[i]];
            largestItem = keys[i];
        }
    }
    return largestItem;
}

// Finished in 1:02:37
