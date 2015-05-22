fs = require("fs")

lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log lines
