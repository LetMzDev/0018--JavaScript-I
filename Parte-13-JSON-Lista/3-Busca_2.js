const listaDeUsuarios =
[
	{ id: 1, nome: 'Alice', idade: 25 },
	{ id: 2, nome: 'Bob', idade: 30 },
	{ id: 3, nome: 'Charlie', idade: 22 }
]

function Encontrar_Usuario_Por_Id ( id )
{
	return listaDeUsuarios.find(usuario => usuario.id === id);
}

const procurar = Encontrar_Usuario_Por_Id ( 1 );
console.log ( procurar );
console.log ( `-------------\n` );

function Encontrar_Usuario_Por_Id_2 ( id )
{
	let usuario_Encontrado = null;

	listaDeUsuarios.forEach ( usuario =>
	{
		if ( usuario.id === id )
			usuario_Encontrado = usuario;
	});

	return usuario_Encontrado;
}

const procurar_2 = Encontrar_Usuario_Por_Id_2 ( 1 );
console.log ( procurar_2 );

