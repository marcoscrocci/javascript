var linhasPorPagina = 10;
var linhas = 35;

for (let i = 0; i < linhas; i++) {
    const resto = i % linhasPorPagina;
    console.log('resto = %s', resto);
    
}