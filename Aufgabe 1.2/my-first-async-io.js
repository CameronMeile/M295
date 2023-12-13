/* const fs = require('fs')

fs.readFile(process.argv[2], countNewLines)

function countNewLines (error, text) {
  if (error) {
    return console.log(error)
  }
  const lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
}
 */
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})