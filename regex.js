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

const regexTelefone = /(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})/g;
const telefone = '(11) 96543-0987'
if (regexTelefone.test(telefone)) {
    console.log('Telefone válido')
} else {
    console.log('Telefone inválido')
}