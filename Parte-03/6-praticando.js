function separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

/*
	1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
*/

let frase = `Crie uma variável contendo uma frase.`;
const tamanho = frase.length;
console.log ( tamanho );
console.log ( frase.toUpperCase() );

separe ();

/*
	2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
*/

let valor_1;
let valor_2 = null;

console.log ( valor_1 );
console.log ( valor_2 );

separe ();

/*
	3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
*/

const nota = 10;
const time = "São Paulo Futebol Clube";
const vencer_Libertadores = true;

console.log ( `O ${time} é nota ${nota}. Vencerá a Libertadores da América? ${vencer_Libertadores}` );

separe ();

/*
	4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.	
*/

const numero_1 = 10;
const nome_1 = "100";

console.log ( typeof numero_1 )
console.log ( typeof ( toString (numero_1 )));
console.log ( "" );
console.log ( typeof nome_1 );
console.log ( typeof ( parseInt ( nome_1 )));

separe ();

/*
	5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
*/

const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice ( 0, 10 );

console.log ( 'Texto em maiúsculas:', maiusculas );
console.log ( 'Texto em minúsculas:', minusculas );
console.log ( 'Parte da string:', parteDaString );