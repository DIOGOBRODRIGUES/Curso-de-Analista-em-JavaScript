const frn = document.querySelector("form")
const resp = document.querySelector("h3")

frn.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frn.inNome.value
    const masculino = frn.inMasculino.checked
    //const feminino = frn.inFeminio.checked
    const altura  = Number(frn.inAltura.value)

    let peso 

    if(masculino){
        peso = 22* Math.pow(altura,2)
    }else{
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal  é ${peso.toFixed(3)} kg`
})

frn.addEventListener("reset", ()=>{
    resp.innerText = " "
})