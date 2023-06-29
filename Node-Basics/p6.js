// allocate memory

const { log } = require("console");

const buf = Buffer.alloc(4)
console.log( 'safe memory =',buf);

//unsafe memory
const buf1 = Buffer.allocUnsafe(5)
console.log('unsafe memory =', buf1) //possible to hav e garbage values

//ACII value
const buf2 = Buffer.from('Raj kumar')
console.log('ascii =', buf2)

//ASCII to string
console.log('string =', buf2.toString())

// concat
let a1 = Buffer.from('Wecome to')
let a2 = Buffer.from('Node js server script.')

let res = [a1,a2]

let out = Buffer.concat(res)

console.log('out =', out)
console.log('out string =', out.toString())
