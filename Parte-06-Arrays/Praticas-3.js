function Separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

Separe ();

/*
	1 - Crie uma função que receba dois arrays e os concatene em um único array.
*/

function Juntar_Arrays ( array_1, array_2 )
{
	const novo_Array = array_1.concat ( array_2 );

	return novo_Array;
}

const frutas = [ "Maçã", "Banana", "Laranja" ];
const cereais = [ "Arroz", "Feijão" ];

const compras = Juntar_Arrays ( frutas, cereais );

console.log ( compras );

Separe ();

/*
	2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
*/

const numeros = [];

for ( let i = 0; i < 10; i++ )
{
	numeros [ i ] = i + 1;
}

console.log ( numeros );

const parte_Numeros = numeros.slice ( 3, 8 );

console.log ( parte_Numeros );

Separe ();

/*
	3 - Dado o array frutas contendo frutas que desejamos comprar na feira:

		const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

	Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
*/

const frutas_2 = [ 'Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi' ];

frutas_2.splice ( 2, 2, "Kiwi", "Pêssego" );

console.log ( frutas_2 );

Separe ();

/*
	4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
*/

const menu_Principal = [ "Macarronada", "Pizza", "Lasanha" ];
const menu_De_Sobremesas = [ "Pavê", "Mousse Maracujá", "Sorvete" ];

const menu_Completo = Juntar_Arrays ( menu_Principal, menu_De_Sobremesas );

console.log ( menu_Completo );

Separe ();

/*
	5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
*/

const linha_1 = [ 1, 2, 3 ];
const linha_2 = [ 4, 5, 6 ];
const linha_3 = [ 7, 8, 9 ];

const matriz = [ linha_1, linha_2, linha_3 ];

console.log ( matriz );

Separe ();

/*
	6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
*/

console.log ( `${matriz [ 1 ] [ 2 ]}` );

Separe ();

/*
	7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.
*/

linha_3.splice ( 1, 1, 15 );
// matriz[2][1] = 15;
// linha_3[1] = 15;

console.log ( matriz );
