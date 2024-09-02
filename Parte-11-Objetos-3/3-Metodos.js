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

const chave_Objeto =  Object.keys ( Personagem );

console.log ( chave_Objeto );

if ( !chave_Objeto.includes ( "enderecos" ))
	console.error ( "É necessário ter um endereço" );

console.log ( `------------------\n\n` );

const Meu_Objeto =
{
	a: 1,
	b: 2,
	c: 3
};

const chaves = Object.keys ( Meu_Objeto );
const valores = Object.values ( Meu_Objeto );
const entradas = Object.entries ( Meu_Objeto );

console.log ( chaves ); // Saída: ['a', 'b', 'c']
console.log ( valores ); // Saída: [1, 2, 3]
console.log ( entradas ); // Saída: [['a', 1], ['b', 2], ['c', 3]], um Array de Arrays

console.log ( `------------------\n\n` );

const Objeto_Original =
{
	a: 1,
	b: 2
};

const Objeto_Para_Copiar =
{
	b: 3,
	c: 4
};

const Fusao_De_Objetos = Object.assign ( {}, Objeto_Original, Objeto_Para_Copiar );

console.log ( Fusao_De_Objetos ); // Saída: { a: 1, b: 3, c: 4 }
