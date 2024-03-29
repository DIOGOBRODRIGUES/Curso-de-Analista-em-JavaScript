const frm = document.querySelector("form"); //obtem elemento form

const resp = document.querySelector("pre"); //obtem elemento pre tag de texto pré formatado


frm.addEventListener("submit",  (e) => { //escuta evento submit do form
    e.preventDefault(); //cancela evento submit do form
    
    let numero = Number(frm.numero.value); //obtem valor do campo numero

    let resposta = `Divisores do ${numero}:` //varivel do tipo string para concatenar com a resposta 
    let perfeito = 0; 
    //criar um lacço de repetição para gerar a tabuada
        for(let i = 1; i <= numero; i++){
            if(numero%i == 0 && i!=28){
                perfeito += i
                resposta+= `${i}, `
            }
        }
        if(perfeito == numero)
           resposta += `(Soma: ${perfeito})\n ${numero} é Um numero Perfeito`
        else
          resposta = `${numero} Não é Um numero Perfeito`

        resp.innerText = resposta; //atribui a resposta ao elemento pre

}
);