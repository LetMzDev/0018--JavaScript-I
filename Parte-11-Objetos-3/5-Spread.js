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
	celular: [ "551", "007", "950" ],
	media_Poder: 7.5,
	escala_Poder: function ( media_poder )
	{
		return this.media_Poder >= media_poder ? "forte" : "fraco"
	}
}

function Exibir_Celular ( celular_1, celular_2 )
{
	console.log
	(
		`Entrar em contato com ${Personagem.nome}\n` +
		`Contato 1: ${celular_1}\n` +
		`Contato 2: ${celular_2}\n`
	)
}

Exibir_Celular ( Personagem.celular [ 0 ], Personagem.celular [ 1 ] );

console.log ( `------------------\n\n` );

Exibir_Celular ( ...Personagem.celular );

console.log ( `------------------\n\n` );

const dados_Envio =
{
	destinatario: Personagem.nome,
	...Personagem.enderecos[0]
}

console.log ( dados_Envio );
