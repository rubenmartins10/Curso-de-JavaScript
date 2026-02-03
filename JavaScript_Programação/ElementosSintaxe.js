
var saudar = "Hola";
var mensagem = saudar;
var ativo = true;

function mensagem() {
    var saudar = "Olá Mundo!";
    var antisaudacao =" Adeus Mundo!";
    var contente = true;

    if (contente === true) { //=== significa "igual a"
        console.log(saudar);
    } else {
        console.log(antisaudacao);
    }
    

} 

mensagem(); //primeiro executamos a função depois é que a chamamos
console.log(mensagem);


var nomes = ["David", "Rúben", "Carlos"];
function mensagem2() {
    console.log("Olá, " + nomes);
}

nomes.forEach(function(valor)) { //coletamos o valor individual em cada iteração do forEach
    mensagem2(valor);
};
/* neste caso, o forEach está iterando 
sobre cada elemento do array "nomes" e chamando 
a função mensagem2 para cada nome individualmente.
 A variável "valor" representa o nome atual
  em cada iteração. */


//criar um objeto
var carro =  {
    marca : "Ford",
    motor : "V8",
    acelarar: function () {
        console.log("VRUUUMMMM!!!");
    }
};

carro.marca;

//Acessar o DOM
var cabecalho = document.querySelector("h1"); //pesquisaremos pela tag h1

console.log(cabecalho); //depois disto até o poderíamos manipular
cabecalho.textContent = "Olá Mundo!"; //alterar o texto do h1

//eventos e listerners

function mudarCor() {
    this.classList.toggle("mudar");
}

document.querySelector("body").addEventListener("clique", mudaCor);
//adiciona um listener ao body que chama a função mudarCor quando ocorre um clique