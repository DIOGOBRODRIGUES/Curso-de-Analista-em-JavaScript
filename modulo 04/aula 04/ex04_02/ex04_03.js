const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$:"))
const num = Number(prompt("Nº de Parcelas: "))
const valorParcelas = Math.floor(valor/num)// calula parcelas sem as casas decimais 
const valorFinal = valorParcelas +(valor%num)
for(let i = 1; i<num; i++){
    console.log(`${i}ª pacela: R$ ${valorParcelas.toFixed(2)}`)
}

console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)

//exemplo de entrada para teste
// valor R$:91.50
// Nº de Parcelas: 3
// 1ª pacela: R$ 30.00
// 2ª pacela: R$ 30.00
// 3ª parcela: R$ 31.50