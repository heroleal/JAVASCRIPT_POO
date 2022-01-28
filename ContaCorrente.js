export class ContaCorrente {
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