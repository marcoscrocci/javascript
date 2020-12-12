var pdf = require('html-pdf');

var conteudo = `
    <div style="text-align: center; color: blue; padding: 15px 0px 0px 0px; font-size: 24px;">
        <label>Título do Relatório</label>
    </div>
    <hr>
    <div style="padding: 10px 0px 0px 20px;">
        <div style="margin-bottom: 5px;"><b>Nome:</b> Marcos</div>
        <div style="margin-bottom: 5px;"><b>Sobrenome:</b> Crocci</div>
        <div style="margin-bottom: 5px;"><b>Telefone:</b> (11) 99333-2222</div>
        <img style="padding-top: 30px; height: auto; width: 50%;" src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png" />
    </div>
`

pdf.create(conteudo, {}).toFile("./relatorio.pdf", (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})