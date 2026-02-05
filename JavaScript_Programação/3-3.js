function ColetaDados(evento) {
    console.log(evento); //mostra no console o evento que ocorreu
    evento.preventDefault(); //impede o comportamento padrão do formulário, que é recarregar a página ao ser submetido.
    
    var nome = document.querySelector("#nome").value;
    var data = document.querySelector("#data").value;
    var idade = 2026 - data; 

    console.log("olá " + nome + ", você tem " + idade + " anos."); 
}

function saudar () {
    console.log("Olá, seja bem-vindo!");
}

var myForm = document.querySelector("#formulario"); //seleciona o formulário e armazena na variável MyForm
//ao estar carregada na variável, posso referir-me diretamente a ela, e isso deixa o código mais claro

//selecionar o evento ao qual aplicaremos o Event Listener
myForm.addEventListener("click", function() {
    console.log("Teste");
}); //neste caso adicionamos o evento de click ao formulário, ou seja, quando clicarmos no formulário, a função saudar será executada.
//não coloco os parenteses na função, pois não quero que ela seja executada imediatamente, mas sim quando o evento ocorrer.