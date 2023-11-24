const acorn = require('acorn')
const fs = require('fs')

const args = process.argv[2]
const buffer = fs.readFileSync(args).toString()

const body = acorn.parse(buffer).body

console.log(JSON.stringify(body))