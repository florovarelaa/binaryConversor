let conversor = require('./index.js');

let d2b = conversor.d2b(13);

let b2d = conversor.b2d('1101');

let d2bcd = conversor.d2bcd('0001')

let bcd2d = conversor.bcd2d('0001')

console.log('d2b', d2b);
console.log('b2d', b2d);
console.log('d2bcd', d2bcd);
console.log('bcd2d', bcd2d);

console.log('conversor', conversor);