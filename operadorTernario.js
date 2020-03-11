const exame = {
    statusOriginal: "AA"
}

const hemolabor = "Hemolabor"

const empresa = {
    alias: "Hemolabor"
}

const exameInterpretacao = {
    resultado: ""
}

exameInterpretacao.resultado = empresa.alias === hemolabor ? "NOR" : "NORMAL" 

console.log(empresa)
console.log(exame)
console.log(exameInterpretacao)

empresa.alias = "Outro"

exameInterpretacao.resultado = empresa.alias === hemolabor ? "NOR" : "NORMAL" 

console.log(empresa)
console.log(exame)
console.log(exameInterpretacao)
