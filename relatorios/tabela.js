var pdf = require('html-pdf');
var ejs = require('ejs');
var moment = require('moment');

var conteudo = {
    lista: [
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
        { nome: "João Silva", telefone: "(11) 91111-2222", cidade: "Suzano" },
        { nome: "Marcos Beline", telefone: "(11) 93333-4444", cidade: "São Paulo" },
        { nome: "Cezar Ribeiro", telefone: "(11) 95555-6666", cidade: "Mogi das Cruzes" },
        { nome: "Janaina Ferraz", telefone: "(11) 97777-8888", cidade: "Sorocaba" },
        { nome: "Ana Souza", telefone: "(11) 99900-0099", cidade: "São Paulo" },
    ]
}

// for (let i = 0; i < conteudo.lista.length; i++) {
//     console.log(`Nome: ${conteudo.lista[i].nome}`);
//     console.log(`telefone: ${conteudo.lista[i].telefone}`);
//     console.log(`cidade: ${conteudo.lista[i].cidade}`); 
// }

// conteudo.lista.forEach(contato => {
//     console.log(`Nome: ${contato.nome}`);
//     console.log(`telefone: ${contato.telefone}`);
//     console.log(`cidade: ${contato.cidade}`); 
// });

var dataAtual = moment().format('DD/MM/YYYY HH:mm:ss')


// https://www.npmjs.com/package/html-pdf
const configuracao = {
    "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'

    "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    "orientation": "portrait", // portrait or landscape
    "border": {
        "top": "10mm",            // default is 0, units: mm, cm, in, px
        "right": "10mm",
        "bottom": "15mm",
        "left": "10mm"
    },
    "paginationOffset": 1,       // Override the initial pagination number
    "header": {
        "height": "10mm",
        "contents": {
            default: `
            <table style="font-family: arial, sans-serif; width: 100%;">
                <tr>
                    <th style="border: 0px solid; width: 25%;"><img style="width: 100%; height: 100%;" src="https://cdn.pixabay.com/photo/2017/01/17/14/41/pixabay-1987080_1280.png" /></th>
                    <th style="border: 0px solid; width: 50%; font-size: 14px; color: blue;">Lista de Contatos</th>
                    <th style="border: 0px solid; width: 25%; font-size: 9px;">${dataAtual}</th>
                </tr>
            </table>
            `
        },
    },
    "footer": {
        "height": "10mm",
        "contents": {
            default: '<div style="text-align: right; font-size: 9px;"><span style="color: #444;">Página: {{page}}</span>/<span>{{pages}}</span></div>', // fallback value
        }
    },

    // Script options
    "phantomPath": "../node_modules/phantomjs/bin/phantomjs", // PhantomJS binary which should get downloaded automatically
    "phantomArgs": [], // array of strings used as phantomjs args e.g. ["--ignore-ssl-errors=yes"]
    //"script": '/url',           // Absolute path to a custom phantomjs script, use the file in lib/scripts as example
    "timeout": 30000           // Timeout that will cancel phantomjs, in milliseconds

}

//const teste = require('../node_modules/phantomjs/bin/phantomjs')

//ejs.renderFile("./tabela.ejs", conteudo, (err, html) => {
ejs.renderFile("./lista.ejs", conteudo, (err, html) => {
    if (err) {
        console.log(err);
    } else {
        //console.log(html);
        pdf.create(html, configuracao).toFile("./relatorio.pdf", (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
        })
    }
})

