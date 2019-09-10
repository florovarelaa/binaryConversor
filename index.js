// : ) : - However you want
//

let bcd = require('./bcd');
let binary2decimal = require('./b2d')

//Exports conbaseors
module.exports = {
    b2d: binary2decimal.b2d,
    d2b: binary2decimal.d2b,
    d2bcd: bcd.d2bcd,
    bcd2d: bcd.bcd2d
}