const {  readFileSync, writeFileSync, } = require('fs') // fs = file system

//sync read and write

console.log('started')
const first = readFileSync('./content/sub/first.txt') // sychronous read
const  second = readFileSync('./content/sub/second.txt')

writeFileSync('./content/sub/result-file-1.txt', `Here is the result : ${first}\n\n ${second}`,{flag:'a'})  //sychronous read

    console.log('completed')