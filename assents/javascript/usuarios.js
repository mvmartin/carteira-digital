const listaOperacoes = document.querySelector('.operacoes');
const nomeAtivo = document.querySelector('.nomes');
const nomeUsuario = document.querySelector('.span-name');
const fotoCliente = document.querySelector('.imagem-cliente');

const saldoCorrente = document.querySelector('.saldo-CC');
const saldoPoupanca = document.querySelector('.saldo-CP')

nomeAtivo.addEventListener('change', (event)=>{
    
    event.preventDefault()

    nomeUsuario.innerHTML = nomeAtivo.value;

    fotoCliente.src='./assents/img/'+nomeAtivo.value+'.jpg';

    
}) //Alterar Imagem e Nome do Usuário.

const infoUsuario = document.querySelector('.relatorios');

const sectionUsuario = document.querySelector('.informacoes-usuario');

const imagemUsuario = document.querySelector('.imagem-usuario');
const nomeCliente = document.querySelector('.usuario-nome');
const cpfCliente = document.querySelector('.cpf-numero');
const agenciaCliente = document.querySelector('.agencia-numero');
const contaCliente = document.querySelector('.conta-numero');

const endereco = document.querySelector('.endereco-nome');
const bairro = document.querySelector('.bairro-nome');
const cidade = document.querySelector('.cidade-nome');

const cabecalho = document.querySelector('.cabecalho');
const usuarios = document.querySelector('.usuarios');
const overview = document.querySelector('.overview');
const transacoes = document.querySelector('.transacoes');

const voltarBtn = document.querySelector('.voltar')

infoUsuario.addEventListener('click', ()=>{

    cabecalho.style.display = 'none'
    usuarios.style.display = 'none'
    overview.style.display = 'none'
    transacoes.style.display = 'none'

    sectionUsuario.style.display = 'flex'

    if(nomeUsuario.textContent == 'Marcos'){
        
        imagemUsuario.src='./assents/img/Marcos.jpg'
        nomeCliente.innerHTML = conta1.nome;
        cpfCliente.innerHTML = conta1.cpf;
        contaCliente.innerHTML = conta1.conta;
        agenciaCliente.innerHTML = conta1.agencia;
        endereco.innerHTML = 'Rua 20, Lote 15';
        bairro.innerHTML = 'Campo Grande';
        cidade.innerHTML = 'Rio de Janeiro';
    }

    if(nomeUsuario.textContent == 'Antonio'){
        
        imagemUsuario.src='./assents/img/Antonio.jpg'
        nomeCliente.innerHTML = conta2.nome;
        cpfCliente.innerHTML = conta2.cpf;
        contaCliente.innerHTML = conta2.conta;
        agenciaCliente.innerHTML = conta2.agencia;
        endereco.innerHTML = 'Rua Paulo Sérgio, 15.';
        bairro.innerHTML = 'Centro';
        cidade.innerHTML = 'Rio de Janeiro';
    }

    if(nomeUsuario.textContent == 'Lucas'){
        
        imagemUsuario.src='./assents/img/Lucas.jpg'
        nomeCliente.innerHTML = conta3.nome;
        cpfCliente.innerHTML = conta3.cpf;
        contaCliente.innerHTML = conta3.conta;
        agenciaCliente.innerHTML = conta3.agencia;
        endereco.innerHTML = 'Av. Atlântica, 00';
        bairro.innerHTML = 'Copacabana';
        cidade.innerHTML = 'Rio de Janeiro';
    }

})

function voltarPage(){

    cabecalho.style.display = ''
    usuarios.style.display = ''
    overview.style.display = ''
    transacoes.style.display = ''

    sectionUsuario.style.display = 'none'

}