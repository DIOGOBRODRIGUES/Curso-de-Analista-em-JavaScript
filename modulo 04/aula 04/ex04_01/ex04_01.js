const prompt = require("prompt-sync")()
console.log("Programa anos de Copa do Mundo. Digite 0 para sair")
console.log("--------------------------------------------------")
do{
    const ano = Number(prompt("Ano:"))
    if(ano==0){
        break //sai da repetição
    }else if (ano==1942 || ano ==1946){
        console.log(`Não hou com em ${ano} (Segunda guerra Mundial)`)
    }else if (ano>=1930 && ano %4 ==2){
        console.log(`Sim! ${ano} é um ano de Copa do Mundo!`)
    }else{
        console.log(`Não...${ano} não é um ano de Copa do Mundo.`)
    }
}while(true)