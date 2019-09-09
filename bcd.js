function bcdError() {
    return console.log('Number is not bcd. bcd numbers are 4*#### and range from 0000 (0) to 1001 (9)');
}

function decimalError() {
    return console.log('Number is not a positive decimal')
}

//input a bcd in a string or a decimal
function bcd2dHash(value) {



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

    let decimal = d2bcd.filter( e => e.decimal === value);
    
    let bcd = d2bcd.filter( e => e.bcd === value)

    if(bcd.length != 0) {
        return bcd[0]
    } else if (decimal.length != 0) {
        return decimal[0]
    } else
        return
}

//input: string of bcd digits out || string of decimal numbers
//output: [{bcd: '####', decimal: '#'},]
function bcd2d(value) {

    let len = value.length;
    let arr = value.match(/.{1,4}/g);

    //bcd numbers are multiple of 4
    if(!(len%4 === 0) || (value == "")) {
        bcdError();
        return
    } 
    
    //incorrect bcd numbers will be returned as undefined
    let bcdArray = arr.map( (e, index) => {
        return bcd2dHash(e);
    })

    if (bcdArray) {
        return bcdArray;
    } else {
        return;
    }
}

function d2bcd(value) {
    //Needs to be fixed for values with ","
    
    let decimal = value.split('');
    
    if(!decimal.every( (e, index) => {
        // true if each character in the string is a number
        return Number.isInteger(parseInt(decimal[index])) 
    })) {
        decimalError();
        return;
    }
    
    let bcd = decimal.map( e => {
        return bcd2dHash(e);
    });

    return bcd
}

module.exports = {
    bcd2d: bcd2d,
    d2bcd: d2bcd
}