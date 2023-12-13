/* console.log(process.argv.reduce(function (before, current, count) {
    return (count < 2) ? 0 : before + (current | 0)
  })); */

let result = 0

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)