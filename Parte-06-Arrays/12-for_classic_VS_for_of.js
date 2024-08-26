// for clássico

const precos = [ 5.5, 6.2, 14, 19.5 ];

let desconto = 0.90;

for ( let i = 0; i < precos.length; i++ )
	precos [ i ] = precos [ i ] * desconto;

console.log ( precos );
console.log ( "");

// for...of

const precos_2 = [ 5.5, 6.2, 14, 19.5 ];

for ( let preco of precos_2 )
	preco = preco * desconto;

console.log ( precos_2 );

/*
	• for Clássico: Modifica diretamente os elementos do array porque você está acessando os elementos pelo índice.

	• for...of: Itera sobre os valores, não permitindo modificações diretas no array original a menos que você use os índices ou outra abordagem.
*/
