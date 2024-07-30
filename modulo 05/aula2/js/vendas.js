const  frm = document.querySelector("form")
const resp =  document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})


frm.btListar.addEventListener("click", ()=>{
    if (carros.length == 0){
        alert("Não há carros na lista")
        return 
    }
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$:" + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos carros cadastrados \n ${".".repeat(40)} \n ${lista}`
})


frm.btFiltrar.addEventListener("click", ()=>{
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

    if(maximo == 0 || isNaN(maximo)){
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if(carros.filter.length == 0){
        alert ("Não há carros com preço inferior ou igual ao solicitado")
        return
    }

    let lista = ""
    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n` 
    }
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n ${".".repeat(40)}\n ${lista}`
})