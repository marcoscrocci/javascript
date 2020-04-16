const contatos = [
    {
        id:3,
        telefone: '(11) 98888-8888',
        ativo: true,
        usuario_id: 5,
        tipo_contato_id: 2
    },
    {
        id:8,
        telefone: '(11) 5555-5555',
        ativo: true,
        usuario_id: 5,
        tipo_contato_id: 1
    },
    {
        id:68,
        telefone: '(11) 1111-5555',
        ativo: false,
        usuario_id: 5,
        tipo_contato_id: 2
    },
    {
        id:72,
        telefone: '11 22222222',
        ativo: false,
        usuario_id: 5,
        tipo_contato_id: 3,
        acao: 'atualizar'
    },
    {
        id:72,
        telefone: '11 9999-9999',
        ativo: false,
        usuario_id: 5,
        tipo_contato_id: 3,
        acao: 'criar'
    },
    {
        id:72,
        telefone: '11 7777-7777',
        ativo: true,
        usuario_id: 5,
        tipo_contato_id: 3,
        acao: 'criar'
    }
]

console.log(`\nValor inicial: ${JSON.stringify(contatos)}`)

const filtrados = contatos.filter((contato) => {
    let mostrar = (contato.acao === 'criar' && contato.ativo)
    mostrar = mostrar || !contato.acao
    mostrar = mostrar || contato.acao === 'atualizar'
    return mostrar
})

console.log(`\nValor filtrado: ${JSON.stringify(filtrados)}`)
