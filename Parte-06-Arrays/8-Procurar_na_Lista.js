const alunos = [ 'João', 'Juliana', 'Caio', 'Ana' ];
const medias = [ 10, 8, 7.5, 9 ];

const lista = [ alunos, medias ];

function Exibir_Aluno_Nota ( aluno )
{
	const tamanho = aluno.length;

	for ( let i = 0; i < tamanho; i++ )
	{
		if ( aluno === alunos [ i ] )
			return console.log ( `Aluno(a): ${alunos [ i ]} tem média: ${medias [ i ]}`)
	}

	return console.log ( `Aluno(a) ${aluno} não encontrado(a)` );
}

Exibir_Aluno_Nota ( "Juliana" );
Exibir_Aluno_Nota ( "Rafa" );


// Outra forma

function Pesquisar_Aluno_Nota ( aluno )
{
	if ( lista [ 0 ].includes ( aluno ))
	{
		const indice = lista [ 0 ].indexOf ( aluno ); // Irá retornar o índice da primeira ocorrencia do valor fornecido
		const media_Aluno = lista [ 1 ] [ indice ];
		return console.log ( `Aluno(a): ${aluno} tem média: ${media_Aluno}` );
	}

	else
		return console.log ( `Aluno(a) ${aluno} não encontrado(a)` );
}

console.log ( "" );
Pesquisar_Aluno_Nota ( "Juliana" );
Pesquisar_Aluno_Nota ( "Rafa" );

// Desestruturando uma Lista ( Desestruturação )

function Pesquisar_Aluno_Nota_Desestruturando_Lista ( aluno )
{
	if ( lista [ 0 ].includes ( aluno ))
	{
		const [ alunos, medias ] = lista; // Desestrutura o Array Lista em duas novas Arrays, alunos e medias 
		const indice = alunos.indexOf ( aluno ); // Irá retornar o índice da primeira ocorrencia do valor fornecido
		const media_Aluno = medias [ indice ];
		return console.log ( `Aluno(a): ${aluno} tem média: ${media_Aluno}` );
	}

	else
		return console.log ( `Aluno(a) ${aluno} não encontrado(a)` );
}

console.log ( "" );
Pesquisar_Aluno_Nota_Desestruturando_Lista ( "Juliana" );
Pesquisar_Aluno_Nota_Desestruturando_Lista ( "Rafa" );
