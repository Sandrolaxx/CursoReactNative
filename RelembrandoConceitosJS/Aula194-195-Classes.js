//Classes em JS são nada menos que funções
//Exemplos de Classes em JS
class Lancamentos{
    constructor(nome="generico", valor = 0) {
        this.nome=nome;
        this.valor=valor;
    }
}

class CicloFinanceiro{
    constructor(mes, ano){//Construtor da classe
        this.mes=mes;
        this.ano=ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {//Funções da Classe
        lancamentos.forEach(l => this.lancamentos.push(l))//Isso poderia ser feito com .map
    }

    ValorAtual(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {//Isso poderia ser feito com .map
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

let salario = new Lancamentos("Salario", 2000);//declarando salario como tipo Lancamentos
let contaDeLuz = new Lancamentos("Luz", -110);

const contas = new CicloFinanceiro (2, 2020);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.ValorAtual());


//Exemplos de Herança com JS
//Que na verdade herança em JS por baixo dos panos é prototype de função

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = "Programador"){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super("Ramos");
    }
}

const filho = new Filho;
console.log(filho);//Classe Filho utlizando Herança 