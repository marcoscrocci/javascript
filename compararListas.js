const animais_existente = [
    {
        id: 1,
        name: "Cachorro"
    },
    {
        id: 2,
        name: "Gato"
    }
]

const animais_selecionados = [
    {
        id: 1,
        name: "Cachorro"
    }
]

for (let i = 0; i < animais_existente.length; i++) {
    const resultado = animais_selecionados.find(s => s.id === animais_existente[i].id)
    if (!resultado) {
        console.log(`remover animal.id == ${animais_existente[i].id}`)
    }
}

/*
const remover_existentes = animais_existente.map((animal) => {
    console.log(`animal = ${JSON.stringify(animal)}`)
    const resultado = animais_selecionados.find(s => s.id === animal.id)
    console.log(resultado)
    if (resultado) {
        return 0
    } else {
        return animal.id
    }
})
*/



console.log(`animais_existentes = ${JSON.stringify(animais_existente)}`)
console.log(`animais_selecionados = ${JSON.stringify(animais_selecionados)}`)
//console.log(`remover_existentes = ${JSON.stringify(remover_existentes)}`)