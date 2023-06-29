const number = require('./content/number')
const name = require('./content/name')
const method = require('./content/method')

method.sayHi(name.user1)
method.sayHi(name.user2)
method.sayHi(name.user3)

console.log( " sum =", method.sum(number.x,number.y,number.z))
