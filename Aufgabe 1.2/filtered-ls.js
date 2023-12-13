const fs = require('fs');

fs.readFile(process.argv[2], FindeFile)

function FindeFile (error, file) {
    if (error) {
        return console.log(Error);
    }
}