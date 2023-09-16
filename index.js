function validarForm() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var mensagemP = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagemP.innerHTML = "Formulário válido: Campo B é maior que Campo A.";
        mensagemP.style.color = "green";
        return true;
    } else {
        mensagemP.innerHTML = "Formulário inválido: Campo B deve ser maior que Campo A.";
        mensagemP.style.color = "red";
        return false;
    }
}

