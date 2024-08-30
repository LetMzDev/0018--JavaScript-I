function Separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

Separe();

/*
	1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
*/

const frutas = [ "Laranja", "Maçã", "Uva", "Mamão", "Banana", "Manga", "Goiaba" ];
let indice = 0;

frutas.forEach ( fruta =>
{
	console.log ( `Id: ${indice} -- Fruta: ${fruta}` );
	indice++;
})

console.log ( "" );

frutas.forEach (( elemento, indice ) =>
{
	console.log ( `Id: ${indice}, Valor: ${elemento}` );
});

Separe();

/*
	2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
*/

function Executa_Operacao_Em_Array ( array, funcao_Callback )
{
	return array.map ( funcao_Callback ); // Executa a função de callback em cada elemento do array
}

function Dobrar_Numero ( num )
{
	return num * 2; // Função de exemplo para dobrar o número
}

const listaNumeros = [ 1, 2, 3 ];
const listaNumerosDobrados = Executa_Operacao_Em_Array ( listaNumeros, Dobrar_Numero );
console.log ( listaNumerosDobrados ); // Saída: [ 2, 4, 6 ]

Separe();

/*
	3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
*/

const numeros = [ 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ];
let posicao = -1; // Considerando que não encontrou o número
let tamanho = numeros.length;
const procurar = 25;

for ( let i = 0; i < tamanho; i++ )
{
	if ( procurar === numeros [ i ] )
	{
		posicao = i;
		break;
	}
}

console.log ( `O número: ${procurar} está na posição: ${posicao}` );

Separe();

/*
	4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

	Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
*/

const nomes_Turma_A =
[
	'João Silva',
	'Maria Santos',
	'Pedro Almeida'
];

const nomes_Turma_B =
[
	'Carlos Oliveira',
	'Ana Souza',
	'Lucas Fernandes'
];

const todas_Turmas = nomes_Turma_A.concat ( nomes_Turma_B );

const aluno_Procurado = todas_Turmas.find ( nome => nome === "Ana Souza" );

if ( aluno_Procurado )
	console.log ( `Aluno(a) encontrado ${aluno_Procurado}` );
else
	console.log ( `Aluno não encontrado` );

Separe();

/*
	4.	Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
*/

const num = [ 6, 9, 12, 15, 18, 21 ];

num.forEach ( numero => {
	const triplo = numero *= 3;
	console.log (triplo );
})

console.log ( "" );

const ind = num.findIndex ( valor => valor === 18 );

console.log ( `${num}` );
console.log ( `${ind}` );
