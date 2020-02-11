/** Exemplo de Map */
// Declaramos um array com os códigos de amostras
const listaAmostras = 
    ['305720000312'
    ,'305720000468'
    ,'305720000469'
    ,'305720000470'
    ,'305720000471'
    ,'305720000472']

// Supor que vamos colocar estes códigos em um where campo in (amostras):
let where = " where R.filler_order_number in (:amostras) ";
// Converter um array para uma string, já vem as vígulas automaticamente, 
// mas precisamos envolver os códigos das amostras entre aspas simples,
// então mapeamos cada código sem as aspas com as aspas. A barra permite
// colocar uma aspa dentro de aspas.
//const listaAmostrasStr = listaAmostras.map((id)=> '\'' + id +'\'');
const listaAmostrasStr = listaAmostras.map((id)=> "'" + id +"'");
// Trocamos uma string chave pelo conteúdo gerado.
where = where.replace(":amostras", `${listaAmostras}`);
// Mostramos os valores das variáveis no console.
console.log('listaAmostras = ' + listaAmostras);
console.log('where = ' + listaAmostrasStr);
console.log('where = ' + where);
