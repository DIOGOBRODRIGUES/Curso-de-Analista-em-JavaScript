const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const numero = Number(frm.numero.value);
    let resposta=`Entre ${numero} e 1: ${numero}`; //String pra montar
    for(let i=numero; i>=1; i--){
        resposta+=`, ${i} `;
    }
    resp.innerText =resposta;
})