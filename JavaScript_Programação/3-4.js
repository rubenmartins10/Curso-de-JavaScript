function ColetaDados(evento) {
    console.log(evento);
    evento.preventDefault(); 
    
    var nome = document.querySelector("#nome").value;
    var data = document.querySelector("#data").value;
    var idade = 2026 - data; 
    var boasvindas = document.querySelector("#boasvindas");
    var mensagem = "<p>olá " + nome + ", você tem " + idade + " anos.</p>";  //mensagem dentro de uma tag de parágrafo

    boasvindas.innerHTML = mensagem; 
    //textContent: este método permite manipular o conteúdo de um elemento HTML, neste caso, a div com id "boasvindas", para exibir uma mensagem personalizada com o nome e a idade do usuário.
}

function saudar () {
    console.log("Olá, seja bem-vindo!");
}

var myForm = document.querySelector("#formulario");

myForm.addEventListener("submit", ColetaDados);