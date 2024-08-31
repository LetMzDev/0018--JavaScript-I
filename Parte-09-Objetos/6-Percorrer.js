const Personagem =
{
	nome: "Gandalf",
	classe: "mago",
	nivel: "20",
	aliado:
	{
		nome: "Saruman",
		classe: "mago"
	},
	status: "desaparecido"
}

for ( let propriedade in Personagem )
	console.log ( `${propriedade}: ${Personagem [ propriedade ]}` );

// Retorna
/*
	nome: Gandalf
	classe: mago
	nivel: 20
	aliado: [object Object]
	status: desaparecido
*/
console.log ( `\n\n\n\n\n` );

for ( let propriedade in Personagem )
{
	if ( typeof Personagem [ propriedade ] === 'object' )
	{
		for ( let sub_Propriedade in Personagem [ propriedade ])
			console.log ( `${sub_Propriedade}: ${Personagem [ propriedade ] [ sub_Propriedade ]}` );
	}

	else
		console.log ( `${propriedade}: ${Personagem [ propriedade ]}` );
}

// Retorna
/*
	nome: Gandalf
	classe: mago
	nivel: 20
	nome: Saruman
	classe: mago
	status: desaparecido
*/