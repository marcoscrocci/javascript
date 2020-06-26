const arr = ['Item 1', 'Item 2', 'Item 3'];
const str = arr.toString();

const objectJson = {
    "cdRemessa": 8,
    "Amostras": [
      {
        "cdAmostra": "B306220007358",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007359",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007363",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007367",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007378",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007556",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007668",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007669",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007670",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007671",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007674",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007675",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007676",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007677",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007678",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007679",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007680",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007681",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007682",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007683",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007684",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007685",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007686",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007690",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007691",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007692",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007693",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007696",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007714",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007726",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007729",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007730",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007732",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007812",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007813",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007815",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007817",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007818",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007819",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007821",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007822",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007824",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007825",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007826",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007574",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007672",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007723",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007727",
        "flagAmostra": "09"
      },
      {
        "cdAmostra": "B306220007814",
        "flagAmostra": "09"
      }
    ]
  }

console.log('Mostra o array do jeito que ele é:');
console.log(arr);
console.log('Mostra o array convertido para string pela função toString()');
console.log(str);
console.log('Outra forma de converter é concatenando a uma string');
console.log('' + arr);

let amostras = ''
if (objectJson.Amostras && objectJson.Amostras.length > 0) {
    const listaAmostras = []
    objectJson.Amostras.forEach(amostra => {
        listaAmostras.push(amostra.cdAmostra)
    });
    amostras = '' + listaAmostras
}

console.log(amostras)