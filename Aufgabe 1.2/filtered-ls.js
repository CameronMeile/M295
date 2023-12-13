/* const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.log(err);
  }
  list.filter(function (file) {
    return path.extname(file) === '.' + process.argv[3]
  }).forEach(function (file) {
    console.log(file);
  })
}) */

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})