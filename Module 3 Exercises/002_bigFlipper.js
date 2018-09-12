function flipEveryNChars(input, number){
    // split the input
    let splitInput = input.split('');
    // create an array for the string seperated by the number
    let arrayString = [];
    // make a variable that holds an empty string
    let stringHolder = '';
    // make a for loop
    let counter = 0;
    for (let i = 0; i < splitInput.length; i++) {
        counter += 1;
        stringHolder += splitInput[i];
        if (counter % (number) === 0 && counter !== 1 && counter !== 0) {
            arrayString.push(stringHolder);
            stringHolder = '';
        }else if (i === splitInput.length - 1){
            arrayString.push(stringHolder);
            stringHolder = '';
        }
    }
    for (let i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].split('');
        arrayString[i] = arrayString[i].reverse();
        arrayString[i] = arrayString[i].join('');
        stringHolder += arrayString[i];
    }
    return stringHolder
}

// Finished 1:26:07
