// for
const lista = [ 1, 2, 3, 4, 5 ];

for ( let indice = 0; indice < lista.length; indice++ )
	console.log ( lista [ indice ]);

// É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos
for ( let i = 0, j = 0; i < lista.length; i++, j++ )
	console.log ( lista [ i ] + j );


// for…of é um iterador

let soma = 0;

for ( let elemento of lista )
	soma += elemento;

console.log ( soma ); //15


// forEach()

// Ao contrário de for e for…of, o forEach() é um método do objeto Array.

soma = 0;

lista.forEach ( numero => soma += numero );
console.log ( soma ) //15

lista.forEach ( numero => {
	soma += numero
});

lista.forEach ( function ( numero )
{
	soma += numero
});

/*
	• forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

	• for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

	• for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).
*/