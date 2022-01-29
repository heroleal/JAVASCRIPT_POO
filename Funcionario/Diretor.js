import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)
        /*Passar isso pra classe, instância superior */

        this._bonificacao = 2;
        
    }
}