//var prompt = require('../lib/prompt');
//prompt.start();
const prompt = require("prompt-sync")({sigint:true})


const num1 = Number(prompt("1° número" ))
const num2 = Number(prompt("2° número" ))

const soma = num1 +num2

console.log(`Soma é: ${soma}`)