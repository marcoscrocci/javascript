//const bcrypt = require('bcrypt-nodejs'); // Versão descontinuada
const bcrypt = require('bcrypt')

const senha = 'teste'
const salt = bcrypt.genSaltSync(10);
const senhaParaSalvar = bcrypt.hashSync(senha, salt);

console.log(senhaParaSalvar)

const senhaDigitada = 'teste'
const senhaBanco = '$2b$10$abtQRAz.V9X040t0BEzdB.gZQHyqZM3ydj6IYziqHF7G7BIXuDmb.'

bcrypt.compare(senhaDigitada, senhaBanco, (err, isMatch) => {
    if (err || !isMatch) {
        console.log('Senha incorreta')
    } else {
        console.log('Senha correta')
    } 
})