function getValores() {
    let n1 = parseFloat(document.getElementById("n1").value) || 0;
    let n2 = parseFloat(document.getElementById("n2").value) || 0;
    return { n1, n2 };
}

function atualizarResultado(valor) {
    document.getElementById("resultado").textContent = valor;
}

// Operações
function soma() {
    let { n1, n2 } = getValores();
    let result = n1 + n2;
    atualizarResultado(result);
}

function subtrai() {
    let { n1, n2 } = getValores();
    let result = n1 - n2;
    atualizarResultado(result);
}

function multiplicacao() {
    let { n1, n2 } = getValores();
    let result = n1 * n2;
    atualizarResultado(result);
}

function divisao() {
    let { n1, n2 } = getValores();
    if (n2 === 0) {
        atualizarResultado("Erro (divisão por zero)");
        return;
    }
    let result = n1 / n2;
    atualizarResultado(result);
}

function porcentagem() {
    let { n1, n2 } = getValores();
    let result = (n2 / 100) * n1;
    atualizarResultado(result);
}

function limpar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    atualizarResultado(0);
}
