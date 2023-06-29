const fs = require('fs')
 const data = "All file system operations have synchronous, callback and promise-based forms, and are accessible using both CommonJs syntax and Es6  modules (ESM)";

 //async write
 fs.writeFile('./documents/test1.txt', data, function(err) {
    if(err) throw err;
    console.log('async file write completed')
 })