const cron = require("node-cron");
const express = require("express");
const axios = require("axios")

app = express();


cron.schedule("* * * * *", () => {
    console.log("Buscando resultados pendentes...")
    axios.get('http://localhost:3000/resultados-pendentes/totalizador')
    .then(function (response) {
        console.log(JSON.stringify(response.data.resultadosPendentes))
    })
    .catch(function (error) {
        console.log(error);
    })

})

app.listen(1313);