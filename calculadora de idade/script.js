var fm = document.getElementsByTagName('form')[0];
var menssagem = document.getElementById('old');
fm.addEventListener("submit", function(event){
    event.preventDefault();


    var anoNas = document.getElementById('anox').value;
    const dataAtual = new Date();
    const anoAtual = dataAtual. getFullYear();

    var idade = (anoAtual - anoNas);
 
    menssagem.textContent = idade + ' Anos';

});