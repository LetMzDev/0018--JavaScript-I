/*
	1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

		nome (string): Nome da pessoa.
		idade (number): Idade da pessoa.
		solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
		hobbies (array): Lista de hobbies da pessoa.
		Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

	Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

	No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

	Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
*/

const Pessoa =
{
	nome: "Selina",
	idade: 21,
	solteiro: true,
	hobbies: [ "Games", "Programação" ]
}

function Mostrar_Info_Pessoa ( objeto )
{
	console.log (
		`Dados:\n` +
		`  • Nome: ${objeto.nome}\n` +
		`  • Idade: ${objeto.idade}\n` +
		`  • Estado civil: ${( objeto.solteiro ) ? "Solteiro(a)" : "Casado(a)"}\n` +
		`  • Hobbies: ${objeto.hobbies.join ( ", " )}\n` +
		`Endereço:\n` +
		`  • Rua: ${objeto.endereco.rua}\n` +
		`  • Cidade: ${objeto.endereco.cidade}\n` +
		`  • Estado: ${objeto.endereco.estado}`
	);
}

// Mostrar_Info_Pessoa ( Pessoa );

console.log ( `\n\n` );

/*
	2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

		rua (string): nome da rua.
		cidade (string): nome da cidade.
		estado (string): nome do estado.
		Preencha as subpropriedades do objeto endereco com valores fictícios.

	Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

	No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

Pessoa.endereco =
{
	rua: "Rua de Prata",
	cidade: "Gold City",
	estado: "Paraíso Celestial"
}

Mostrar_Info_Pessoa ( Pessoa );

console.log ( `\n\n` );

/*
	3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

			nome (string): nome da pessoa.
			idade (number): idade da pessoa.
			cidade (string): cidade de residência da pessoa.
			Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

		a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

		b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

		c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

		d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

	Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
*/

const Pessoas =
[
	{
		nome: "Selina",
		idade: 21,
		cidade: "Gold City"
	},
	{
		nome: "Sophie",
		idade: 20,
		cidade: "Silver City"
	},
	{
		nome: "Zaky",
		idade: 20,
		cidade: "Fire City"
	}
]

function Mostrar_Info_Pessoas ( objeto )
{
	const tamanho = objeto.length;

	for ( let i = 0; i < tamanho; i++ )
	{
		console.log (
			`Dados:\n` +
			`Nome: ${objeto [ i ].nome}\n` +
			`Idade: ${objeto [ i ].idade}\n` +
			`Cidade: ${objeto [ i ].cidade}\n`
		)
	}
}

Mostrar_Info_Pessoas ( Pessoas );
console.log ( `\n` );

Pessoas.push
(
	{
		nome: "Eli",
		idade: 19,
		cidade: "Fire City"
	}
)
console.log ( `\n\n` );

Mostrar_Info_Pessoas ( Pessoas );

function Filtrar_Por_Cidade ( objeto, buscar_cidade )
{
	return objeto.filter (( objeto ) =>
	{
		return objeto.cidade === buscar_cidade;
	})
}

const cidades_Pesquisadas = Filtrar_Por_Cidade ( Pessoas, "Fire City" );
console.log ( cidades_Pesquisadas );

console.log ( `\n\n` );

/*
	4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

			soma: uma função que aceita dois parâmetros e retorna a soma deles.
			subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
			multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
			divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
		a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

		b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

		c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
*/

const Calculadora =
{
	soma: function ( x, y )
	{
		return x + y;
	},

	subtrair: function ( x, y )
	{
		return x - y;
	},

	multiplicar: function ( x, y )
	{
		return x * y;
	},

	dividir: function ( x, y )
	{
		if ( y !== 0 )
			return x / y;

		else
			return "Não se divide por zero."
	},

	calcular_Media: function ( lista_Numeros )
	{
		const somatorio = lista_Numeros.reduce (( acumular, somar ) =>
		{
			return acumular + somar;
		}, 0 );

		const media = ( somatorio / lista_Numeros.length ).toFixed ( 2 );

		return media;
	}
}

const x = 10;
const y = 0;
const numeros = [ 1, 5, -3, 10, 58, 10, -15, 20 ];

console.log
(
	`${x} + ${y} = ${Calculadora.soma ( x, y )}\n` +
	`${x} - ${y} = ${Calculadora.subtrair ( x, y )}\n` +
	`${x} * ${y} = ${Calculadora.multiplicar ( x, y )}\n` +
	`${x} / ${y} = ${Calculadora.dividir ( x, y )}\n` +
	`Média da lista = ${Calculadora.calcular_Media ( numeros )}\n`
)

console.log ( `\n\n` );

/*
	5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

		titular: uma string representando o titular da conta.
		saldo: um número representando o saldo da conta.
		depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
		sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
		Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

		nome: uma string representando o nome do cliente.
		conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
		Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

	Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/

const Conta_Bancaria =
{
	titular: "Sophie",
	saldo: 1500,

	depositar: function ( valor_depositar )
	{
		if ( valor_depositar > 0 )
			return this.saldo += valor_depositar;
	},

	retirar: function ( valor_retirar )
	{
		if ((this.saldo > 0 ) && (this.saldo >= valor_retirar ))
			return this.saldo -= valor_retirar;
	}
}

function Consultar_Dados_Bancarios ( objeto )
{
	console.log
	(
		`Dados Bancários:\n` +
		`  • Titular: ${objeto.titular}\n` +
		`  • Saldo: ${objeto.saldo}\n`
	)
	console.log ( `----------\n` );
}

Consultar_Dados_Bancarios ( Conta_Bancaria );

Conta_Bancaria.depositar ( 1000 );
Consultar_Dados_Bancarios ( Conta_Bancaria );

Conta_Bancaria.retirar ( 500 );
Consultar_Dados_Bancarios ( Conta_Bancaria );

const Cliente =
{
	nome: "Zaky",
	conta: Conta_Bancaria
};

function Mostrar_Saldo ( cliente )
{
	console.log ( `Nome do cliente: ${cliente.nome}` );
	console.log ( `Saldo da conta: ${cliente.conta.saldo}` );
}

Mostrar_Saldo ( Cliente );
