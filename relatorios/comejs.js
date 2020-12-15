var pdf = require('html-pdf');
var ejs = require('ejs');

var conteudo = {
    nome: "Marcos",
    sobrenome: "Crocci",
    telefone: "(11) 98877-6655"
}

ejs.renderFile("./relatorio.ejs", conteudo, (err, html) => {
    if (err) {
        console.log(err);
    } else {
        //console.log(html);
        pdf.create(html, {}).toFile("./relatorio.pdf", (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })
    }
})
