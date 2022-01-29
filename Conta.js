
/*serve pra gente extender ela para  e ter as propriedades, compotamentos
que são compartilhados entre as varias outras especializações de contas que se tem */
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
         /*propriedade sempre privadas, se precisasr abrie ela pra alguem de fora da classe usar acessor*/
    }

    
    /*atribuir valor ao cliente*/
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
           this._cliente = novoValor; 
        }
    }

    get cliente(){
        return this._cliente;
    }

    /*acessor sempre publico*/
    get saldo() 
    {
        return this._saldo;
    }

    sacar (valor){
       
        let taxa = 1
        return this._sacar(valor,taxa);
        
        
    } 

    _sacar(valor, taxa){

        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
        this._saldo -= valorSacado;
        return valorSacado;
    
        }
        
        return 0

    }

    depositar(valor){ 

        this._saldo += valor

        }

        transferir (valor, conta){
            const valorSacado = this.sacar(valor)
            conta.depositar(valorSacado)
        }
}