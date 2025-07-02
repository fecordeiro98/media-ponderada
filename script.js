let numeroLinhas = 0;

// Criação da função que gera a tabela:
function gerarTabela(linhas) {
    numeroLinhas = linhas;
    const identificador = document.getElementById('container');
    identificador.innerHTML = ''; // Limpa tabela anterior, se houver

    const tabela = document.createElement('table');
    
    // Criação do cabeçalho:
    const cabecalho = document.createElement('thead');
    const linhaCabe = document.createElement('tr');
    ['', 'Nota', 'Peso'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        linhaCabe.appendChild(th);
    });
    cabecalho.appendChild(linhaCabe);
    tabela.appendChild(cabecalho)

    // Criação do corpo da tabela:
    const tbody = document.createElement('tbody');
    for (let i = 0; i < linhas; i++) {
        const linha = document.createElement('tr');

        // Coluna 1 - Rótulo:
        const rotulo = document.createElement('td');
        rotulo.textContent = `Nota ${i + 1}`;
        linha.appendChild(rotulo);

        // Coluna 2 - Notas:
        const input1Celula = document.createElement('td');
        const input1 = document.createElement('input');
        input1.type = 'number';
        input1.className = 'nota';
        input1.min = '0';
        input1.max = '10';
        input1.step = '0.1';
        input1Celula.appendChild(input1);
        linha.appendChild(input1Celula);

        // Coluna 3 - Pesos:
        const input2Celula = document.createElement('td');
        const input2 = document.createElement('input');
        input2.type = 'number';
        input2.className = 'peso';
        input2.min = '1';
        input2.step = '1';
        input2Celula.appendChild(input2);
        linha.appendChild(input2Celula);

        tbody.appendChild(linha);
    }
    tabela.appendChild(tbody);
    identificador.appendChild(tabela);
}

// Criação da função que faz a média ponderada:
function calcular() {
    const notas = document.querySelectorAll('.nota');
    const pesos = document.querySelectorAll('.peso');
    let somaProdutos = 0;
    let somaPesos = 0;

    if (notas.length === 0 || pesos.length === 0) {
        alert('Nenhum campo de entrada encontrado para calcular :(');
        return;
    }

    for (let i = 0; i < numeroLinhas; i++) {
        const numero = parseFloat(notas[i].value) || 0;
        const peso = parseFloat(pesos[i].value) || 0;

        somaProdutos += (numero * peso);
        somaPesos += peso;
    }

    const resultado = document.getElementById('final');
    let mediaPonderada = 0;

    if (somaPesos === 0) {
        alert('A soma dos pesos é zero. Não é possível calcular a média ponderada!');
        resultado.value = NaN;
    } else {
        mediaPonderada = somaProdutos / somaPesos;
        resultado.value = mediaPonderada.toFixed(1);
    }
}

// Pergunta quantas linhas terá a tabela ao carregar a página:
window.onload = function() {
    let numeroCampos = 0;
    let entradaValida = false;

    while (!entradaValida) {
        const entrada = prompt('A unidade tem quantas notas?');

        if (entrada === null) {
            alert('Operação cancelada. Nenhuma tabela será gerada.');
            return;
        }

        numeroCampos = parseInt(entrada);

        if (isNaN(numeroCampos) || numeroCampos <= 0) {
            alert('Por favor digite um número válido!');
        } else {
            entradaValida = true;
        }
    }
    gerarTabela(numeroCampos);
}