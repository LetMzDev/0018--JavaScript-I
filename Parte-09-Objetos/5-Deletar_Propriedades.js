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

console.log ( Personagem );
console.log ( "" );

delete Personagem.aliado;
console.log ( Personagem );
console.log ( "" );

// ou
delete Personagem [ "status" ];
console.log ( Personagem );
console.log ( "" );

// O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação.
const delete_Propriedade = delete Personagem.nivel;
const delete_Propriedade_2 = delete Personagem.celular;
console.log ( Personagem );
console.log ( delete_Propriedade );	// true
console.log ( delete_Propriedade_2 ); // true
console.log ( "" );
// Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
