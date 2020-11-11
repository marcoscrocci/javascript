var fs = require("fs");

var data = "Arquivo Texto gerado pelo Nodejs\nQuebra de linha";

fs.writeFileSync("temp.txt", data)
