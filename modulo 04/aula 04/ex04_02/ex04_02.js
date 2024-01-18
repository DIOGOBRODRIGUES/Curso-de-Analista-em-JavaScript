const pronpt = require("prompt-sync")()
const produto = pronpt("Produto: ") // Lê none do produto e .....
const nun = Number (pronpt("N° de Etiquetos: ")) // quantidade de etiquetos
// Crta un laço de repettção ate num/2 pois imprtne 2 ettquetas por Linha
for (let i = 1; i <= nun / 2; i++) (
     console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`) // pand end utilizado para preencher os espacos e ficar com duas linhas por produto
     )
if(nun%2 ==1)(
    console.log(produto)
)