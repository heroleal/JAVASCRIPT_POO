/*Classe abstrata = só pode ser herdada*/


/*serve pra gente extender ela para  e ter as propriedades, compotamentos
que são compartilhados entre as varias outras especializações de contas que se tem */
export class Conta {
    constructor(saldoInicial, cliente, agencia){

        if (this.constructor == Conta){
            /* o construtor que foi inicialmente chamado é ac conta
            então ele só vai se chamado nessa ultima instâcia */
            throw new Error("Você não deveria instaciar um objeto do tipo conta,pois é uma conta abstrata")
            /*lançando um erro*/
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        /* console.log(this.constructor)*/

       
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
    /*metodo abstratato */
    sacar (valor){
       throw new Error("O metoso sacar é abstrato")
        
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