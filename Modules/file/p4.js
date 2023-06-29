const fs = require('fs')
 const data = "All file system operations have synchronous, callback and promise-based forms, and are accessible using both CommonJs syntax and Es6  modules (ESM)";

 //async write
 fs.writeFileSync('./documents/test2.txt', data)
    
 
    console.log('sync file write completed')
