const prompt = require("prompt-sync")() //adiciona pacote prompt-sync

const pessoas = Number(prompt("N° Pessoas: ")) //lê dados de entrada

const peixes = Number(prompt("N° Peixes:"))

let pagar

if(peixes <= pessoas){
    pagar = pessoas *20
}else {
    pagar = (pessoas * 20)+((peixes - pessoas)*12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`) //exibe o valor a ser pago
