var estabelecimentos = [
    {
        id: 2,
        nome: "Supermercado da Esquina",
        cnpj: "22.876.654/0001-22",
        usuario_id: 3,
        tipo_estabelecimento_id: 1
    },
    {
        id: 3,
        nome: "Supermercado Veran",
        cnpj: "22.555.888/0001-22",
        usuario_id: 3,
        tipo_estabelecimento_id: 1
    },
    {
        id: 8,
        nome: "Papelaria OneTwo",
        cnpj: "22.333.444/0001-88",
        usuario_id: 3,
        tipo_estabelecimento_id: 3
    },
    {
        id: 12,
        nome: "Papelaria Escola 1",
        cnpj: "55.555.555/0001-55",
        usuario_id: 3,
        tipo_estabelecimento_id: 3
    }
]

const alteracao = {
    id: 8,
    nome: "Papelaria Material",
    cnpj: "44.444.444/0001-44",
    usuario_id: 3,
    tipo_estabelecimento_id: 2
}

console.log('>>> lista original =', JSON.stringify(estabelecimentos))

for (var i in estabelecimentos) {
    if (estabelecimentos[i].id == alteracao.id) {
        estabelecimentos[i].nome = alteracao.nome 
        estabelecimentos[i].cnpj = alteracao.cnpj 
        estabelecimentos[i].tipo_estabelecimento_id = alteracao.tipo_estabelecimento_id 
        estabelecimentos[i].enviar = true
        break
    }
}

console.log('>>> lista alterada =', JSON.stringify(estabelecimentos))

const filtrados = estabelecimentos.filter(e => e.enviar)

console.log('>>> lista filtrada =', JSON.stringify(filtrados))