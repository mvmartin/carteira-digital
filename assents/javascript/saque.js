
const saqueCC = document.querySelector('.saque-cc');
const form3 = document.querySelector('.formulario-sacar-cc')
const button3 = document.querySelector('.button-sacar-cc');
const inputSaqueCorrente = document.querySelector('.input-scacar-cc');

const saqueCP = document.querySelector('.saque-cp');
const form4 = document.querySelector('.formulario-sacar-cp')
const button4 = document.querySelector('.button-sacar-cp');
const inputSaquePoupanca = document.querySelector('.input-scacar-cp');


saqueCC.addEventListener('click',()=>{

    form3.style.display='block';
    listaOperacoes.style.display='none'
})

saqueCP.addEventListener('click',()=>{
    
    form4.style.display='block';
    listaOperacoes.style.display='none'
})



button3.addEventListener('click', (event)=>{
    
    event.preventDefault()

    conta1.sacar(inputSaqueCorrente.value*1);
    saldoCorrente.innerHTML = conta1.saldo;

    form3.style.display='none';
    listaOperacoes.style.display='block';

    inputSaqueCorrente.value = '';
})



button4.addEventListener('click', (event)=>{
    
    event.preventDefault()

    poupanca1.sacar(inputSaquePoupanca.value*1);
    saldoPoupanca.innerHTML = poupanca1.saldo;

    form4.style.display='none';
    listaOperacoes.style.display='block'

    inputSaquePoupanca.value = '';
})
