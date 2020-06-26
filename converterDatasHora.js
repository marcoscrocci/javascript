var moment = require('moment')

const dataHoraBr = '14/02/2020 13:24:12'
const dataHora = moment(dataHoraBr, 'DD/MM/YYYY HH:mm:ss').toDate()
const dataHoraSQL = moment(dataHoraBr, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')

console.log(dataHoraBr)
console.log(dataHora)
console.log(dataHoraSQL)

const dtRecFisicoDB = '20200518105510'
const dtRecFisicoAux = moment(dtRecFisicoDB, 'YYYYMMDDHHmmss').toDate()
const dtRecFisico = moment(dtRecFisicoAux).format('DD/MM/YYYY HH:mm:ss')

console.log('dtRecFisico:', dtRecFisico)