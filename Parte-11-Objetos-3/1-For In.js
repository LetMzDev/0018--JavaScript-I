const Personagem =
{
	nome: "Zaky",
	classe: "Guerreiro",
	nivel: "10",
	aliado:
	{
		nome: "Selina",
		classe: "Maga"
	},
	status: "Aprendiz",
	domina_Elemento: true,
	skills: [ "Bola de fofo", "Espada de fogo", "Cura de fogo" ],
	enderecos:
	[
		{
			rua: "Rua Estrada do Paraíso",
			numero: "1000 YL",
			complemento: "Logo ali"
		},
		{
			rua: "Rua Estrada de Pedras",
			numero: "50",
			complemento: "Esquina"
		}
	],
	media_Poder: 7.5,
	escala_Poder: function ( media_poder )
	{
		return this.media_Poder >= media_poder ? "forte" : "fraco"
	}
}

for ( let chave in Personagem )
{
	const tipo = typeof Personagem [ chave ];

	if ( tipo !== "function" )
		console.log ( `${ chave }: ${Personagem [ chave ]}` );
}