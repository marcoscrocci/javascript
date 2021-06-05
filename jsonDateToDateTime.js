const jsonDate = "/Date(1621381824000)/";

const dataHora = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));

console.log(dataHora);


