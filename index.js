//checks that all digits are 0 or 1
function isBinary(value) {
    if (typeof value != 'string') {
        console.log('binary number must be a string')
        return;
    }
    let cont = value.length-1;

    let isBin = value[cont] === "1" || value[cont] === "0";

    while (isBin && cont >= 0) {
        isBin = value[cont] === "1" || value[cont] === "0";
        cont--;
    }
    if(!isBin) {
        console.log('not a valid binary');
        return false
    }
    return true
}

//checks if it is a positive decimal number
function isDecimal(value){
    if( Number.isInteger(value) === false || value < 0){
        console.log('not a valid positive decimal')
        return false
    }
    return true
}

//converts a binary number to decimal.
function binaryToDecimal(value) {
    if (!isBinary(value)) {
        return
    }
    //Adder, will be returned
    let decimal = 0;
    let power = 0;
    //multiply each digit to its corresponding power, base is always 2.
    for (let i = value.length; i > 0; i--) {
        decimal = decimal + Math.pow(2, power)*value[i-1];
        power++;
    }
    return decimal;
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
    return joinArray;
}

function decimalToBinary(value) {
    if (!isDecimal(value)) {
        return
    }

    let binary = '';
    let decimal = value;
    while (decimal > 1){
        decimal = decimal / 2;
        if (Number.isInteger(decimal) ) {
            binary = binary + '0';
        } else {
            binary = binary + '1';
            decimal = Math.floor(decimal);
        }
    }
    //Concats the reminding 1 or 0
    binary = binary + decimal;

    //reverses binary according to the way decimals are transformed to binary.
    binary = reverseString(binary);

    return binary;
}

module.exports = {
    b2d: binaryToDecimal,
    d2b: decimalToBinary
}