/* require('./mymodule.js')(process.argv[2], process.argv[3], function (error, list) {
    if (error) {
        return console.log(error)
    }

    list.forEach(function (entry) {
        console.log(entry)
    })
}) */

const filterFn = require('./mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
})