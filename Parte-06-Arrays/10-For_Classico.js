const notas = [ 10, 8.5, 5, 6.5, 8, 7.5 ];

const tamanho = notas.length; 

/*
	Primeira Expressão: let indice = 0 --> Executada apenas uma vez;
	Segunda Expressão: indice < tamanho --> Condição de Execução, sempre é executada;
	Terceira Expressão: indice++ --> Executada sempre no final do bloco.
*/

for ( let indice = 0; indice < tamanho; indice++ )
{
	console.log ( indice, notas [ indice ]);
}

// Calculando Médias

let soma_Das_Notas = 0;

for ( let i = 0; i < tamanho; i++ )
	soma_Das_Notas += notas [ i ]

const media = ( soma_Das_Notas / tamanho ).toFixed ( 2 );

console.log ( `A média das notas é: ${media}` );


// Calculando Média Geral

const notas1 = [ 10 , 6.5, 8 ,7.5 ];
const notas2 = [ 9  , 6  , 6 ];
const notas3 = [ 8.5, 9.5 ];

const notas_Gerais = [ notas1, notas2, notas3 ];
const tamanho_Geral = notas_Gerais.length;

let media_Geral = 0;

for ( let i = 0; i < tamanho_Geral; i++ )
{
	for ( let j = 0; j < notas_Gerais [ i ].length; j++ )
		media_Geral += notas_Gerais [ i ] [ j ] / notas_Gerais [ i ].length;
}

console.log ( `A média geral das notas é: ${media_Geral.toFixed ( 2 )}` );
