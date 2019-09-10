// : ) : - However you want
//

// Shows error message.
function binaryError() {
    return console.log('Not a valid binary number as a string');
}

//Shows error message.
function decimalError() {
    console.log('Not a valid positive decimal number as string')
}

// Reverses a string.
// input: string
// output: reversed string
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
    return joinArray;
}

//Verifies if a value is valid binary number as a string
//input: binary number as string
//output: boolean
function isBinary(value) {
    // Step 1. Verify input type is string
    if (typeof value != 'string') {
        binaryError();
        return;
    }

    // Step 2. Loop through every character, and compare it with a binary number {0,1}
    let cont = value.length-1;

    let isBin = value[cont] === "1" || value[cont] === "0";

    while (isBin && cont >= 0) {
        isBin = value[cont] === "1" || value[cont] === "0";
        cont--;
    }

    //Step 3. if all characters are binaries returns
    if(!isBin) {
        binaryError();
        return false
    }
    return true
}

//Verifies if a value is a valid positive decimal number as string
//input: positive decimal number as string
//output: boolean
function isDecimal(value){
    // Step 1. Compare type of value with string.
    if( typeof value != 'string') {
        decimalError();
        return
    }

    // Step 2. Parse value to int, verify if it is a positive Integer.
    if( Number.isInteger(parseInt(value)) === false || value < 0){
        decimalError();
        return false
    }
    return true
}

//conbases a binary number to decimal.
//input: binary number as string
//output: decimal as string
function b2d(value) {
    // Step 1. Verify if input is a binary number
    if (!isBinary(value)) {
        return
    }

    // Step 2. Set counters.
    let decimal = 0;
    let power = 0;

    // Step 3. Add to the counter the result of multipling each digit to its corresponding power, base is always 2.
    for (let i = value.length; i > 0; i--) {
        decimal = decimal + Math.pow(2, power)*value[i-1];
        power++;
    }

    // Step 4. Counter to String.
    decimal = decimal.toString();

    return decimal;
}

//conbases a decimal number to a binary
// input: decimal as string
// output: binary as string
function d2b(value) {
    // Step 1. Verify if value is a  
    if (!isDecimal(value)) {
        return
    }

    // Step 2. Initialize counters.
    let binary = '';
    let decimal = value;

    //Step 3. Succesively divide de decimal number by 2. Add reminder to the counter
    while (decimal > 1){
        decimal = decimal / 2;
        if (Number.isInteger(decimal) ) {
            binary = binary + '0';
        } else {
            binary = binary + '1';
            decimal = Math.floor(decimal);
        }
    }
    
    //Step 4. Add the final decimal to the string.
    binary = binary + decimal;

    //Step 5. Reverse binary according to the way decimals are conbased to binary.
    binary = reverseString(binary);

    return binary;
}

//Exports conbaseors
module.exports = {
    b2d: b2d,
    d2b: d2b
}