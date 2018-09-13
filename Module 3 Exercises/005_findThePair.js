/* Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(integers, target) {
    let answer = []
    for (let i = 0; i < integers.length; i++) {
        for (let j = i + 1; j < integers.length; j++ ) {
            if (integers[i] + integers[j] === target) {
                answer.push(integers[i], integers[j])
            }
        }
    }
    return answer
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
