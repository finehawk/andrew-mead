const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.name)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)
data.name = 'Nimish'
data.age = 21

fs.writeFileSync('1-json.json',JSON.stringify(data))