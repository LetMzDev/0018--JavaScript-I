const estudantes = require ( "./estudantes.json" );

function Filtrar_Por_Propriedade ( lista, propriedade )
{
	return lista.filter (( estudante ) =>
	{
		return !estudante.endereco.hasOwnProperty ( propriedade ); // Se tem a propriedade 'dele mesmo'
	})
}

const lista_Enderecos_Incompletos = Filtrar_Por_Propriedade ( estudantes, "cep" ); // Uma lista que falta cadastrar o CEP

console.log ( lista_Enderecos_Incompletos );