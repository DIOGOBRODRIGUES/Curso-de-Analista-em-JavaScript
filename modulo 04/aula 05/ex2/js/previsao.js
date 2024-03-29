const frm = document.querySelector("form"); //obtem elemento form

const resp = document.querySelector("pre"); //obtem elemento pre tag de texto pré formatado


frm.addEventListener("submit",  (e) => { //escuta evento submit do form
    e.preventDefault(); //cancela evento submit do form
    
    let numero = Number(frm.numero.value); //obtem valor do campo numero
    const anos = Number(frm.anos.value); //obtem valor do campo numero

    let resposta = "" //varivel do tipo string para concatenar com a resposta 
    //criar um lacço de repetição para gerar a tabuada
    if(numero >= 2){
        for(let i = 1; i <= anos; i++){
            resposta += `${i}° Ano: ${numero} Chinchilas \n`; //concatena a resposta
            numero = numero*3;
        }
        resp.innerText = resposta; //atribui a resposta ao elemento pre
        frm.numero.value =''
        frm.anos.value =''
        }else{
            alert("Inisira um número maior que 2")
            frm.numero.value =''
            frm.anos.value =''
        }
}
);