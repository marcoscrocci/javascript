var fs = require("fs");

var teste
fs.readFile("temp.txt", "utf-8", (err, data) => {
    teste = 'Teste'
    console.log(data);
});

console.log(teste);
