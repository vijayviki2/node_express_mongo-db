// import numbers  from './content/number'

// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

// requestAnimationFrame(path) => to import files
const names = require('./content/name')

console.log('user1 = ', names.user1)
console.log('user2 = ', names.user2)
console.log('user3 = ', names.user3)

const number = require('./content/number')

let result = number.x * number.y * number.z
console.log('product =', result)