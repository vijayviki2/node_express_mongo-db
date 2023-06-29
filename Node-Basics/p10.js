//sending msg to dgram reciever

//sender
const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

let msg = Buffer.from('This is my test string')

socket.send(msg,3300,"localhost")

console.log('data successfully sent through socket.')