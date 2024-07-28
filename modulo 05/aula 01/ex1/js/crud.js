const frm = document.querySelector("form") //obtem elementos da p�gina
const respon  = document.querySelector("span")
const repLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault() //evita o envio do form
    const nome = frm.inPaciente.value
    pacientes.push(nome); //adiciona o nome no final do vetor
    let lista = ""

    for(let i = 0;  i < pacientes.length;  i++){
        lista += `${i + 1}.${pacientes[i]}\n`
    }

    repLista.innerText = lista // exibi lista de pacientes na p�gina
    frm.inPaciente.value = "" //limpa conte�do do formul�rio
    frm.inPaciente.focus() //posiciona o cursor no campo 

})

//adiciona um ouvinte para o but�o urgencia que est� no form

 frm.btUrgencia.addEventListener("click", ()=>{
    //verifica se as valida��es est�o ok (no caso,  paciente isrequired)
    if(!frm.checkValidity()){
        alert("informe o nome do paciente a ser atendido em ")
        frm.inPaciente.focus()//posiciona o cursor no campo inPaciente
        return// retorna ao form  
    }
    const nome = frm.inPaciente.value //obtem o nome do paciente
    pacientes.unshift(nome) // adiciona o paciente no inicio do vetor
    let lista  = "" //string para concatenar  pacientes
    //forEach aplicado sobre o array paciente 
    pacientes.forEach((paciente, i ) => (lista += `${i+1}.${paciente}\n`))
    repLista.innerText = lista //exibe lista de paciente na p�gina.  
    frm.inPaciente.value = "" //limpa o conteudo do campo do formul�rio
    frm.inPaciente.focus () //posiciona o cursor no campo
 })

 //adiciona um ouvinte para o but�o de atender 

 frm.btAtender.addEventListener("click", ()=>{
    //se o tamanho do vetor = 0 
    if(pacientes.length = 0){
        alert("N�o a paciente na fila de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()// remove do inicio da fila e obtem o nome
    respNome.innerText = atender //exibe o nome do paciente em atendimento 
    let lista = " " //string para contatenar o paciente
    pacientes.forEach((paciente, i) => (lista += `${i+1}.${paciente}\n`))
    repLista.innerText = lista // exibe a lista de pacientes na tela 

 })