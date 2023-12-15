/* const fs = require('fs')
const path = require('path')

module.exports = function (directory, filter, callback) {
  filter = '.' + filter
  fs.readdir(directory, function (error, list) {
    if (error) {
      return callback(error)
    }

    callback(null, list.filter(function (entry) {
      return path.extname(entry) === filter
    }))
  })
} */

const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }