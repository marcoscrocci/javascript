const fs = require('fs');

const diretorio = '../../Temp';


const listarArquivos = async (diretorio) => {
    const arquivos = await fs.readdirSync(diretorio);

    for (let i in arquivos) {
        let nome = diretorio + '/' + arquivos[i];
        if (fs.statSync(nome).isDirectory()) {
            listarArquivos(nome);
            nome = nome + '/';
        }
        console.log(nome);

    }

}

listarArquivos(diretorio);

