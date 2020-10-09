const crypto = require('crypto')
const algoritmo = 'aes-256-ctr'
const chave_criptografia = 'cca57fa3211a2f765d1d9520b9df8ac827d853b228453dda9da6cbe16f94cfb8' //crypto.randomBytes(32) //Buffer.from('dashbord@sensores')
const ivPass = 'e92b28240efc9365a2fdc4fbde9d3542'

// Para gerar uma key e iv novo
const keyNew = crypto.randomBytes(32).toString('hex');
const ivNew = crypto.randomBytes(16).toString('hex');

console.log('keyNew: ' + keyNew)
console.log('ivNew: ' + ivNew)


function criptografar(texto) {
    const key = Buffer.from(chave_criptografia, 'hex')
    const iv = Buffer.from(ivPass, 'hex')

    const cipher = crypto.createCipheriv(algoritmo, key, iv)
    let encriptado = cipher.update(texto)
    encriptado = Buffer.concat([encriptado, cipher.final()])

    return encriptado.toString('hex');
}

function descriptografar(texto) {
    const key = Buffer.from(chave_criptografia, 'hex')
    const iv = Buffer.from(ivPass, 'hex')
    let encriptado = Buffer.from(texto, 'hex')
    const decipher = crypto.createDecipheriv(algoritmo, key, iv)
    let descriptado = decipher.update(encriptado)
    descriptado = Buffer.concat([descriptado, decipher.final()])

    return descriptado.toString()
}

console.log('chave_criptografia:', chave_criptografia.toString('hex'))
const senha = 'teste123'
console.log('senha =', senha)
const senhaCriptografada = criptografar(senha)
console.log('senha criptografada =', senhaCriptografada)

const senhaDescriptogradada = descriptografar(senhaCriptografada)
console.log('senha descriptogradada =', senhaDescriptogradada)

