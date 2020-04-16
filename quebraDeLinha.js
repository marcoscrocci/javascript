const primeiraLinha = primeiraLinha
const segundaLinha = 'segunda linha'
let texto
if (primeiraLinha && segundaLinha) {
    texto = primeiraLinha + '\n' + segundaLinha
} else if (primeiraLinha) {
    texto = primeiraLinha
} else {
    texto = segundaLinha
}

console.log(texto)
