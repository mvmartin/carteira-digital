
const tfOutroBancoCC = document.querySelector('.transferir-cc-outro');
const form7 = document.querySelector('.formulario-cc-conta')
const button7 = document.querySelector('.button-outra-cc');

const tfOutroBancoCP = document.querySelector('.transferir-cp-outro');
const form8 = document.querySelector('.formulario-cp-conta')
const button8 = document.querySelector('.button-outra-cp');

tfOutroBancoCC.addEventListener('click',()=>{
   

    form7.style.display='block';
    listaOperacoes.style.display='none'
   

})

tfOutroBancoCP.addEventListener('click',()=>{
   

    form8.style.display='block';
    listaOperacoes.style.display='none'
   

})



button7.addEventListener('click', ()=>{
    
    form7.style.display='none';
    listaOperacoes.style.display='block'
    

})



button8.addEventListener('click', ()=>{
    
    form8.style.display='none';
    listaOperacoes.style.display='block'
    

})