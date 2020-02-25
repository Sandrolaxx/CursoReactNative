//Desestruturando, serve para pegarmos algum elemento dentro de algo, array, objeto...etc 
//Para desestrurar objetos usamos o {} e para desestruturar arrays []
//Caso desestruture e peça o retorno um elemento que não existe, ele retornara undefined

const pessoa = {
    nome: "Sandrolax",
    idade: 21,
    endereco:{
        casa: "Rua elias abraão",
        numero:91
    }
}

//Para desestruturar o objeto pessoa e pegar somente nome e idade
var  { nome, idade} = pessoa;//para colocar os valores em variaves com outros nomes seria assim nomes: n1, idade: i1
var  {endereco: {casa: rua}} = pessoa;//casa: rua, jogamos o valor de casa na variavel rua
console.log("Desestruturando o obj pessoa e retornando somente o nome: " + nome);
console.log("Desestruturando o obj pessoa e desestruruando o elemento endereco e retornando somente a rua: " + rua);