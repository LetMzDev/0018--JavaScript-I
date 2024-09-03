const estudantes = require ( "./estudantes.json" );

function Buscar_Informacao ( lista, chave, valor )
{
	return lista.find (( estudante ) => estudante [ chave ].includes ( valor ));
}

console.log ( `PROCURAR ESTUDANTE\n` );
const procurar_Estudante = Buscar_Informacao ( estudantes, "nome", "Stephine" );
console.log ( `${procurar_Estudante}` );
console.log ( procurar_Estudante );
console.log ( `-------------\n` );

console.log ( `PROCURAR TELEFONE\n` );
const procurar_Estudante_Telefone = Buscar_Informacao ( estudantes, "telefone", "75993785074" );
console.log ( procurar_Estudante_Telefone );
