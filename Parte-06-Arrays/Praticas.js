function Separe ()
{
	console.log ( "" );
	console.log ( "-----------------------------------------------" );
	console.log ( "" );
}

Separe ();

/*
	1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
*/

const meu_Array = [ , 5, , 7, , , , 11 ];
console.log ( meu_Array );
console.log ( meu_Array.length );

Separe ();

/*
2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

*/

const valores = [ 10, 20, 30, 40, 50 ];
console.log ( valores );

valores [ 0 ] = 60;
console.log ( valores );

Separe ();

/*
	3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
*/

const meu_Array_2 = [];
meu_Array_2.push ( 15 );
meu_Array_2.push ( 30 );
meu_Array_2.push ( 45 );

console.log (  meu_Array_2 );

meu_Array_2 [ 0 ] *= 2;
console.log (  meu_Array_2 );

Separe ();

/*
	4.  Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
*/

const meu_Array_3 = [];
meu_Array_3.push ( 1 );
meu_Array_3.push ( 2 );
meu_Array_3.push ( 3 );

console.log ( meu_Array_3 );

Separe ();

/*
	5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
*/

const clinica = [];

clinica.push ( "gato 1" );
clinica.push ( "gato 2" );
clinica.push ( "gato 3" );

console.log ( clinica );

clinica.pop ();
clinica.pop ();
clinica.pop ();

console.log ( clinica );
