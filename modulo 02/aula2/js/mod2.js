//cria uma referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3") 

//cria um ouvinte de evento, adiciona quando o botão submit for clicadado

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value   //obtem o nome digitado no form
    const idade = frm.inIdade.value //obtem a idade digitado no form
    const senha = frm.inSenha.value
    resp.innerText = `Olá ${nome}, sua idade é: ${idade} anos` //exibe a resposta do programa

    e.preventDefault()//evita envio do form
})

