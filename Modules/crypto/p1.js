const crypto = require ('crypto')

const hash = crypto.createHash('sha256') // sha => secured hash algo

let input = "Hi this is my test messsage"

let data = hash.update(input).digest('binary') // base64, base64url, binary, hex

console.log('data sha(256) =', data)