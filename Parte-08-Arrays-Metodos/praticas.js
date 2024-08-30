function Separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

Separe();

/*
	1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
*/

function Concat_Arrays ( ...arrays )
{
    return [].concat ( ...arrays );
}

const arr1 = [ 1, 2 ];
const arr2 = [ 3, 4 ];
const arr3 = [ 5, 6 ];

const arrays_Concatenados = Concat_Arrays ( arr1, arr2, arr3 );
console.log ( arrays_Concatenados );

Separe();

/*
	2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
*/

const valores = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const somatorio = valores.reduce (( acumular, somar ) => acumular + somar, 0 );

console.log ( somatorio );

Separe();

/*
	3 - Considere duas listas de cores:

		const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

		const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

	Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
*/

const cores_Lista_1 = [ 'Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho' ];
const cores_Lista_2 = [ 'Laranja', 'Verde', 'Roxo', 'Azul' ];

function Sem_Repetir ( array_1, array_2 )
{
	const novo_Array = array_1.concat ( array_2 );

	const novo_Array_Atualizado = new Set ( novo_Array );

	return [ ...novo_Array_Atualizado ];
}

const lista_Atualizada = Sem_Repetir ( cores_Lista_1, cores_Lista_2 );

console.log ( lista_Atualizada );

Separe();

/*
	4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
*/

const num_Pares = valores.filter (( numeros ) =>
{
	return ( numeros % 2 === 0 )
});

console.log ( num_Pares );

Separe();

/*
	5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
*/

const filtrar_Num = valores.filter (( numeros ) =>
{
	return (( numeros % 3 ) === 0 ) && ( numeros > 5 );
})

console.log ( filtrar_Num );

Separe();

/*
	6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
*/

function Somar_Elementos_Array ( array )
{
	return array.reduce (( acumular, valor_atual ) => acumular + valor_atual, 0 );
}

const lista_Numeros = [ 1, 2, 3, 4, 5 ];
const soma_Total = Somar_Elementos_Array ( lista_Numeros );
console.log ( soma_Total );
