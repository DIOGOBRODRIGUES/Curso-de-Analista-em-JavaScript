const prompt = require("prompt-sync")()
console.log("Informe o valor dos saque ou 0 para sair")
const saques= []

do{
    const valor = Number(prompt("Saque R$: "))
    if(valor == 0)
        break
    saques.push(valor)
    if(valor%10 == 0){
        console.log("saque Realizado com sucesso")
    }else{
        console.log("Erro... valor inválido (deve ser múltiplo de 10")
    }
}while(true)

console.log("\n saques validos")
console.log(".".repeat(40))

const saquesValidos = saques.filter(saque => saque%10 == 0)
for (const saque of saquesValidos){
    console.log(saque.toFixed(2))
}

console.log(".".repeat(40))
const totalSacado = saquesValidos.reduce((total, saque)=>total +saque, 0)
console.log(`Total dos saques: R$ ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\n N° de Tentaticas de saque (saques invalidos): ${saquesInvalidos}`)