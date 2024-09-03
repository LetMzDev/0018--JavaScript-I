/*
	1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

	Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

	Desempenho excelente: média >= 9
	Bom desempenho: 7.5 <= média entre 7.6 e 8.9
	Desempenho regular: 6 <= média entre 6 e 7.5
	Desempenho insuficiente: média < 6
	Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

	Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
*/

const Pessoa =
{
	nome: "Sophie",
	notas: [ 7, 10, 9, 9, 9.5, 10, 10, 10 ],

	calcula_Media_Notas: function ()
	{
		const somatorio = this.notas.reduce (( acumular, somar ) =>
		{
			return acumular + somar;
		}, 0 );

		const media = ( somatorio / this.notas.length ).toFixed ( 2 );

		return media;
	},

	classificar_Desempenho: function ()
	{
		const media = this.calcula_Media_Notas();

		if ( media >= 9 )
			return "Excelente";

		else if (( media <= 8.9 ) && (media >= 7.6 ))
			return "Bom";

		else if (( media <= 7.5 ) && (media >= 6 ))
			return "Regular";

		else
			return "Insuficiente";
	}
}

console.log
(
	`Dados:\n` +
	`  • Nome: ${Pessoa.nome}\n` +
	`  • Notas: ${Pessoa.notas.join ( ", " )}\n` +
	`  • Média: ${Pessoa.calcula_Media_Notas()}\n` +
	`  • Desempenho: ${Pessoa.classificar_Desempenho()}\n`
);

console.log ( `\n\n` );

/*
	2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

	marca (string): marca do carro.
	modelo (string): modelo do carro.
	ano (number): ano de fabricação do carro.
	cor (string): cor do carro.
	Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

	Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

	Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
*/

const Carro_Simples =
{
	marca: "Ferrari",
	modelo: "W",
	ano: 2030,
	cor: "vermelho"
}

for ( let chave in Carro_Simples )
	console.log ( `${chave}: ${Carro_Simples [ chave ]}` );

console.log ( `--------------\n` );
Carro_Simples.peso = 50;
for ( let chave in Carro_Simples )
	console.log ( `${chave}: ${Carro_Simples [ chave ]}` );

console.log ( `\n\n` );

/*
	3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

	Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

	ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
	ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
	desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
	obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
	Em seguida, faça o seguinte:

	Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
	Chame o método obterDetalhes e imprima no console a string retornada.
*/

const Carro =
{
	marca: "Ferrari",
	modelo: "W",
	ano: 2030,
	cor: "vermelho",
	ligado: false,

	ligar: function ()
	{
		if ( this.ligado )
			return `O carro está ligado`;

		else
			return `O carro está desligado`;
	}
}

function Exibir_Detalhes_Carro ( objeto )
{
	console.log
	(
		`Dados do carro:\n` +
		`  • Marca: ${objeto.marca}\n` +
		`  • Modelo: ${objeto.modelo}\n` +
		`  • Ano: ${objeto.ano}\n` +
		`  • Cor: ${objeto.cor}\n` +
		`  • Está ligado? ${objeto.ligar()}\n` +
		` ------------\n`
	);
}

Exibir_Detalhes_Carro ( Carro );
Carro.ligado = true;
Exibir_Detalhes_Carro ( Carro );

console.log ( `\n\n` );

/*
	4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

	Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

	Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

	Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
*/
function Exibir_Detalhes_Carro_2 ( objeto )
{
	console.log
	(
		`Dados do carro:\n` +
		`  • Marca: ${objeto.marca}\n` +
		`  • Modelo: ${objeto.modelo}\n` +
		`  • Ano: ${objeto.ano}\n` +
		`  • Cor: ${objeto.cor}\n` +
		`  • Está ligado? ${objeto.ligar()}\n` +
		`  • Placa: ${objeto.placa}\n` +
		
		` ------------\n`
	);
}
Carro.placa = "ABC1234";
Exibir_Detalhes_Carro_2 ( Carro );

// Propriedade placa como não enumerável
Object.defineProperty ( Carro, "placa", { enumerable: false });
Exibir_Detalhes_Carro_2 ( Carro );

// loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log ( "Propriedades Enumeráveis do Carro:" );
for ( let propriedade in Carro )
	console.log ( `${propriedade}: ${Carro[propriedade]}` );

// Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chaves_Enumeraveis = Object.keys ( Carro );
console.log ( "\nChaves Enumeráveis do Carro:" );
console.log ( chaves_Enumeraveis );

// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log ( "\nAcesso direto à propriedade placa:" );
console.log ( Carro.placa );

console.log ( `\n\n` );

/*
	5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

	marca (string): marca do novo carro.
	modelo (string): modelo do novo carro.
	ano (number): ano de fabricação do novo carro.
	cor (string): cor do novo carro.
	Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

	Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

	Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
*/

const Carro_Novo =
{
	marca: "Citroen",
	modelo: "Y",
	ano: 2035,
	cor: "prata",
	ligado: false,
}

const juntando_Carros = { ...Carro, ...Carro_Novo };

console.log ( "Carro com Novos Detalhes:");
console.log ( juntando_Carros );
