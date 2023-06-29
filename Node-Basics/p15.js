const path = require('path')

console.log('path sep =', path.sep)

//join path = /content/sub/test.txt
const filepath  = path.join(`content/`,'sub', 'test.txt')
console.log('filepath =', filepath)

// base path = test.txt
const base = path.basename(filepath)
console.log('base path =', base)

//absolute path
const absolute = path.resolve(__dirname, 'content', 'sub', 'test.txt')
console.log('absolute path =',absolute)