var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var n3 = document.querySelector("#n3");
var resultado = document.querySelector('#resultado');
var resultado2 = document.querySelector("#resultado2");

function somar(){
    resultado.innerHTML = "O resultado é  " + (Number(n1.value) + Number(n2.value));
}
function subtrair(){
    resultado.innerHTML = "O resultado é  " + (Number(n1.value) - Number(n2.value));
}
function multiplicar(){
    resultado.innerHTML = "O resultado é  " + Number(n1.value) * Number(n2.value);

}
function dividir(){
    if(Number(n2.value)==0){
        resultado.innerHTML='Erro: Divisão por zero';
    }
    else{
        resultado.innerHTML = "O resultado é  " + Number(n1.value)/ Number(n2.value);
    }
}
function triangulo(){ 
    resultado.innerHTML = "O resultado é  " + ((Number(n1.value) * Number(n2.value)) / 2)
}
function quadrado(){
    resultado.innerHTML = "O resultado é  " + Number(n1.value) * Number(n2.value);
}
function dez(){
    resultado2.innerHTML = "O resultado é  " + (Number(n3.value) * 0.9);
}
function lucro(){
    resultado2.innerHTML = "O resultado é  " + (Number(n3.value) * 1.15)
}
function desconto(){
    resultado2.innerHTML = "O resultado é  " + (Number(n3.value) * 0.97)
}
function se(){
    if (Number(n3.value) < 200){
        resultado2.innerHTML = "Boa compra!"
    }
    if (Number(n3.value) > 1000){
        resultado2.innerHTML = "O resultado com 7% de desconto é " + (Number(n3.value) * 0.93)
    }
    if (Number(n3.value) <= 500 && (Number(n3.value)) >= 200){
        resultado2.innerHTML = "O resultado com 5% de lucro é  " + (Number(n3.value) * 1.05)
    }
}
