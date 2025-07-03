# Calculadora de Média Ponderada

Este projeto implementa uma calculadora de média ponderada para unidades acadêmicas, utilizando HTML, CSS e JavaScript.

## Funcionalidades

* **Entrada Dinâmica de Notas e Pesos**: Ao carregar a página, o usuário é solicitado a informar o número de notas da unidade. Uma tabela é gerada dinamicamente com base nessa entrada, contendo campos para inserir a nota e o peso de cada avaliação.
* **Cálculo de Média Ponderada**: Um botão "Calcular" aciona a função que calcula a média ponderada das notas inseridas, considerando seus pesos respectivos.
* **Exibição do Resultado**: O resultado da média final é exibido em um campo de entrada desabilitado.
* **Validação de Entrada**: O sistema valida a entrada do usuário para o número de notas, garantindo que seja um número positivo. Caso o usuário cancele a operação, um alerta é exibido e nenhuma tabela é gerada.
* **Tratamento de Erros no Cálculo**: Se a soma dos pesos for zero, um alerta é exibido, e o campo de resultado mostra "NaN". Se nenhum campo de entrada for encontrado, um alerta é exibido.

## Estrutura do Código

* `index.html`: Define a estrutura básica da página web, incluindo a seção principal para a tabela e o resultado, além de um rodapé com informações do autor e links para outros projetos.
* `style.css`: Contém as regras de estilo CSS para a apresentação visual da calculadora, definindo fontes, cores, layout e o estilo dos elementos da tabela e botões.
* `script.js`: Contém a lógica JavaScript responsável por:
    * Gerar dinamicamente a tabela de notas e pesos (`gerarTabela` função).
    * Calcular a média ponderada (`calcular` função).
    * Interagir com o usuário para obter o número de notas ao carregar a página (`window.onload` função).

## Tecnologias Utilizadas

* **HTML5**: Para a estruturação do conteúdo da página web.
* **CSS3**: Para a estilização e layout da interface do usuário.
* **JavaScript**: Para a lógica interativa e os cálculos da aplicação.

Descrição gerada por inteligência artificial
