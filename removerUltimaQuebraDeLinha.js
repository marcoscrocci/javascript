let texto = '\nlinha 1\nlinha 2\nlinha 3\n'
console.log('Remover última quebra de linha do texto')
console.log(`Antes de remover: ${texto}`)
texto = texto.replace(/\n$/, "")
console.log('Depois de remover:')
console.log(`Antes de remover: ${texto}`)