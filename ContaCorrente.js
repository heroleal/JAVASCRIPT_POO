
import { Conta } from "./Conta.js";

/*pegar tudo que tem na classe conta vai trabalhar na conta corrente
 como se o codigo estivesse aqui. Hera*/
export class ContaCorrente extends Conta {
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0, cliente, agencia);   
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar (valor){
       
        let taxa = 1.1
        return super._sacar(valor,taxa)
        
    } 
}