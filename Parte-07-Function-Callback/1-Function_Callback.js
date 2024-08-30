const notas = [ 10, 8.5, 5, 6.5, 8, 7.5 ];

let soma_Das_Notas = 0;

// OU *****************************************
notas.forEach ( function ( nota )
{
	soma_Das_Notas += nota;
})

// OU *********************************************
notas.forEach ( Somar_Notas );

function Somar_Notas ( nota )
{
	soma_Das_Notas += nota;
}


// OU *********************************************
notas.forEach ( nota =>
{
	soma_Das_Notas += nota;
})

const media = ( soma_Das_Notas / notas.length ).toFixed ( 2 );

console.log ( `a média das notas é ${media}` );

/*
	forEach é um método callback.
	O parâmetro do forEach é uma função que é chamada de volta quando executa o forEach.
	( callback são funções que chamam outras funções dentro dela )
	 Esse função é executada para cada elemento do array

	 meu_Array.forEach ( function ( parâmetro ) { código da função })
		meu_Array → Array a percorrer no forEach
		parametro → guarda o dado em cada iteração do meu_Array
*/