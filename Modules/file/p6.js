const fs = require('fs');


// sync append
 const data = "\n\n Asynchronously append data to afile, creating the file if it doesnt exist)";

 
 fs.appendFileSync('./documents/test2.txt', data)
    
    console.log('append sync successful')
 