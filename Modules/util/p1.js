const util = require('util')

//templates

let myTemplate = `Hi %s, welcome to %s and the duration of the course is %d months.`;

let u1 = util.format(myTemplate, "Raj", "Node js", 1.5)
let u2 = util.format(myTemplate, "Ram", "React js", 1.2)

console.log('user 1 =',u1)
console.log('user 2 =',u2)