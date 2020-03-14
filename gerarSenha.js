// Gera um número aleatório
function returnRand() {
    var randomization = Math.random().toString();
    var lengthNumbers = randomization.length;
    var sort = randomization.substring(lengthNumbers, lengthNumbers - 1);
    return sort;
}
// Gera uma senha simples
function generatePasswordEasy() {
    var retorno = 'password';
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    retorno = letters[returnRand()].toUpperCase() + letters[returnRand()] + letters[returnRand()] +
        returnRand() + returnRand() + returnRand();
    return retorno;
}
// Gera uma senha complexa
function gerarSenhaAleatoria(len) {
    var senha = [],
        cc = String.fromCharCode,
        R = Math.random,
        rnd, i;
    senha.push(cc(48 + (0 | R() * 10))); // push a number
    senha.push(cc(65 + (0 | R() * 26))); // push an upper case letter
    for (i = 2; i < len; i++) {
        rnd = 0 | R() * 62; // generate upper OR lower OR number
        senha.push(cc(48 + rnd + (rnd > 9 ? 7 : 0) + (rnd > 35 ? 6 : 0)));
    }
    // shuffle letters in password
    return senha.sort(function() { return R() - .5; }).join('');
}

console.log(gerarSenhaAleatoria(8))
//console.log(generatePasswordEasy())