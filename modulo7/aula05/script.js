/*
Crie uma função chamada 'filtrarImpares(lista)', que recebe uma array de números inteiros e retorna um novo array contendo apenas os números impares do array original.

Exemplos:

- lista = [4, 3, 1, 2, 3] => deve retornar [3, 1, 3]
- lista = [4, 2, 0] => deve retornar []
- lista = [] => deve retornar []

*/

function filtraImpares(lista) {
    let filtrados = [];

    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];

        if (valor % 2 === 1) { // se eu quisesse pegar somente os valores maiores que 2, meu if ficaria assim: (valor > 2)
            filtrados.push(valor);
        }
    }
    return filtrados
}
console.log(filtraImpares([4, 3, 1, 2, 3]))

/*
Exercicios

ex: 01 - Filtra Ímpares
Implemente a função ao lado que recebe um array de números e retorna um novo array contendo apenas os números ímpares do array original.

Exemplos:
Se for passado lista = [4, 3, 1, 2, 3], deve retornar [3, 1, 3]
Se for passado lista = [4, 2, 0], deve retornar []
Se for passado lista = [], deve retornar []

resposta:
function filtraImpares(lista) {
    let filtrados = [];

    for (let i = 0; i < lista.length; i++) {
        let valor = lista[i];

        if (valor % 2 === 1) { 
            filtrados.push(valor);
        }
    }
    return filtrados
}


ex: 02 - Maior Que X
Implemente a função ao lado que recebe um array de strings e um número inteiro não-negativo x e retorna um novo array contendo apenas as strings que têm comprimento maior que x.

Exemplos:
Se for passado lista = ['sol', 'lua', 'estrela'], x = 3, deve retornar ['estrela']
Se for passado lista = ['mesa', 'copo', 'prato'], x = 0, deve retornar ['mesa', 'copo', 'prato']
Se for passado lista = [ ], x = 0 deve retornar [ ]

resposta:
function maiorQueX(lista, x) { 
let strings = []; 
for (let i = 0; i < lista.length; i++) { 
let valor = lista[i]; 
if (valor.length > x) { 
strings.push(valor); 
} 
} return strings;

ex: 03 - Produtos Eletrônicos
Implemente a função ao lado que recebe um array de objetos que representam produtos, onde cada produto tem um nome, uma categoria e um preco. Esta função deve retornar um novo array contendo apenas os produtos da categoria "Eletrônicos".

Exemplos:
Se for passado lista = [{nome: "Smartphone", categoria: "Eletrônicos", preco: 1500}, {nome: "Blender", categoria: "Eletrodomésticos", preco: 300}], deve retornar [{nome: "Smartphone", categoria: "Eletrônicos", preco: 1500}]
Se for passado lista = [{nome: "Blender", categoria: "Eletrodomésticos", preco: 200}], deve retornar []

resposta:

function produtosEletronicos(lista) { 
    let filtrados = []; 
    for (let i = 0; i < lista.length; i++) { 
    
    let produto = lista[i]; 
    if (produto.categoria === "Eletrônicos") { 
    filtrados.push(produto); 
    } 
    } 
    return filtrados; 
    }
*/