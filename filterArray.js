const lista = [
    {
        id: 1,
        descricao: 'Teste 1'
    },
    {
        id: 2,
        descricao: 'Teste 2'
    },
    {
        id: 3,
        descricao: 'Teste 3'
    },
    {
        id: 4,
        descricao: 'Teste 4'
    },
    {
        id: 5,
        descricao: 'Teste 5'
    },
]

const ocultar = [1, 3]

const mostrar = lista.filter(item => ocultar.indexOf(item.id) < 0)

console.log(JSON.stringify(lista))
console.log(JSON.stringify(mostrar))