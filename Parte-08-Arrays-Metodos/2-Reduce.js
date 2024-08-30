const sala_JS = [ 7, 8, 8, 7, 10, 6.5, 4, 10, 7 ];
const sala_Java = [ 6, 5, 8, 9, 5, 6 ];
const sala_Python = [ 7, 3.5, 8, 9.5 ];

function Calcular_Medias ( lista_de_notas )
{
	const soma_Das_Notas = lista_de_notas.reduce (( acumulado, nota ) =>
	{
		return acumulado + nota;
	}, 0 );

	const media = ( soma_Das_Notas / lista_de_notas.length ).toFixed ( 2 );
	return media;
}

console.log ( `Media de JS: ${ Calcular_Medias ( sala_JS )}` );
console.log ( `Media de Java: ${ Calcular_Medias ( sala_Java )}` );
console.log ( `Media de Python: ${ Calcular_Medias ( sala_Python )}` );

// Como tem uma única linha de comando, pode reduzir o código para
const somaDasNotas = listaDeNotas.reduce (( acumulador, nota ) => acumulador + nota, 0 );

/*
	Sintaxe
		array.reduce ( callback(acumulador, valorAtual, indice, array ), valorInicial );

	callback: Função que é executada em cada elemento do array, recebe quatro parâmetros:

		• acumulador: O valor acumulado retornado na última invocação do callback ou o valorInicial, se fornecido.
		• valorAtual: O elemento atual sendo processado no array.
		• indice (opcional): O índice do elemento atual sendo processado.
		• array (opcional): O array sobre o qual reduce foi chamado.
		• valorInicial (opcional): Um valor a ser usado como o primeiro argumento na primeira chamada do callback. Se não fornecido, o primeiro elemento do array será usado como o acumulador e o loop começará no segundo elemento.
*/
