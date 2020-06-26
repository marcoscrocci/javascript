const crypt = require('crypto')
const algoritmo = 'aes-256-ctr'
const chave_criptografia = 'esconderDados'

function criptografar(texto) {
    const cipher = crypt.createCipher(algoritmo, chave_criptografia)
    return cipher.update(texto, 'utf8', 'hex')
}

function descriptografar(texto) {
    const decipher = crypt.createDecipher(algoritmo, chave_criptografia)
    return decipher.update(texto, 'hex', 'utf8')
}

const senha = 'teste123'
console.log('senha =', senha)
const senhaCriptografada = criptografar(senha)
console.log('senha criptografada =', senhaCriptografada)
const senhaDescriptogradada = descriptografar(senhaCriptografada)
console.log('senha descriptogradada =', senhaDescriptogradada)

