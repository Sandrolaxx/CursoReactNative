var novo = document.getElementById("marcador1");
novo.innerHTML= "-------------------------------------------------------------------------------------------------------------------------------------------------------------------";
//Marcador da pagina

document.getElementById("titulo1").innerHTML="Chave/valor";
document.getElementById("conteudo1").innerHTML="Tudo depende do contexto léxico da variavel, e objetos são grupos aninhados de pares chave/valor<br/>"+
"Exemplos no console.log";

//par nome/valor
const saudacao = "Contexto CRISTIAN"; // Contexto léxico 1

function exec() {
    const saudacao = "Contexto léxico 2"  //Contexto léxico 2
    return saudacao;
}

const saudacao1 = "Com const"; 

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 60,
    endereco: {
        logradouros: "Rue elias abraão",
        numero: 123
    }

}

console.log(saudacao);
console.log(exec());
console.log("Contexto léxico 3 " + cliente);