
class ContaCorrente{

    constructor(cliente, cpf, agencia,conta,){
        this._cliente = cliente;
        this._cpf = cpf;
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = 0;

    }


    sacar(valor){

        this._saldo -= valor;
        return valor;

    }

    depositar(valor){

        this._saldo += valor;
        
    }

    get nome(){

        return this._cliente;
    }

    get cpf(){
        return this._cpf;
    }

    get agencia(){
        return this._agencia
    }
    
    get conta(){
        return this._conta;
    }


    get saldo(){

        return this._saldo;
    }
    
}

class ContaPoupanca{

    constructor(cliente, cpf,agencia,conta) {
        
        this._cliente = cliente;
        this._cpf = cpf;
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = 0;
    }

    sacar(valor){

        this._saldo -= valor;
        return valor;

    }

    depositar(valor){
        this._saldo += valor;
    }


    get saldo(){
        return this._saldo;
       
    }
}


const conta1 = new ContaCorrente('Marcos Martins', '123-456-789-01', '001', '2350-001');
const conta2 = new ContaCorrente('Antonio dos Anjos', '123-456-789-02', '002', '2350-002');
const conta3 = new ContaCorrente('Lucas Silveira', '123-456-789-03', '003', '2350-003');

const poupanca1 = new ContaPoupanca('Marcos','123-456-789-01', '001', '2350-001/500' )
const poupanca2 = new ContaPoupanca('Antonio', '123-456-789-02', '002', '2350-002/500' )
const poupanca3 = new ContaPoupanca('Lucas', '123-456-789-03', '003', '2350-003/500' )









