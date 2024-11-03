/*function imprimirNoConsole(produto, i) { // usar os parametros aqui
    console.log(i + 1 + ' ' + produto);
}*/


//Função anônima
function algoritmoX() {
    let produtos = ['sabonete', 'xampu', 'bucha'];

    let acumuladora = '';

    produtos.forEach(function (produto, i) { //função anônima, sempre que usar o forEach usar a função anônima.
        acumuladora += produto;
    });

    console.log(acumuladora)
}

algoritmoX();

/*
Exercícios 

ex: 01 - Somar Números 2
Implemente a função ao lado que recebe um array de números como parâmetro e retorna a soma de todos os números do array. A função deve usar forEach para somar os números.

Exemplos:

se array=[1, 2, 3] => deve retornar 6
se array=[] => deve retornar 0

resposta:
function somarNumeros(array) {
    let soma = 0;
    array.forEach(function(numero) {
      soma += numero;
    });
    return soma;
}


ex: 02 - Onde Ocorre
Implemente a função ao lado que recebe um array de strings e um número inteiro positivo tamanho. A função deve retornar todos os índices do array onde a string tem tamanho tamanho. Você deve usar forEach para percorrer o array.

Exemplos:

Se array=["eu", "gosto", "de", "chocolate"] e tamanho=2 => deve retornar [0, 2] porque array[0] e array[2] são as únicas strings com tamanho 2
Se array=["uma", "tarde", "de", "sol"] e tamanho=4 => deve retornar [ ] porque nenhuma string tem tamanho 4

// resposta
function ondeOcorre(array, tamanho) {
  let indices = [];
  array.forEach((str, index)=> {
    if (str.length === tamanho) {
      indices.push(index);
    }
  })
  return indices
}


*/