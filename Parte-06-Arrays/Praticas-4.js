function Separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

Separe ();

/*
	1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
*/

const frutas = [ 'Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi' ];

for ( let fruta of frutas )
	console.log ( `${fruta}` );

Separe ();

/*
	2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
*/

function Imprimir_Frutas ( fruta )
{
	const tamanho = fruta.length;

	for ( let i = 0; i < tamanho; i++ )
		console.log ( `Fruta id: ${i} - Nome: ${fruta [ i ]}` )
}

Imprimir_Frutas ( frutas );

Separe ();

/*
	3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
*/

function Somar_Numeros ( numeros )
{
	let soma_Numeros_Int = 0;

	for ( let numero of numeros )
		soma_Numeros_Int += numero;

	return soma_Numeros_Int;
}

const numeros_Int = [ 0, 1, 2, -3, 4, 5, 6, -7, 8, -9, 10 ];
const numeros_Somados = Somar_Numeros ( numeros_Int );

console.log ( `Números somados é: ${numeros_Somados}` );

Separe ();

/*
	4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
*/

function Menor_Maior_Valor ( numeros )
{
	let maior = -1;
	let menor = Infinity;

	const tamanho = numeros.length;

	for ( let i = 0; i < tamanho; i++ )
	{
		if ( numeros [ i ] > maior )
			maior = numeros [ i ];

		if ( numeros [ i ] < menor )
			menor = numeros [ i ];
	}

	return console.log ( `o maior número é ${maior} e o menor número é ${menor}` );
}

Menor_Maior_Valor ( numeros_Int );

const numeros_Aleatorios =
[
	5, 12, 23, 34, 45, 56, -67, 78, 89, -90,
	-11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
	1, 13, 24, 35, 46, 57, -68, 79, 80, 91,
	2, 14, -25, -36, 47, -58, -69, 70, 81, 92,
	3, 15, 26, 37, 48, 59, -60, 71, 82, -93
];

Menor_Maior_Valor ( numeros_Aleatorios );

Separe ();

/*
	5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
*/

console.log ( "Números Pares" );
const numeros = [ 3, 8, 12, 5, 6, 10, 7, 2, 9, 14 ];
const tamanho_Num = numeros.length;

for ( let i = 0; i < tamanho_Num; i++ )
{
	if ( ( numeros [ i ] % 2 ) === 0 )
		console.log ( `${numeros [ i ]}` );
}

Separe ();

/*
	6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
*/

const soma_Total = Somar_Numeros ( numeros_Aleatorios );
const tamanho_Total = numeros_Aleatorios.length;

const media_Total = ( soma_Total / tamanho_Total ).toFixed ( 2 );

console.log ( `A média da soma total de números é: ${media_Total}` );
