const Pessoa =
{
	nome: "Maria",
	idade: 30,
	apresentar: function()
	{
		console.log ( `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.` );
	}
};

Pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.