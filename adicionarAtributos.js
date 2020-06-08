const lista = [
    {
        id: 1,
        descricao: "Item 1"
    },
    {
        id: 2,
        descricao: "Item 2"
    },
    {
        id: 3,
        descricao: "Item 3"
    },

]

pesquisa = 'teste'
objPesquisa = {
    pesquisa
}

console.log(JSON.stringify(lista))

const obj = {
    lista,
    objPesquisa
}


console.log(JSON.stringify(obj))