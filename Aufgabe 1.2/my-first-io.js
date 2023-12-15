/* const fs = require('fs')

countNewLines(fs.readFileSync(process.argv[2]))

function countNewLines (text) {
  const lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
} */

const fs = require('fs')

const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split('\n').length - 1;
console.log(lines);