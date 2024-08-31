/*
	1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

		titulo (string): título do livro.
		autor (string): nome do autor do livro.
		anoPublicacao (number): ano de publicação do livro.
		genero (string): gênero do livro.

	No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.
*/
console.log ( `Item 1\n` );
const livro =
{
	titulo: "JavaScript Completo",
	autor: "Rafa",
	ano_Publicacao: 104,
	genero: "Científico"
}

console.log ( livro );

console.log ( `Detalhes do Livro:
  Título: ${livro.titulo}
  Autor: ${livro.autor}
  Ano de publicação: ${livro.ano_Publicacao}
  Gênero: ${livro.genero}
`)

console.log ( `\n\n\n` );
/*
	2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

	Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

	Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

	Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
*/
console.log ( `Item 2\n` );
const ano_Atual = new Date().getFullYear();
livro.idade_Publicacao = ano_Atual - livro.ano_Publicacao;

console.log ( `Detalhes do Livro:
  Título: ${livro.titulo}
  Autor: ${livro.autor}
  Ano de publicação: ${livro.ano_Publicacao}
  Idade do livro: ${livro.idade_Publicacao} anos
  Gênero: ${livro.genero}
`)
console.log ( `\n` );
console.log ( livro );

console.log ( `\n\n\n` );

/*
	3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

*/
console.log ( `Item 3\n` );
console.log ( `Detalhes do Livro:
  Título: ${livro["titulo"]}
  Autor: ${livro["autor"]}
  Ano de publicação: ${livro["ano_Publicacao"]}
  Idade do livro: ${livro["idade_Publicacao"]} anos
  Gênero: ${livro["genero"]}
`)

console.log ( `\n\n\n` );

/*
	4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

	No final do arquivo livro.js, adicione uma avaliação ao objeto.

	Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

	Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
*/

console.log ( `Item 4\n` );
livro.avaliacao = null;
console.log ( livro );
console.log ( `\n` );

const nova_Avaliacao = { nota: 4.5, comentario: "Ótima leitura!" };

if ( livro.avaliacao === null )
	livro.avaliacao = nova_Avaliacao;
else
	console.log ( "Este livro já possui uma avaliação." );

	console.log	( "Detalhes do Livro:" );
	console.log	( "Título: " + livro.titulo );
	console.log	( "Autor: " + livro.autor );
	console.log	( "Ano de Publicação: " + livro.ano_Publicacao );
	console.log	( "Gênero: " + livro.genero );
	console.log	( "Idade de Publicação: " + livro.idade_Publicacao + " anos");
	console.log	( "Avaliação: " + ( livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\"" ));

console.log ( `\n\n\n` );

/*
	5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
*/

console.log ( `Item 5\n` );
livro.genero = "Aventura Científica";

console.log(`Detalhes do Livro:
  Título: ${livro.titulo}
  Autor: ${livro.autor}
  Ano de Publicação: ${livro.ano_Publicacao}
  Gênero: ${livro.genero}
  Idade de Publicação: ${livro.idade_Publicacao} anos
  Avaliação: ${livro.avaliacao === null ? "Nenhuma avaliação disponível." : `Nota: ${livro.avaliacao.nota}, Comentário: "${livro.avaliacao.comentario}"`}`
)

console.log ( `\n\n\n` );

/*
	6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente
*/

console.log ( `Item 6\n` );
delete livro.avaliacao;

console.log ( livro );

console.log ( `\n\n\n` );
