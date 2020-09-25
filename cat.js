const fs = require('fs');
const ls = require('./ls');

const cat = function(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data.toString().trim());
    process.stdout.write("\nprompt > ");
  })
}


module.exports = cat;

//ls
//
