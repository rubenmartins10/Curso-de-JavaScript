/* var saudar = "Olá, o meu nome e:";
var nome = "David";
var idade = 22;

var mensagem = saudar + nome + " e tenho " + idade + " anos."; //concatenando as variáveis para criar uma mensagem completa
*/

//agora em vez de concatenar literais, vamos somar numerais 
/*
var nome = "David";
var data = 2004;
var idade = 2026 - data; //calculando a idade subtraindo o ano de nascimento do ano atual
*/


//chamamos document para acessar o HTML e usamos querySelector para manipular os elementos necessários
function ColetaDados() {
    var nome = document.querySelector("#nome").value;
    var data = document.querySelector("#data").value;
    //símbolo # é usado para selecionar um elemento pelo seu id, neste caso, o input com id "nome"
    var idade = 2026 - data; //calculando a idade subtraindo o ano de nascimento do ano atual

    console.log("olá " + nome + ", você tem " + idade + " anos."); //exibindo a mensagem personalizada no console, utilizando as variáveis nome e idade
    //objetivo é calcular estes valores automaticamente sem que estejam visíveis para o usuário 
}

ColetaDados(); //chamando a função para executar o código e coletar os dados do usuário, calcular a idade e exibir a mensagem personalizada no console