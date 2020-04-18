/**  
 * let permite que você declare variáveis limitando seu escopo no bloco, 
 * instrução, ou em uma expressão na qual ela é usada. Isso é inverso da 
 * keyword var, que define uma variável globalmente ou no escopo inteiro 
 * de uma função, independentemente do escopo de bloco. 
*/
let valor1 = 'Teste 1'
var valor2 = 'Teste 2'

if (true) {
    valor1 = 'Teste 1 alterado fora de outro escopo'
    let valor3 = 'Teste 3'
    var valor4 = 'Teste 4'
}

console.log(`valor1 = ${valor1}`)
console.log(`valor2 = ${valor2}`)
//console.log(`valor3 = ${valor3}`)  // Erro
console.log(`valor4 = ${valor4}`)
