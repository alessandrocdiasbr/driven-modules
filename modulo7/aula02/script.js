/*

Faça a função 'somaPares(list)', que recebe uma lista de números e soma todos os números que forem pares dessa lista, retornando a soma em seguinda.

Exemplos:
- lista = [5, 6, 2, 7, 9, 10] => deve retornar 18
- lista = [1,7] => deve retornar 0
*/

function somaPares(lista) {
    let soma = 0; // nesse caso, minha lista começa com 0, ela deve estar fora do loop, pois se estivesse dentro, seria zerado toda vez que iniciasse uma checagem

    for(let i = 0; i < lista.length; i++) {
        let valor = lista[i];

        if (valor % 2 === 0) {
            //acumular soma
            soma += valor;
        }
    }

    return soma;
}

console.log(somaPares([5, 6, 2, 7, 9, 10]))

/*
Agora fazendo multiplicação
function somaPares(lista) {
    let multiplicacao = 1; // elemento neutro, para multiplicação o elemento neutro é 1. se usar o 0, vai sempre voltar a dar zero. Se fosse uma string e quizesse concatenar, o elemento netro da string seria "".

    for(let i = 0; i < lista.length; i++) {
        let valor = lista[i];

        if (valor % 2 === 0) {
            //acumular soma
            multiplicacao *= valor;
        }
    }

    return multiplicacao;
}

console.log(somaPares([5, 6, 2, 7, 9, 10]))
 */

/*

Exercicios da aula

ex: 01 - Soma do Pares
Implemente a função ao lado que recebe uma lista de números e soma todos os números que forem pares dessa lista, retornando a soma em seguida.

Exemplos:
Se for passado lista = [5,6,2,7,9,10], deve retornar 18
Se for passado lista = [1, 7], deve retornar 0

resposta:
function somaPares(lista) {
  let soma = 0;

  for (let numero of lista) {

    if (numero % 2 === 0) {
      soma += numero
    }
  }
  return soma;
}

ex: 02 - Concatena Trigramas
Implemente a função ao lado que recebe um array de strings e concatena todas as strings que possuem exatamente 3 caracteres em uma única string, e retorna o resultado.

Exemplos:
Se for passado array = ["sol", "dia", "no", "lu"], deve retornar "soldia"
Se for passado array = ["sim", "não", "se", "for"], deve retornar "simnãofor"
Se for passado array = ["ele", "ela"], deve retornar "eleela"
Se for passado array = ["uma", "dois", "três"], deve retornar "uma"
Se for passado array = [ ]

resposta: 
function concatenaTrigramas(array) { return array.filter(str => str.length === 3).join(''); }

ex: 03 - Multiplica Maiores Que 10
Implemente a função ao lado que recebe um array de números inteiros positivos e retorna a multiplicação de todos os números maiores que 10 dessa lista.

Exemplos:
Se for passado lista = [10, 20, 5, 30], deve retornar 600, ou seja, 20 * 30
Se for passado lista = [1, 2, 4], deve retornar 1 porque não há números maiores que 10 na lista
Se for passado lista = [400], deve retornar 400

resposta: 
function multiplicaMaioresQue10(lista) {
  let multiplica = 1;
  for (let i = 0; i < lista.length; i++) {
    let valor = lista[i]

    if (valor > 10) {
      multiplica *= valor;
    }
  }
  return multiplica
}

*/