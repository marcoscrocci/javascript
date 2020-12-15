const moment = require('moment')
var dataAnterior = moment('2020-11-26').toDate();
//var dataAtual = new Date()

var diaAnterior = dataAnterior.getDate();
var diaAtual = (new Date()).getDate()

console.log(diaAnterior)
console.log(diaAtual)

if (diaAnterior < diaAtual) {
    console.log('Fazer')
} else {
    console.log('Não fazer')
}