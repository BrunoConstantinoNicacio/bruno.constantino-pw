var subtotal = document.querySelector(".subtotal");

function adicionar(botao) {
    var trtable = botao.parentNode.parentNode.parentNode;
    var valor = trtable.querySelector(".valor");
    var total = trtable.querySelector(".total");
    var qntd = trtable.querySelector(".qntd");
    var botaomenos = trtable.querySelector(".botaoretirar");

    qntd.innerHTML = (Number(qntd.innerHTML || 0)) + 1;
    total.innerHTML = (Number(total.innerHTML)) + (Number(valor.innerHTML));
    subtotal.innerHTML = (Number(subtotal.innerHTML)) + (Number(valor.innerHTML));
    
    if (qntd.innerHTML > 0) {
        botaomenos.classList.remove("inativo");
    }
}

function retirar(botao) {
    var trtable = botao.parentNode.parentNode.parentNode;
    var valor = trtable.querySelector(".valor");
    var total = trtable.querySelector(".total");
    var qntd = trtable.querySelector(".qntd");
    var botaomenos = trtable.querySelector(".botaoretirar");

    if (total.innerHTML > 0) {
        qntd.innerHTML = (Number(qntd.innerHTML || 0)) - 1;
        total.innerHTML = (Number(total.innerHTML || 0)) - (Number(valor.innerHTML));   
        subtotal.innerHTML = (Number(subtotal.innerHTML)) - (Number(valor.innerHTML));
    }
    if (qntd.innerHTML <= 0) {
        botaomenos.classList.add("inativo");
    }
}


