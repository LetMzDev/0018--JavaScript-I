const notas = [ 7, 7, 8, 9 ];

const notas_2 = notas

console.log ( `${notas}` );
console.log ( `${notas_2}` );
console.log ( "" );

notas [ 2 ] = 12;

console.log ( `${notas}` );
console.log ( `${notas_2}` );
console.log ( "" );

notas_2.push ( 3.75 );

console.log ( `${notas}` );
console.log ( `${notas_2}` );
console.log ( "" );

/*
	Os arrays se comportam de forma diferente dos tipos primitivos
*/

const notas_3 = [ 1, 2, 3, 4 ];

function teste ( array )
{
   const meuArray = array;
   meuArray [2] = 100;
}

teste ( notas_3 );
console.log ( `${notas_3}` );
console.log ( "" );

const notas_4 = [ 5, 6, 7, 9 ];
const notas_5 = [ ...notas_4 ];	// Spread Operator
teste ( notas_5 );

console.log ( `${notas_4}` );
console.log ( `${notas_5}` );
console.log ( "" );
