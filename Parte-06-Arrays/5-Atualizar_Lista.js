const lista_Estudantes =
[
	'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
];

// Removendo Ana e Caio
lista_Estudantes.splice ( 1, 2, "Rodrigo" );
// lista_Estudantes.push ( "Rodrigo" );

console.log ( lista_Estudantes ); // --> [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

/*
	meuArray.splice ( inicio, quantidade a remover, Adicionar Elementos )
		• Adiciona elementos a partir do índice de 'início'
*/