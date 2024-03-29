const frm = document.querySelector("form"); //obtem elemento form

const resp = document.querySelector("pre"); //obtem elemento pre tag de texto pré formatado


frm.addEventListener("submit",  (e) => { //escuta evento submit do form
    e.preventDefault(); //cancela evento submit do form
    const fruta = frm.fruta.value
    const numero = Number(frm.numero.value); //obtem valor do campo numero
    let resposta = "" //varivel do tipo string para concatenar com a resposta 
    //criar um lacço de repetição para gerar a tabuada
    for(let i = 1; i <= numero; i++){
        resposta += `${fruta}`; //concatena a resposta
        if(i<numero)
        resposta+='*'
    }
    resp.innerText = resposta; //atribui a resposta ao elemento pre
}
);