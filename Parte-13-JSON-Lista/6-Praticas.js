console.log ( `\n\n` );
console.log ( `QUESTÃO -- 01 \n` );

/*
	1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do livro.
	titulo (string): título do livro.
	autor (string): nome do autor.
	anoPublicacao (number): ano de publicação do livro.

	Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

	Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
*/

const biblioteca =
[
	{ id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
	{ id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
	{ id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
];

function Encontrar_Livro_Por_Id ( lista, id )
{
	return lista.find (( livro ) => livro.id === id || null );
}

console.log ( `ENCONTRAR LIVRO PRO ID:\n` );
const procurar_Livro_Id = Encontrar_Livro_Por_Id ( biblioteca, 2 );
console.log ( procurar_Livro_Id );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 02 \n` );

/*
	2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do filme.
	titulo (string): título do filme.
	diretor (string): nome do diretor.
	anoLancamento (number): ano de lançamento do filme.

	Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

	Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
*/

const catalogo_Filmes =
[
	{ id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
	{ id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
	{ id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function Filtrar_Filmes_Por_Ano ( lista, ano )
{
	return lista.filter (( filme ) =>
	{
		return filme.anoLancamento === ano;
	})
}

console.log ( `FILTRAR FILME POR ANO:\n` );
const filtrar_Filme_Ano = Filtrar_Filmes_Por_Ano ( catalogo_Filmes, 2010 );
console.log ( filtrar_Filme_Ano );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 03 \n` );

/*
	3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do produto.
	nome (string): nome do produto.
	preco (number): preço do produto.

	Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.

	Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
*/

const lista_Produtos =
[
	{ id: 1, nome: "Camiseta", preco: 25.99 },
	{ id: 2, nome: "Calça Jeans", preco: 49.99 },
	{ id: 3, nome: "Tênis", preco: 79.99 },
	{ id: 4, nome: "Boné", preco: 15.99 }
]

// Função para filtrar e ordenar produtos por preço
function Filtrar_Ordenar_Produtos_PorPreco ( max_Preco )
{
	const produtos_Filtrados = lista_Produtos.filter ( produto => produto.preco <= max_Preco );
	return produtos_Filtrados.sort (( a, b ) => a.preco - b.preco );
}

// Filtra e ordena os produtos com preço até 50.00 e imprime no console
const produtos_Ate_50 = Filtrar_Ordenar_Produtos_PorPreco ( 50.00 );
console.log ( `Produtos com preço até 50.00 (ordenados por preço crescente):\n` );
console.log ( produtos_Ate_50 );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 04 \n` );

/*
	4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do animal.
	nome (string): nome do animal.
	especie (string): espécie do animal.
	idade (number): idade do animal.

	Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.

	Você pode criar funções para fazer a ordenação crescente ou decrescente:
*/

const animais =
[
	{ id: 1, nome: "Leão", especie: "Felino", idade: 5 },
	{ id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
	{ id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

// Função para ordenar animais com base na função de comparação fornecida
function Ordenar_Animais ( comparacao )
{
	return animais.sort ( comparacao );
}

// Função de comparação para ordenar por idade de forma crescente
function Comparar_Idade_Crescente ( a, b )
{
	return a.idade - b.idade;
}

// Ordena os animais por idade de forma crescente e imprime no console
const animais_Ordenados_Crescente = Ordenar_Animais ( Comparar_Idade_Crescente );
console.log ( "Animais Ordenados por Idade (Crescente):" );
console.log ( animais_Ordenados_Crescente );

// Função de comparação para ordenar por idade de forma decrescente
function Comparar_Idade_Decrescente ( a, b )
{
	return b.idade - a.idade;
}

// Ordena os animais por idade de forma decrescente e imprime no console
const animais_Ordenados_Decrescente = Ordenar_Animais ( Comparar_Idade_Decrescente );
console.log ( "\nAnimais Ordenados por Idade (Decrescente):" );
console.log ( animais_Ordenados_Decrescente );

console.log ( `\n\n` );
console.log ( `QUESTÃO -- 05 \n` );

/*
	5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:

	id (number): identificador do departamento.
	nome (string): nome do departamento.
	funcionarios (array): array de objetos representando funcionários do departamento.

	Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.

	Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.
*/

const departamentos =
[
	{
		id: 1,
		nome: "Vendas",
		funcionarios:
		[
			{ id: 101, nome: "Ana", cargo: "Vendedor" },
			{ id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
		]
	},
	{
		id: 2,
		nome: "TI",
		funcionarios:
		[
			{ id: 201, nome: "Maria", cargo: "Desenvolvedor" },
			{ id: 202, nome: "João", cargo: "Analista de sistemas" }
		]
	}
]

// Função para encontrar um funcionário por ID em qualquer departamento
function Encontrar_Funcionario_Por_Id ( id )
{
	for ( const departamento of departamentos )
	{
		const funcionario_Encontrado = departamento.funcionarios.find ( funcionario => funcionario.id === id );
		if ( funcionario_Encontrado )
			return funcionario_Encontrado;
    }

	return null;
}

// Encontra um funcionário com ID existente e imprime no console
const funcionario_Encontrado_1 = Encontrar_Funcionario_Por_Id ( 201 );
console.log ( "Funcionário encontrado (ID 201):" );
console.log ( funcionario_Encontrado_1 );

// Encontra um funcionário com ID inexistente e imprime no console
const funcionario_Encontrado_2 = Encontrar_Funcionario_Por_Id ( 103 );
console.log ( "\nFuncionário encontrado (ID 103):" );
console.log ( funcionario_Encontrado_2 );
