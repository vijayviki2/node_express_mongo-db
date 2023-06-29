const fs = require('fs')

// async append
 const data = "\n\n Asynchronously append data to afile, creating the file if it doesnt exist)";

 
 fs.appendFile('./documents/test1.txt', data, function(err) {
    if(err) throw err;
    console.log('append successful')
 })