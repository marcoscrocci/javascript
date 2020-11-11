var fs = require("fs");

let texto
//fs.readFile("temp.txt", "utf-8", (err, data) => {
fs.readFile("C:/Marcos/teste.txt", "utf-8", (err, data) => {
    texto = data
    //console.log(data);
});

console.log(texto)