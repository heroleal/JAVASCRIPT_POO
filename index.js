import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js"
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

const cliente1 = new Cliente("Ricardo", 11122233309);

/*const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2.cpf)*/

const contaCorrenteRicardo = new ContaCorrente(cliente1,101);
const contaPoupanca = new ContaPoupanca(50, cliente1, 101)
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);







/*const conta2 = new ContaCorrente(102, cliente2);*/

/*
contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 
contaCorrenteRicardo.depositar (100); 

const valorSacado = contaCorrenteRicardo.sacar(50);
instãncoa
console.log(valorSacado)
console.log(conta2)

let valor = 200;
contaCorrenteRicardo.transferir (200, conta2)
console.log(ContaCorrente.numeroDeContas)
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100)
contaPoupanca.sacar(10);


*/

