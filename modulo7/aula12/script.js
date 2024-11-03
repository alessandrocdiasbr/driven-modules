let tarefas = ['lavar a louça', 'cortar a grama', 'comprar sabonete'];

let tarefasComIndice = tarefas.map((tarefa, indice) => {
    let mensagem = `${indice} - ${tarefa}`;
    return mensagem;
})

//console.log(tarefasComIndice);

let precos = [10, 20, 100];

precos.forEach(preco => console.log(preco));//se tiver somente 1 parametros, posso tirar os parenteses, se houver mais, ai preciso dos parenteses. Se também for somente um parametro, posso tirar as chaves. 
    
let precosMaiorQue15 = precos.filter(preco => preco > 15
); // se houver um return, devo retirar a palavra return, o JS entende que não há necessidade de escrever, pq precisa do return. Sempre no map e filter, que acontece isso.

console.log(precosMaiorQue15);

//let arrayDescontos = precos.map(preco => 0.1 * preco); // mesma regra do de cima.

//apresentando o preço e desconto


let arrayDescontos = precos.map(preco =>
({
    preco: preco,
    desconto: 0.1 * preco,
}));


console.log(arrayDescontos);

/*
Exercícios

ex: 01 - Implemente a função ao lado que recebe uma lista de números e retorna outra lista contendo os valores originais dobrados. Você deve usar map() para fazer essa transformação, e a função de callback do map deve ser uma arrow function que não utiliza chaves ({ })

Exemplos:
Se for passado lista = [1, 0, 4], deve retornar [2, 0, 8]
Se for passado lista = [ ], deve retornar [ ]

resposta:
function dobraValores(lista) {
 return lista.map(valor => valor * 2)
}

ex: 02 - Implemente a função ao lado que recebe um array de objetos que representam produtos. Cada produto tem as propriedades "nome", "preco", e "categoria". A função deve retornar um novo array contendo os nomes dos produtos da categoria "Eletrônica".

Restrições:
Você deve usar HOFs de array (exceto forEach), não deve usar outras formas de loop como for, while, etc.
As funções de callback das HOFs devem ser arrow functions que não utilizam chaves ({ }).
Você não deve usar comandos condicionais (como if-else e switch-case).
Exemplos:
Se for passado produtos=[{nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}, {nome: "Geladeira", preco: 1500.0, categoria: "Eletrodomésticos"}, {nome: "Fone de ouvido", preco: 100.0, categoria: "Eletrônica"}], deve retornar ["Teclado", "Fone de ouvido"]
Se for passado produtos=[{nome: "Panela", preco: 80.0, categoria: "Cozinha"}, {nome: "Secador de cabelo", preco: 120.0, categoria: "Beleza"}], deve retornar [ ] porque nenhum produto é da categoria "Eletrônica"
Dica
quantas HOFs você precisa usar aqui ? Será que é mais de uma ?

Resposta:
function nomesDosEletronicos(produtos) {
  return produtos
  .filter(produto => produto.categoria === "Eletrônica")
  .map(produto => produto.nome)
}
*/
