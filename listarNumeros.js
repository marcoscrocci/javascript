const inicio = 1
const fim = 15

let lista = []
for (let i = inicio; i <= fim; i++) {
    const numero = { id: i, descricao: i.toString() };
    lista.push(numero)
}

console.log(JSON.stringify(lista))