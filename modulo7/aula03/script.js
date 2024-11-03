/*

Crie uma função chamada 'maiorNumero(lista)', que recebe um array de números e retorna o maior número desse array. Caso o array esteja vazio, retorne 'null'.

exemplos:
- lista = [10, 20, -30, -100, 50, 20] => deve retornar 50
- lista = [10, 10, 10, 5] => deve retornar 10
- lista = [ ] = deve retornar null
*/

function maiorNumero(lista) {
    //edge case => caso de borda
    if(lista.length === 0) {
        return null;
    }

    let chute = lista[0]; // se caso eu quizesse saber qual o índice do maior número, então, começo minha lista com zero: let chute = 0;

    for (let i = 1; i < lista.length; i++) {
        let valor = lista[i];

        if (valor > chute) { // continuando sobre o maior índice, aqui ficaria assim: if (valor > lista[chute])
            chute = valor; // E aqui, mudaria também o índice que estou recebendo, ficando assim: chute = i;
        }
    }
    

    return chute
}
console.log(maiorNumero([10, 20, -30, -100, 50, 20]))

/*
Exercícios da aula 03 

ex: 01 - Maior Número
Implemente a função ao lado que recebe uma lista de números e retorna o maior número entre eles. Se a lista estiver vazia, retorne null.

Exemplos:
Se for passado lista = [5, 3, 9, 1, 6], deve retornar 9
Se for passado lista = [15, 22, 8, 6, 21], deve retornar 22
Se for passado lista = [1], deve retornar 1
Se for passado lista = [ ], deve retornar null

resposta: function maiorNumero(lista) {
  
  if(lista.length === 0) {
    return null;
  }

  let opcao = lista[0];

  for (let i = 1; i < lista.length; i++) {
    let valor = lista[i];

    if (valor > opcao) {
      opcao = valor
    }
  }
  return opcao
}


ex: 02 - Filme Mais Antigo
Implemente a função ao lado que recebe uma array de objetos de filmes, onde cada filme tem um nome e um ano, e retorna o índice do filme mais antigo. Em caso de empate, retorne o índice do primeiro filme encontrado. Se o array estiver vazio, retorne \-1.

Exemplos:
Se for passado filmes = [{ nome: "Filme A", ano: 1999 }, { nome: "Filme B", ano: 1985 }, { nome: "Filme C", ano: 2001 }], deve retornar 1
Se for passado filmes = [{ nome: "Filme A", ano: 1977 }, { nome: "Filme B", ano: 1977 }, { nome: "Filme D", ano: 1990 }], deve retornar 0
Se for passado filmes = [{ nome: "Filme A", ano: 2010 }], deve retornar 0
Se for passado filmes = [], deve retornar \-1

resposta:
function indiceFilmeMaisAntigo(filmes) {
  if(filmes.length === 0) {
    return -1
  }

  let chute = 0;

  for (let i = 1; i < filmes.length; i++) {
if(filmes[i].ano < filmes[chute].ano) {
  chute = i
}
  }

  return chute
}



*/