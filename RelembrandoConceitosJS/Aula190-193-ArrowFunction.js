let Dobro = function (a) {//Função normal
    return 2 * a;
}

Dobro = (a) =>{
    return 2 * a;//Arrow function com bloco de código
}

Dobro = a => 2 * a;//return implicito, só pode ser utilizado com uma unica linha de código, se tiver mais linhas criar o bloco. 
console.log("Retorno da Arrow Function: " + (Dobro(4)));

/* function PessoaX(){
    this.idadeX = 0;
    setInterval(() =>{//Não a necessidade do bind pois em ArrowFunctions o this é fixo!
        this.idadeX++;
        console.log(this.idadeX);
    }, 1000)
}                                

PessoaX();*/

//Caso você de um bind dentro de uma ArrowFunction a ArrowFunction ira prevalecer e o this continuará o this do ArrowFunction

//Funçoes anônimas, são funções sem nome, para utilizalas temos de atribuir a uma variavel, exemplo abaixo:
let RetornaNome = function () {
    return "Nome que retornou da função anônima: Sandrolax"
}
console.log(RetornaNome());