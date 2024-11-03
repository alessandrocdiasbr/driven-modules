/*
Crie uma função chamada 'dobraValores(lista)', que recebe uma lista de números e retorna outra lista contendo os valores originais dobrados.

Exemplos:

- lista = [2, 3, 6, 5] => deve retornar [4, 6, 12, 10]
- lista = [] deve retornar []

*/

function dobraValores(lista) {
    let arrayDobrado = [];

    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
        //arrayDobrado[i] = 2 * valor;
        arrayDobrado.push(2 * valor); // se quiser mudar para ao inves de multiplicar somar, essa linha ficaria: arrayDobrado.push(valor + 1) // Se fosse para modificar a lista inicial, essa linha ficaria assim: lista[i] = 2 * valor
    }

    return arrayDobrado // caso fosse para mudar a lista inicial, essa linha ficaria assim: return lista
}

console.log(dobraValores([2, 3, 6, 5]))

/*
Exercicios aula 04

ex: 01 - Dobra Valores
Implemente a função ao lado que recebe uma lista de números e retorna outra lista contendo os valores originais dobrados.

Exemplos:
Se for passado lista = [1, 0, 4], deve retornar [2, 0, 8]
Se for passado lista = [ ], deve retornar [ ]

resposta: 
function dobraValores(lista) {
    let arrayDobrado = [];

    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];
       
        arrayDobrado.push(2 * valor); 
    }

    return arrayDobrado 
}

ex: 02 - Letra Maiúscula
Implemente a função ao lado que recebe um array de strings e retorna outro array contendo todas as strings do array original convertidas para letras maiúsculas.

Exemplos:
Se for passado lista = ['maçã', 'Banana', 'CEREJA'], deve retornar ['MAÇÃ', 'BANANA', 'CEREJA']
Se for passado lista = [ ], deve retornar [ ]
Dica:
você pode usar o método toUpperCase() para converter uma string para letras maiúsculas, por exemplo se let x = "Olá", então x.toUpperCase() produz a string "OLÁ"

resposta:
function letraMaiuscula(lista) {
 return lista.map(str => str.toUpperCase());
}

ex: 03 - Nome Dos Filmes
Implemente a função ao lado que recebe um array de objetos com informações sobre filmes e retorna outro array contendo strings formatadas com o nome dos filmes seguidos pelo ano de lançamento entre parênteses.

Exemplos:
Se for passado lista = [{nome: 'O Poderoso Chefão', ano: 1972}, {nome: 'Clube da Luta', ano: 1999}, {nome: 'Interestelar', ano: 2014}], deve retornar ['O Poderoso Chefão (1972)', 'Clube da Luta (1999)', 'Interestelar (2014)']
Se for passado lista = [], deve retornar []

resposta: 
function nomesDosFilmes(lista) {
return lista.map(filme => `${filme.nome} (${filme.ano})`);
}

*/