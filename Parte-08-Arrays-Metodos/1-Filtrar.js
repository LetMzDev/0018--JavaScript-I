const alunos = [ 'Ana', 'Marcos', 'Maria', 'Mauro' ];
const medias = [ 7, 4.5, 8, 7.5 ];

const tamanho_Nome = alunos.filter (( aluno ) =>
{
	return aluno.length < 5;
})

console.log ( `${tamanho_Nome}` );

// primeiro parâmetro não utilizado
const aprovado = alunos.filter (( _, indice ) =>
{
	return medias [ indice ] >= 7;
})

console.log ( `${aprovado}` );

const reprovado = alunos.filter (( _, indice ) =>
{
	return medias [ indice ] < 7;
})

console.log ( `${reprovado}` );

// Outro exemplo
const notas = [ 10, 5, 7, 4, 8, 3 ];

const aprovados = notas.filter (( nota ) => nota >= 7 );
console.log ( aprovados );
