let string1 = 'hello world';
let string2 = 'orldhello w';

function isStringRotated(str1, str2){
    let splitString1 = str1.split('');
    let splitString2 = str2.split('');
    let holder = [];
    for (let i = 0; i < splitString1.length; i++){
        let joinString2 = splitString2.join('');
        if (joinString2 === str1) {
            return true
        } else {
            splitString2 = joinString2.split('');
            holder.unshift(splitString2[splitString2.length -1]);
            splitString2.pop();
            splitString2.unshift(holder[0])
        }
    }
    return false
}

let answer = isStringRotated(string1, string2);

console.log(answer);
