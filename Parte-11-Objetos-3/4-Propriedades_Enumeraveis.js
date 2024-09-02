/*
	Propriedades enumeráveis

		• Propriedades enumeráveis são aquelas que são consideradas durante operações de iteração, como for … in e métodos como Object.keys().
		• Por padrão, todas as propriedades criadas diretamente em um objeto são enumeráveis, o que significa que elas são visíveis durante a iteração.
*/

const Meu_Objeto =
{
	nome: "ChatGPT",
	linguagem: "JavaScript",
	versao: "3.5"
};

for ( let chave in Meu_Objeto )
	console.log ( chave ); // Saída: nome, linguagem, versao

console.log ( `------------------\n\n` );

/*
	Propriedades não enumeráveis

	• Propriedades não enumeráveis não são consideradas durante operações de iteração.
	• Essas propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não precisam ser expostas durante iterações comuns.
*/

const Meu_Objeto_2 = {};

Object.defineProperty ( Meu_Objeto_2, 'propriedade_Nao_Enumeravel',
{
	value: 42,
	enumerable: false
});

for ( let chave in Meu_Objeto_2 )
	console.log ( chave ); // Saída: (nenhuma, pois não há propriedades enumeráveis)
