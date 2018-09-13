Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

//Flip every pair of characters in a string.


    //Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
//var output = flipPairs(input);
//console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function pairSwitcher(string){
    //split the string
    let splitString = string.split('');

    //do a forloop
    //break at i - 1
    for (let i = 0; i < splitString.length - 1; i++) {
        let j = i + 1;
        let holder = splitString[i];
        splitString[i] = splitString[j];
        splitString[j] = holder;
        // switch at every pair so increment i again
        i++
    }
    splitString = splitString.join('');
    //join the string
    return splitString
}

let test1 = pairSwitcher(input);

function assertPairSwitcher(input, output, testName){
    if (input !== output) {
        console.log(`ERROR ${testName}, expected ${output}, but got ${input}`)
    } else {
        console.log('passed')
    }
}

assertPairSwitcher(test1, 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!', 'it switches the pairs of characters');

// Finished in 21:22

/*
function flipEveryNChars(str, n) {
  //define variable to store the flipped characters sentence
  //for all the characters from start to n, non inclusive
    //define variable to store a segment of the string
    //set flipped var = to itself plus the reverse of that segment
  //return the flipped sentence var

  var flippedString = "";
  for (var i = 0; i < str.length; i += n) {
    var stringOfNChars = str.slice(i, i + n);
    flippedString += stringOfNChars.split('').reverse().join('');
  }
  return flippedString;
}
 */
