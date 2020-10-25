const dadosArquivos = [
    { 
        fieldname: "galleryImage", 
        originalname: "cabeleireiro_01.png", 
        encoding: "7bit", 
        mimetype: "image/png", 
        size: 7533, 
        bucket: "nearmobilebucket", 
        key: "anuncios/cabeleireiro_01-1602118632755.png", 
        acl: "public-read", 
        contentType: "application/octet-stream", 
        contentDisposition: null, 
        storageClass: "STANDARD", 
        serverSideEncryption: null, 
        metadata: null, 
        location: "https://nearmobilebucket.s3.amazonaws.com/anuncios/cabeleireiro_01-1602118632755.png", 
        etag: "\"8013db43297d149a7012a5ce33844d88\"" 
    }, 
    { 
        fieldname: "galleryImage", 
        originalname: "cabeleireiro_02.png", 
        encoding: "7bit", 
        mimetype: "image/png", 
        size: 14347, 
        bucket: "nearmobilebucket", 
        key: "anuncios/cabeleireiro_02-1602118632755.png", 
        acl: "public-read", 
        contentType: "application/octet-stream", 
        contentDisposition: null, 
        storageClass: "STANDARD", 
        serverSideEncryption: null, 
        metadata: null, 
        location: "https://nearmobilebucket.s3.amazonaws.com/anuncios/cabeleireiro_02-1602118632755.png", 
        etag: "\"b26ff1cc3ffeef80393a4850526dc201\"" 
    }, 
    { 
        fieldname: "galleryImage", 
        originalname: "cabeleireiro_teste.png", 
        encoding: "7bit", 
        mimetype: "image/png", 
        size: 14347, 
        bucket: "nearmobilebucket", 
        key: "anuncios/cabeleireiro_teste-1602118632759.png", 
        acl: "public-read", 
        contentType: "application/octet-stream", 
        contentDisposition: null, 
        storageClass: "STANDARD", 
        serverSideEncryption: null, 
        metadata: null, 
        location: "https://nearmobilebucket.s3.amazonaws.com/anuncios/cabeleireiro_teste-1602118632759.png", 
        etag: "\"b26ff1cc3ffeef80393a4850526dc201\"" 
    }
]


const enviar_alteracoes = [
    {
        nome: "cabeleireiro_01.png",
        tipo_arquivo_id: 6,
        tipo_arquivo:  {
            id: 6,
            descricao: "Portable Network Graphics",
            extensao: "png",
            tipo_imagem: true,
            tipo_video: false
        },
        usuario_id: 3,
        ativo: true,
        enviar: true,
        novo: true
    },
    {
        nome: "cabeleireiro_02.png",
        tipo_arquivo_id: 6,
        tipo_arquivo:  {
            id: 6,
            descricao: "Portable Network Graphics",
            extensao: "png",
            tipo_imagem: true,
            tipo_video: false
        },
        usuario_id: 3,
        ativo: true,
        enviar: true,
        novo: true
    },
    {
        nome: "cabeleireiro_teste.png",
        tipo_arquivo_id: 6,
        tipo_arquivo:  {
            id: 6,
            descricao: "Portable Network Graphics",
            extensao: "png",
            tipo_imagem: true,
            tipo_video: false
        },
        usuario_id: 3,
        ativo: true,
        enviar: true,
        novo: true
    }
]


for (let i = 0; i < enviar_alteracoes.length; i++) {
    let registro = enviar_alteracoes[i];
    
    var info = dadosArquivos.find(a => a.originalname === registro.nome)
    if (info) {
        registro.url_s3 = info.location
    }
}

console.log('enviar_alteracoes', JSON.stringify(enviar_alteracoes, null, 4))

