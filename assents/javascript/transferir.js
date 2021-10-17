
const transferirCC = document.querySelector('.transferir-cc');
const form5 = document.querySelector('.formulario-transferir-cc')
const button5 = document.querySelector('.button-transferir-cc');
const inputTransferirCC = document.querySelector('.input-transferir-cc')

const transferirCP = document.querySelector('.transferir-cp');
const form6 = document.querySelector('.formulario-transferir-cp')
const button6 = document.querySelector('.button-transferir-cp');
const inputTransferirCP = document.querySelector('.input-transferir-cp')

transferirCC.addEventListener('click',()=>{

    form5.style.display='block';
    listaOperacoes.style.display='none'

})

transferirCP.addEventListener('click',()=>{
   
    form6.style.display='block';
    listaOperacoes.style.display='none'
   
})


button5.addEventListener('click', (event)=>{
    
    event.preventDefault()


    conta1.sacar(inputTransferirCC.value*1);
    saldoCorrente.innerHTML = conta1.saldo;
   
    poupanca1.depositar(inputTransferirCC.value*1)
    saldoPoupanca.innerHTML = poupanca1.saldo;

    form5.style.display='none';
    listaOperacoes.style.display='block'
    
    inputTransferirCC.value = ''
})



button6.addEventListener('click', (event)=>{
    
    event.preventDefault()

    conta1.depositar(inputTransferirCP.value*1);
    saldoCorrente.innerHTML = conta1.saldo;
   
    poupanca1.sacar(inputTransferirCP.value*1)
    saldoPoupanca.innerHTML = poupanca1.saldo;


    form6.style.display='none';
    listaOperacoes.style.display='block'

    inputTransferirCP.value = ''

})