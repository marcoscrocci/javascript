const tempo = {
    id: 2,
    periodo: "3 Meses",
    anos: 0,
    meses: 3,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
}
const fidelidade = {
    id: 3,
    descricao: "1 Ano",
    anos: 1,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
}

const valor = 300

const tempo_meses = tempo.anos * 12 + tempo.meses
const fidelidade_meses = fidelidade.anos * 12 + fidelidade.meses
const parcelas = fidelidade_meses / tempo_meses
const valor_plano = valor * parcelas
const valor_parcela = valor_plano / parcelas

console.log('tempo_meses = ' + tempo_meses)
console.log('fidelidade_meses = ' + fidelidade_meses)
console.log('parcelas = ' + parcelas)
console.log('valor_plano = ' + valor_plano)
console.log('valor_parcela = ' + valor_parcela)


