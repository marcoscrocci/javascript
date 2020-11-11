const fs = require('fs')

const texto = fs.readFileSync("temp.txt", "utf-8")
console.log(texto)