const cep = require('cep-promise')

cep('03405060')
.then((endereco) => {
    endereco_ptbr = {
        cep: endereco.cep,
        estado: endereco.state,
        cidade: endereco.city,
        bairro: endereco.neighborhood,
        logradouro: endereco.street,
        servico: endereco.service
    }
    console.log(endereco_ptbr)
})
.catch(console.log)