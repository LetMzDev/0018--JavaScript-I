const notas = [ 10, 8.5, 5, 6.5, 8, 7.5 ];

let soma_Das_Notas = 0;

for ( let nota of notas )
	soma_Das_Notas += nota;

const media = ( soma_Das_Notas / notas.length ).toFixed ( 2 );

console.log ( `a média das notas é ${media}` );