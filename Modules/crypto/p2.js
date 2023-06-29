// hmac = hash based message authentication code

let crypto = require('crypto')

let hash = crypto.createHmac('sha256', 'test1234')

let input = "welcome to node js"

let res = hash.update(input).digest('hex') // binary,base64,base64url,hex

console.log('output =',  res)