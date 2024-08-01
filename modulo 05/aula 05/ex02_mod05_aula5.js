const prompt =require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada ou 'fim' no nome para sair")
const clientes =[]

do{
    const nome = prompt("Nome: ")
    if(nome == "fim")
        break
    const idade = Number(prompt("Idade:"))
    clientes.push({nome, idade})
    console.log("ok!, cliente inserido na fila...")
}while(true)

console.log("\n fila preferencial")
console.log(".".repeat(40))

const filaPref = clientes.filter(cliente=>cliente.idade >=60)

filaPref.forEach((fila, i)=>{
    console.log(`${i+1}.${fila.nome}`)
})

console.log("\n fila normal")
console.log(".".repeat(40))
const filaNormal = clientes.filter(cliente=>cliente.idade < 60)
filaNormal.forEach((fila, i)=>{
    console.log(`${i+1}. ${fila.nome}`)
})