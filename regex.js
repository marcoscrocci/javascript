const emailUsuarioRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const email = 'marcoscrocci@gmail.com'
if (emailUsuarioRegexp.test(email.toLowerCase())) {
    console.log('Email válido')
} else {
    console.log('Email inválido')
}


const regexSenha = /^([a-zA-Z0-9]{8,})$/;
const senha = 'teste1234'
if (regexSenha.test(senha)) {
    console.log('Senha válida')
} else {
    console.log('Senha inválida')
}