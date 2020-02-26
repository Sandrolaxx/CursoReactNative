var novo = document.getElementById("marcador2");
novo.innerHTML= "-------------------------------------------------------------------------------------------------------------------------------------------------------------------";
//Marcador da pagina

const pessoa1 = {
    saudacao: 'Bom dia!',
        falar() {
        console.log(this.saudacao)
        }
    }  
    var fala = pessoa1.falar;
    fala();
    
    var falaP = fala.bind(pessoa1);
    falaP();

document.getElementById("titulo2").innerHTML="This pode variar e a função Bind ";
document.getElementById("conteudo2").innerHTML="Em uma função normal o <b>this</b> pode variar, já com ArrowFunction ela tem um comportamento fixo, <br/>"+
"tudo depende do contexto aonde o this está, se for em uma função o this se refere ao contexto da função, se for em um FOR o this </br>"+
"é referente ao FOR, se for em um contexto global o this se refere ao elemento tratado no contexto global.</br></br></br>"+
"O <b>Bind</b> é utilizado para amarar o componente que o this está referenciando, exemplo:<br>"+
                                "const pessoa = {</br>"+
                                "saudacao: 'Bom dia',</br>"+
                                    "falar() {</br>"+
                                    "console.log(this.saudacao)</br>"+
                                    " }</br>"+
                                "};</br>"+
                                "pessoa.falar();                       =>Executando a função ela retorna Bom dia</br>"+
                                "var fala = pessoa.falar();            =>Atribuindo a função a uma variavel     </br>"+
/*Conflito de paradigma> funcional e OO(OrientaçãoObjetos)=>*/"fala(); =>Executando a função ela retorna Undefined, pois o this se perdeu, para resolver isso usamos o bind<br>"+
                                "Para corrigirmos este problema fazemos da seguinte forma:<br>"+
                                "var FalarDePessoa = fala.bind(pessoa);<br>"+
                                "FalarDePessoa();   =>Executando a função ela retorna 'Bom dia'<br><br>"+
                                "Para saber mais sobre <b>ArrowFunction</b> abra o arquivo Aula190-193-ArrowFunction.js lá terá exemplos<br><br>"+
                                "Para saber mais sobre <b>Classes</b> abra o arquivo Aula194-195-Classes.js lá terá mais exemplos";

//Outro exemplo da utilizanção de bind
function PessoaX(){
    this.idadeX = 0;
    setInterval(function(){//Se fosse ArrowFunction não teria a necessidade do bind pois em ArrowFunctions o this é fixo
        this.idadeX++;
        console.log(this.idadeX);
    }.bind(this), 1000)//Se não utilizarmos o .bind(this) o que a funcão retornaria seria NaN(Not a Number)
}                                

//PessoaX();