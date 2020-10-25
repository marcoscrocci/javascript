const moment = require('moment')

//let dataHoraAtual = moment('2020-05-16 06:00:00').toDate()
let dataHoraAtual = moment().toDate()
let mesQueVem = moment().add(1, 'month').startOf('month')

let visualizou_em = moment('2020-05-16 00:00:00').toDate()

console.log(moment(dataHoraAtual).format('DD/MM/YYYY HH:mm:ss'))

dataValidade = moment(visualizou_em).add(6,'hours').toDate()

if (dataHoraAtual >= dataValidade) {
    console.log('Adicionar nova visualização')
} else {
    console.log('Já visualizou a menos de 6 horas')
}

console.log('mesQueVem =', moment(mesQueVem).format('DD/MM/YYYY HH:mm:ss'))