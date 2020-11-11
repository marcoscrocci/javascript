var fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, 'arquivos/temp');
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, {
		recursive: true
	});
}

var data = "Arquivo Texto gerado pelo Nodejs\nQuebra de linha";

fs.writeFileSync(dir + "/temp.txt", data)
