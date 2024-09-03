const estudantes = require("./estudantes.json");

function Ordenar ( lista, propriedade, decrescente = true )
{
	return lista.sort (( a, b ) =>
	{
		let valorA = a [ propriedade ];
		let valorB = b [ propriedade ];

		if ( typeof valorA === 'string' )
			valorA = valorA.toUpperCase();

		if ( typeof valorB === 'string' )
			valorB = valorB.toUpperCase();

		if ( valorA < valorB )
			return decrescente ? 1 : -1;

		if ( valorA > valorB )
			return decrescente ? -1 : 1;

		return 0;
	});
}

const lista_Ordenada = Ordenar ( estudantes, "nome" );
console.log ( lista_Ordenada );
