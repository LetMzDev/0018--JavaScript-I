const lista_Estudantes =
[
	'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const sala_1 = lista_Estudantes.slice ( 0, lista_Estudantes.length / 2 );
const sala_2 = lista_Estudantes.slice ( lista_Estudantes.length / 2 );

console.log ( sala_1 );
console.log ( "" );
console.log ( sala_2 );

/*
	meuArray.slice ( início, final )
		• 'final' é opcional'
		• quando adiciona 2 parâmetros, o índice final não e incluído
*/
