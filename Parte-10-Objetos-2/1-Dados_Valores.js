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
	skills: [ "Bola de fofo", "Espada de fogo", "Cura de fogo" ]
}

console.log ( Personagem.skills [ 1 ]);

Personagem.endereco =
{
	rua: "Rua Estrada do Paraíso",
	numero: "1000Y",
	complemento: "W"
}

console.log ( `\n\n` );
console.log ( Personagem );
console.log ( `\n\n` );
console.log ( Personagem.endereco.rua );

