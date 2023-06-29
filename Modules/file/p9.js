const fs = require('fs')
const readLine = require('readline')

// read line
const txt = readLine.createInterface({
    input:fs.createReadStream('./documents/myfile.txt')
})

var li=0;

txt.on("line", function (data) {
    li++;
    console.log(`Line Number = ${li}:${data}`)
})