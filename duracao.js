const moment = require('moment-timezone')

var dataAtualInformada = moment.tz('2020-12-14 12:19:00', 'YYYY-MM-DD HH:mm:ss', "America/Sao_Paulo")
//var dataAtualInformada = moment('2020-12-14 12:19:00', 'YYYY-MM-DD HH:mm:ss') // Problema no horário de verão
var dataAtual = moment.tz(new Date(), "America/Sao_Paulo") 
var dataHora = moment.tz('2020-12-14 08:00:00', 'YYYY-MM-DD HH:mm:ss', "America/Sao_Paulo")
var diferencaInformada = moment(dataAtualInformada).diff(dataHora, 'minutes')
var diferenca = moment(dataAtual).diff(dataHora, 'minutes')


console.log('Data informada: %s', dataHora)
console.log('Data atual: %s', dataAtual)
console.log('Diferenca: %s', diferenca)
console.log('Data atual informada: %s', dataAtualInformada)
console.log('Diferenca informada: %s', diferencaInformada)


