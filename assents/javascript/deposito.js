
const depositoCC = document.querySelector('.deposito-cc');
const form1 = document.querySelector('.formulario-depositar-cc')
const button1 = document.querySelector('.button-conta-corrente');
const inputCC = document.querySelector('.input-conta-corrente')

const depositoCP = document.querySelector('.deposito-cp');
const form2 = document.querySelector('.formulario-depositar-cp')
const button2 = document.querySelector('.button-conta-poupanca');
const inputCP = document.querySelector('.input-conta-poupanca')

depositoCC.addEventListener('click',()=>{
   
   
    form1.style.display='block';
    listaOperacoes.style.display='none'

})

depositoCP.addEventListener('click',()=>{
   
    form2.style.display='block';
    listaOperacoes.style.display='none'
   
})



button1.addEventListener('click', (event)=>{

    event.preventDefault()

    conta1.depositar(inputCC.value*1)
    saldoCorrente.innerHTML = conta1.saldo;
    
    form1.style.display='none';
    listaOperacoes.style.display='block'

    inputCC.value = ''

});



button2.addEventListener('click', (event)=>{
    
    event.preventDefault()

    poupanca1.depositar(inputCP.value*1)
    saldoPoupanca.innerHTML = poupanca1.saldo;

    form2.style.display='none';
    listaOperacoes.style.display='block'

    inputCP.value = ''

})

