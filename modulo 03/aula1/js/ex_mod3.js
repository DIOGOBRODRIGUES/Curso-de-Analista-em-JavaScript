const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


//criar um ouvinte de evento

frm.addEventListener("submit", (e)=>{
    e.preventDefault() //evita o envio do form.
    const nome= frm.inNome.value
    const nota1 = Number( frm.inNota1.value)
    const nota2 = Number( frm.inNota2.value)
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das notas ${media.toFixed(2)}`


    if(media >= 7){
        resp2.innerText = `Parabéns  ${nome} você foi aprovado(a)`
        resp2.style.color = "blue"
    }else{
        resp2.innerText = `Ops  ${nome} você foi reprovado(a)`
        resp2.style.color = "red"
    }
})