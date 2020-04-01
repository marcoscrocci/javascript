const exame = {
    status: "BLO"
}

let status = exame.status === "NRT" || exame.status === "LIB" ? "N" : exame.status === "NR" ? " " : "P";

console.log(status)