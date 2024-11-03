function algoritmoCalcularDescontos() {
    let produtos = [1000, 50, 200];

 let descontos = produtos.map(function (produto) {
    let desconto = produto * 0.1;
    return desconto
});

console.log(descontos);
}

algoritmoCalcularDescontos();

/*
Exercicios

ex: 01 - Dobrar Números
Implemente a função ao lado que recebe um array de números e retorna um novo array com cada valor sendo o dobro do valor correspondente no array de entrada. Você deve usar map() para criar o novo array.

Exemplos:
Se for passado array=[1, 2, 3], deve retornar [2, 4, 6]
Se for passado array=[ ], deve retornar [ ]

resposta:
function dobrarNumeros(array) {
 return array.map(valor => valor * 2)
}

ex: 02 - Lista de Tarefas
Implemente a função ao lado que recebe um array de strings onde cada elemento é uma tarefa a ser realizada. A função deve retornar um novo array de strings, onde cada tarefa está precedida de sua posição no array (começando em 1) seguida de um espaço e a própria tarefa. Você deve usar map() para criar o novo array.

Exemplos:
Se for passado tarefas = ["Lavar a louça", "Cortar a grama", "Comprar pão"], deve retornar ["1 Lavar a louça", "2 Cortar a grama", "3 Comprar pão"]
Se for passado tarefas = [ ]

resposta:
function listaDeTarefas(tarefas) {
  return tarefas.map((tarefa, index) => `${index + 1} ${tarefa}`)
}

Ex: 03 - FizzBuzz
Implemente a função ao lado que recebe um array de números inteiros positivos. A função deve usar map() para retornar um novo array onde os números são substituídos conforme as seguintes regras:

Números múltiplos de 3 são substituídos por "fizz";
Números múltiplos de 5 são substituídos por "buzz";
Números múltiplos de 3 e 5 simultaneamente são substituídos por "fizzbuzz".
Qualquer outro número deve permanecer como está.
Exemplos:
Se for passado array=[1, 3, 4, 5, 15], deve retornar [1, "fizz", 4, "buzz", "fizzbuzz"]
Se for passado array=[2, 6, 10, 30], deve retornar [2, "fizz", "buzz", "fizzbuzz"]
Se for passado array=[ ], deve retornar [ ]

resposta:
function fizzBuzzMap(array) {
  return array.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz'
    } else if (num % 3 === 0) {
      return 'fizz'
    } else if (num % 5 === 0) {
      return 'buzz'
    } else {
      return num;
    }
  })  
}
*/