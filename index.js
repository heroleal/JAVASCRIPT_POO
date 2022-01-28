import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

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