function adicionar(botao) {
    var trtable = botao.parentNode.parentNode;
    var valor = trtable.querySelector(".valor");
    var total = trtable.querySelector(".total");
    var qntd = trtable.querySelector(".qntd");

    qntd.innerHTML = (Number(qntd.innerHTML || 0)) + 1;
    total.innerHTML = (Number(total.innerHTML)) + (Number(valor.innerHTML));

}
function retirar(botao) {
    var trtable = botao.parentNode.parentNode;
    var valor = trtable.querySelector(".valor");
    var total = trtable.querySelector(".total");
    var qntd = trtable.querySelector(".qntd");

    qntd.innerHTML = (Number(qntd.innerHTML || 0)) - 1;
    total.innerHTML = (Number(total.innerHTML || 0)) - (Number(valor.innerHTML));
}