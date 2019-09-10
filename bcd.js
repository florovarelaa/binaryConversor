// : ) : - However you want
//

// Shows error message.
function bcdError() {
    return console.log('Number is not bcd as string. bcd numbers are 4*#### and range from 0000 (0) to 1001 (9)');
}

// Shows error message.
function decimalError() {
    return console.log('Number is not a positive decimal as string')
}

// Receives a decimal or bcd number returns its corresponding bcd and decimal.
// input: bcd or decimal as a string.
// output: object of decimal and bcd number as a string.
function bcd2dHash(value) {

    //Step 1. Create the array of equivalences.
    const d2bcd = [
        {
            bcd: '0000',
            decimal: '0',
        },
        {
            bcd: '0001',
            decimal: '1',
        },
        {
            bcd: '0010',
            decimal: '2',
        },
        {
            bcd: '0011',
            decimal: '3',
        },
        {
            bcd: '0100',
            decimal: '4',
        },
        {
            bcd: '0101',
            decimal: '5',
        },
        {
            bcd: '0110',
            decimal: '6',
        },
        {
            bcd: '0111',
            decimal: '7',
        },
        {
            bcd: '1000',
            decimal: '8',
        },
        {
            bcd: '1001',
            decimal: '9',
        }
    ]

    //Step 2. Get the corresponding decimal and bcd values.
    let decimal = d2bcd.filter( e => e.decimal === value);
    let bcd = d2bcd.filter( e => e.bcd === value)

    //Step 3. Return any value obtained. 
    if(bcd.length != 0) {
        return bcd[0]
    } else if (decimal.length != 0) {
        return decimal[0]
    } else
        return
}

//conbases a bcd number to decimal.
//input: bcd number as string
//output: array of objects: [{bcd: '####', decimal: '#'}]
function bcd2d(value) {
    //Step 1. Splits value into an array. Each position will have 4 digits
    let len = value.length;
    let arr = value.match(/.{1,4}/g);

    //Step2. verify that bcd number is multiple of 4
    if(!(len%4 === 0) || (value == "")) {
        bcdError();
        return
    } 
    
    //Step 3. Match each string in the array with it's corresponding value in the Hashtable. Incorrect bcd numbers will be returned as undefined
    let bcdArray = arr.map( (e, index) => {
        return bcd2dHash(e);
    })

    return bcdArray;
}

//conbases a decimal number to bcd.
//input: decimal number as string
//output: array of objects: [{bcd: '####', decimal: '#'}]
function d2bcd(value) {
    //Needs to be fixed for values with ","
    
    //Step 1. Verify if input is a string; 
    if(typeof value != 'string'){
        decimalError();
        return
    } 

    //Step 2. Arrayifies the string value.  
    let decimal = value.split('');
    
    //Step 3. Verifies if array for integers
    if(!decimal.every( (e, index) => {
        // true if each character in the string is a number
        return Number.isInteger(parseInt(decimal[index])) 
    })) {
        decimalError();
        return;
    }
    
    //Step 4. Looks for the number in the hastable, stores in the returned array.
    let bcd = decimal.map( e => {
        return bcd2dHash(e);
    });

    return bcd
}

//Exports conbaseors
module.exports = {
    bcd2d: bcd2d,
    d2bcd: d2bcd
}