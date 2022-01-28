/*molde*/class Cliente {

    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    /*privado */
    _saldo = 0;

    sacar (valor){
        if (this._saldo >= valor){
        this._saldo -= valor;
        return valor;

        } else {
        
            console.log("Saldo insuficiente")
        }
    } 

    depositar(valor){
        if (valor <= 0 ) {

            return;

        }

        this._saldo += valor

        }
    }


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 111222233390;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233390;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 101;

contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 

const valorSacado = contaCorrenteRicardo.sacar(50);
/*instãncoa*/ 
console.log(valorSacado)
console.log(contaCorrenteRicardo)