function imprimirNoConsole(produto) {
    console.log('Próximo produto');
    console.log(produto)
}

function algoritmoX() {
    let produtos = ['sabonete', 'xampu', 'bucha'];

    console.log('Inicio')

    produtos.forEach(imprimirNoConsole); // no forEach preciso passar como parametro o nome da outra função. Posso sempre usar no array. O parametro do forEach se chama de callback, ou função de callback

    //for (let i = 0; i < produtos.length; i++) { //forEach resume tudo isso
        //let produto = produtos[i];

        //imprimirNovoConsole(produto);

    //}

    console.log('Fim')
}

algoritmoX();

/*
Exercicios

ex: 01 - Imprimir Array
Implemente a função ao lado que recebe um array de strings como parâmetro e imprime no console cada string do array, uma em cada linha. Antes de imprimir os elementos, imprima a string "início" e depois a string "fim". Você deve usar forEach() para fazer o loop de impressão dos elementos.

Atenção
você deve imprimir no Console com console.log, em vez de usar return para dar resultados. Não imprima nada além do que foi pedido no Console, e tome cuidado para imprimir exatamente como pedido (letras maiúsculas/minúsculas, espaçamento etc).
Exemplos:
Se array=["Ana", "Bia", "Carlos"], deve imprimir no Console as seguintes mensagens:

início
Ana
Bia
Carlos
fim
Se array=["Ana"], deve imprimir no Console as seguintes mensagens:

início
Ana
fim
Se array=[], deve imprimir no Console as seguintes mensagens:

início
fim


resposta:
function imprimirArray(array) { 
    console.log('início'); 
    array.forEach(element => console.log(element)); 
    console.log('fim'); 
}


ex: 02 - Imprimir Eletrônicos
Implemente a função ao lado que recebe um array de objetos que representam produtos. Cada produto tem as propriedades nome, preco, e cateogria. A função deve usar forEach() para imprimir no console o nome de todos os produtos da categoria "Eletrônica".

Atenção
você deve imprimir no Console com console.log, em vez de usar return para dar resultados. Não imprima nada além do que foi pedido no Console, e tome cuidado para imprimir exatamente como pedido (letras maiúsculas/minúsculas, espaçamento etc).
Exemplos:
Se produtos=[{nome: "Teclado", preco: 50.0, categoria: "Eletrônica"}, {nome: "Geladeira", preco: 1500.0, categoria: "Eletrodomésticos"}, {nome: "Fone de ouvido", preco: 100.0, categoria: "Eletrônica"}], deve imprimir no Console as seguintes mensagens:

Teclado
Fone de ouvido

resposta:
function imprimirEletronicos(produtos) { 
    produtos.forEach(produto => { 
        if (produto.categoria === "Eletrônica") { 
        console.log(produto.nome); 
        } 
        }); 
        }

ex: 03 - Imprimir Nomes e Preços
Implemente a função ao lado que recebe um array de objetos que representam produtos. Cada produto tem as propriedades nome, preco, e categoria. A função deve usar forEach() para imprimir no console o nome de todos os produtos do array, depois o preço de todos os produtos do array.

Atenção
você deve imprimir no Console com console.log, em vez de usar return para dar resultados. Não imprima nada além do que foi pedido no Console, e tome cuidado para imprimir exatamente como pedido (letras maiúsculas/minúsculas, espaçamento etc).
Exemplos:
Se produtos=[{nome: "Teclado", preco: 50, categoria: "Eletrônica"}, {nome: "Geladeira", preco: 1500, categoria: "Eletrodomésticos"}, {nome: "Fone de ouvido", preco: 100, categoria: "Eletrônica"}] => deve imprimir no Console as seguintes mensagens:

Teclado
Geladeira
Fone de Ouvido
50
1500
100
Se produtos=[] => não deve imprimir nenhuma mensagem no Console, porque não há produtos no array
*/