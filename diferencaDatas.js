const moment = require('moment')

const anosEntreDatas = function(dataAntiga, dataRecente) {
    var anoRecente = dataRecente.getFullYear();
    var mesRecente = dataRecente.getMonth();
    var diaRecente = dataRecente.getDate();
    var anoAntigo = dataAntiga.getFullYear();
    var mesAntigo = dataAntiga.getMonth();
    var diaAntigo = dataAntiga.getDate();
    var diferenca = anoRecente - anoAntigo;
    if (mesAntigo > mesRecente) diferenca--;
    else {
        if (mesAntigo == mesRecente) {
            if (diaAntigo > diaRecente) diferenca--;
        }
    }
    return diferenca;
}

var dataAntiga = moment('1977-09-06 00:00:00').toDate()
var dataRecente = new Date()

console.log('Anos:', anosEntreDatas(dataAntiga, dataRecente))