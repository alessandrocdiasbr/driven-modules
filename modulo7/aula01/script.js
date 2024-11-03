




/*


exemplos
- lst = [8, 2, 4, 12, 7, 6] => deve retornar 12;
- lst = [8, 2, 6, 12, 7, 6] => deve retornar 6;
- lst = [8, 2, 4, 13, 7, 7] => deve retornar -1;


*/ 

function multiploDeSeis(lst) {
    for (let i = 0; i < lst.length; i++) {
        console.log("i=" + i)
        let valor = lst[i];
        if (valor % 6 === 0) {
            return valor;
        }
    }

    return -1;
}

console.log(multiploDeSeis([8, 2, 6, 12, 7, 6]));


// se eu quero começar o loop pelo final, uso da seguinte forma: for (let i = lst.length - 1; i >=0; i--)

/*
Exercicícos do modulo

ex: 2 - String 3
Implemente a função ao lado que recebe um array de strings e retorna a primeira string de 3 letras encontrada. Caso não existam strings de tamanho 3, retorne uma string vazia.

Exemplos:
Se for passado palavras = ["arroz", "terra", "céu", "água"], deve retornar "céu"
Se for passado palavras = ["carro", "engenharia"], deve retornar ""

resposta:
function string3(palavras) {
  for (let palavra of palavras) {
   if (palavra.length === 3) {
    return palavra;
   }

  }

  return ""
}


ex: 3 - Último Negativo
Implemente a função ao lado que recebe uma array de números e retorna o último número negativo. Caso não haja valores negativos, retorne false.

Exemplos:
Se for passado numeros = [4, 1, -3, 3, -2, 5, 12], deve retornar \-2
Se for passado numeros = [4, 1, -3, 2, -10, 5, 12], deve retornar \-10
Se for passado numeros = [4, -2, 1], deve retornar \-2
Se for passado numeros = [4, 2, 1, 0], deve retornar false


resposta:
function ultimoNegativo(numeros) {
  for (let i = numeros.length - 1; i >= 0; i--) {
    if (numeros[i] < 0) {
      return numeros[i];
    }
  }
  return false;
}

*/