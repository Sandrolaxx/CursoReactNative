//Marcador da pagina
var novoa = document.getElementById("marcador");
novoa.innerHTML= "-------------------------------------------------------------------------------------------------------------------------------------------------------------------";
//Marcador da pagina
document.getElementById("titulo").innerHTML="Var, Let e Const";
document.getElementById("conteudo").innerHTML="A diferença entre var e let é simples:  <br/>" + "<b>Var</b>: A variavel pode ser criada e não iniciada, e seu escopo é global não importa aonde for utilizada" +
"<br/> <b>Let</b>: A variavel temm o escopo de bloco, se for declarada em um for, ela terá o escopo do for, e não pode ser criada sem iniciar ela <br/>" +
"<b>Const</b>: Como o nome já diz, algo criado com const será uma constante e em todo o sistema sempre terá o mesmo valor inicial"+
"<br/> Para visualizar variaves com var, let e const acesse o console.log";

var num1 = 1;
let num2 = 2;
const num3 = 3;

console.log("Numero utilizando var: " + num1);
console.log("Numero utilizando let: " + num2);
console.log("Numero utilizando const: " + num3);


 


