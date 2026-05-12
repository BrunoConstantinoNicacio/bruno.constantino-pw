var idadeInput = document.querySelector("#idadeInput");
var resultado = document.querySelector("#resultado")

function verificar(){
    var idade = parseInt(idadeInput.value); 
    if(isNaN(idade)) {
        resultado.innerHTML="Digite sua idade";
        return;
    }
    if(idade < 18) {
            console.log("Você é menor de idade")
            resultado.innerHTML="Você é menor de idade";
        }
    else {
            console.log("Você é maior de idade")
            resultado.innerHTML="Você é maior de idade";
        }   
}
