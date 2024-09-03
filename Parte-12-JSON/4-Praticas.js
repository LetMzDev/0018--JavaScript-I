/*
	1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

	Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

	Imprima no console o conteúdo importado utilizando a função console.log().

	Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
*/

console.log ( `QUESTÃO -- 01 \n` );

const dados = require ( "./dados.json" );

console.log ( dados );
console.log ( `-------------\n` );
console.log ( typeof dados );
console.log ( `-------------\n` );

console.log ( `Produtos: ${dados.produtos}` );
console.log ( `Usuários: ${dados.usuarios}` );
console.log ( `-------------\n` );

console.log
(
	`Dados:\n` +
	`  • Id: ${dados.produtos [ 0 ].id}\n` +
	`  • Nome: ${dados.produtos [ 0 ].nome}\n` +
	`  • Preço: ${dados.produtos [ 0 ].preco}\n`
);

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 02 \n` );
/*
	2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja 1ou qualquer outra informação que você deseje.

	Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

	Imprima no console o objeto JavaScript resultante da leitura do arquivo.

*/

console.log ( dados );
console.log ( `-------------\n` );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 03 \n` );

/*
	3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do produto.
	nome (string): nome do produto.
	preco (number): preço do produto.

	Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
*/
const Produto =
{
	id: 3,
	nome: "Camisa branca",
	preco: 5.99
}

// Converte o objeto produto para uma string
const string_Json_Produto = JSON.stringify ( Produto );

// Imprime no console a string do objeto produto
console.log ( "String do Produto:" );
console.log ( string_Json_Produto );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 04 \n` );

/*
	4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

	Exemplo de animais.json:

	Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

	a) Leia o conteúdo do arquivo animais.json.

	b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

	c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

	d) Modifique o habitat de um animal existente no array de animais.

	e) Remova um animal do array de animais.

	f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

	g) Imprima no console o objeto JavaScript resultante das operações.
*/

const Objeto_animais = require ( "./animais.json" );

// Adiciona um novo animal ao array de animais
const novo_Animal =
{
	"id": 4,
	"nome": "Elefante",
	"tipo": "Mamífero",
	"habitat": "Savana"
};

console.log ( Objeto_animais );
console.log ( `-------------\n` );

Objeto_animais.animais.push ( novo_Animal );

console.log ( `ADICIONADO NOVO ANIMAL \n` );
console.log ( Objeto_animais );
console.log ( `-------------\n` );

// Modifica o habitat de um animal existente no array de animais
const animal_Para_Modificar = Objeto_animais.animais.find ( animal => animal.id === 2 );
if ( animal_Para_Modificar )
	animal_Para_Modificar.habitat = "Oceano Antártico";

console.log ( `MODIFICADO \n` );
console.log ( Objeto_animais );
console.log ( `-------------\n` );

// Remove um animal do array de animais
const indice_Animal_Remover = Objeto_animais.animais.findIndex ( animal => animal.id === 1 );
if ( indice_Animal_Remover !== -1 )
	Objeto_animais.animais.splice ( indice_Animal_Remover, 1 );

console.log ( `REMOVER \n` );
console.log ( Objeto_animais );
console.log ( `-------------\n` );

// Converte o objeto modificado para uma string JSON
const nova_String_Json_Animais = JSON.stringify ( Objeto_animais, null, 2 );
console.log ( `STRING \n` );
console.log ( nova_String_Json_Animais );
console.log ( `-------------\n` );

// Imprime no console o objeto JavaScript resultante das operações
console.log ( `Objeto JavaScript Resultante das Operações:\n` );
console.log ( Objeto_animais );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 05 \n` );

/*
	5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

	id (number): identificador da pessoa.
	nome (string): nome da pessoa.
	idade (number): idade da pessoa

	Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

	Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

	Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.
*/

// Função para copiar objetos JSON
function Copiar_Objeto_Json ( objeto )
{
	return JSON.parse ( JSON.stringify ( objeto ));
}

// Criação do objeto original (pessoa)
const pessoa_Original =
{
	id: 1,
	nome: "Alice",
	idade: 19
}

// Utiliza a função para criar uma cópia do objeto original
const pessoa_Modificada = Copiar_Objeto_Json ( pessoa_Original );

// Modifica a cópia do objeto (pessoa modificada)
pessoa_Modificada.idade = 31;

// Imprime no console ambos os objetos
console.log ( "Objeto Original (Pessoa):\n" );
console.log ( pessoa_Original );

console.log ( "Objeto Modificado (Pessoa):\n" );
console.log ( pessoa_Modificada );
