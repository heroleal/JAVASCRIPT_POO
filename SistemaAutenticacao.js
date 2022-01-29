/*
Ser autenticavel significa ter o metodo autenticado
*/ 

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
          return autenticavel.autentificar(senha);
        }
        return false;
    }

        
static ehAutenticavel(autenticavel){

    return "autentificar" in autenticavel &&
    autenticavel.autentificar instanceof Function; /* a instância de uma função */
    /*verifica se essa chave existe dentro desse objeto*/

}
}

/*se esse metodo existi na classe autencicavel, que pode se qualquer uma 
        que tenha esse metodo, retorna-se verdadeiro ou falso */
