const estudantes = require ( "./estudantes.json" );

function Ordenar ( lista, propriedade )
{
	return lista.sort (( a, b ) =>
	{
		if ( a [ propriedade ] < b [propriedade ])
			return -1;

		if ( a [ propriedade ] > b [ propriedade ])
			return 1;

		return 0;
	})
}

const lista_Ordenada = Ordenar ( estudantes, "nome" );
console.log ( lista_Ordenada );
