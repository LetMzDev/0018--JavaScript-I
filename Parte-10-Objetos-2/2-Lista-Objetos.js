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
	endereco:
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
	]
}

console.log ( Personagem.skills [ 1 ]);

console.log ( `\n\n` );
console.log ( Personagem );
console.log ( `\n\n` );
console.log ( Personagem.endereco [ 1 ].rua );
console.log ( `\n\n` );

Personagem.endereco.push (
	{
		rua: "Av Nuvens",
		numero: "100 YL",
		complemento: ""
	}
);

console.log ( Personagem.endereco );
console.log ( `\n\n` );

const lista_Endereco_Com_Complemento = Personagem.endereco.filter (( endereco ) =>
{
	return endereco.complemento;
}); // Strings vazias retornam false

console.log ( "Lista de Endereços que tenham Complemento" );
console.log ( lista_Endereco_Com_Complemento );
