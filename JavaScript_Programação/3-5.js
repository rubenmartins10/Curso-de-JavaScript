function ColetaDados(evento) {
    evento.preventDefault(); 
    
    var nome = document.querySelector("#nome").value;
    var data = document.querySelector("#data").value;
    var idade = 2026 - data; 


    var boasvindas = document.querySelector("#boasvindas");
    var mensagemIdade;
    var mensagem;  

    if (idade > 30) {
        mensagemIdade = 'Avô'; //criamos um condicional e uma alternativa com a variável else
    } else if ( idade < 30){
        mensagemIdade = 'Jovem';
    } else {
        mensagemIdade = "Não me acredito";
    }

    var mensagem = "<p>olá " + nome + ", você tem " + idade + " anos, " + mensagemIdade + ".</p>";  //podemos colocar na vertical também

    boasvindas.innerHTML = mensagem; 
}

var myForm = document.querySelector("#formulario");

myForm.addEventListener("submit", ColetaDados);