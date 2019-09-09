
function getbcd(value) {
    const bcd = [
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

    let res = bcd.filter( e => e.bcd == value)
    
    if(res.length != 0) {
        return res[0].bcd
    } else {
        console.log('Number is not bcd. bcd numbers are four digits and range from 0000 (0) to 1001 (9)')
        return
    }
}

//checks if it is a 4 digit binary between 0 and 9
function getBcd(value) {

    let len = value.length;
    let arr = value.match(/.{1,4}/g);

    if(!(len%4 === 0)) {
        console.log('Number is not bcd. bcd numbers are #### four digits, or multiples')
        return false
    } 
    
    let todos = arr.every( e => {
        return getbcd(e);
    })

    return todos;
}

module.exports = {
    isbcd: isBcd
}
