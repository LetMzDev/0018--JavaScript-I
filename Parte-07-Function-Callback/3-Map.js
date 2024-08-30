const notas = [ 10, 9.5, 8, 7, 6 ];

const notas_Atualizadas = notas.map ( function ( nota )
{
	return nota + 1;
})

console.log ( `${notas}` );
console.log ( `${notas_Atualizadas}` );

// OU

const notas_Atualizadas_2 = notas.map (( nota ) =>
{
	return nota - 1;
})

console.log ( `${notas}` );
console.log ( `${notas_Atualizadas_2}` );

// OU
const notas_Atualizadas_4 = notas.map (( nota ) => nota - 1 );

console.log ( `${notas}` );
console.log ( `${notas_Atualizadas_4}` );

// Melhorando a lógica

console.log ( "" );

const notas_Atualizadas_3 = notas.map (( nota ) =>
{
	++nota;

	if ( nota >= 10 )
		return nota = 10;

	else
		return nota;
})

console.log ( `${notas}` );
console.log ( `${notas_Atualizadas_3}` );

/*
	• forEach: Executa uma ação para cada elemento do array, mas não retorna nada. Use-o para efeitos colaterais como salvar dados, atualizar variáveis ou executar ações que não requerem criar um novo array.

	• map: Aplica uma transformação a cada elemento e retorna um novo array com os resultados. Use-o quando você quer transformar dados e precisa de um novo array como resultado.
		Sempre irá retornar um Array com os resultados.

*/
console.log ( "" );
console.log ( "" );

let valores = [ 9, 7.5, 8.5, 7.3, 6.9, 10 ];
console.log ( `${valores}` );

valores = valores.map (( nota ) =>
{
	++nota;

	if ( nota >= 10 )
		return nota = 10;

	else
		return nota;
})

console.log ( `${valores}` );