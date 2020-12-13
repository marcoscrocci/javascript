var pdf = require('html-pdf');
var ejs = require('ejs');

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
            <div style="text-align: center; color: rgb(0, 0, 82); font-size: 24px; font-weight: bold;">Lista de Contatos</div>
            `
        },
    },
    "footer": {
        "height": "10mm",
        "contents": {
            default: '<div style="text-align: right; font-size: 9px;"><span style="color: #444;">Página: {{page}}</span>/<span>{{pages}}</span></div>', // fallback value
        }
    },
}

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

