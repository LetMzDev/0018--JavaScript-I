const Personagem =
{
	nome: "Sophie",
	classe: "Maga",
	nivel: "20"
}

/*
	Objeto literal

	Um objeto literal é um objeto criado com a notação literal, ou seja, uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

	Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. 
*/

const Personagem_2 = Personagem;

Personagem_2.nome = "Sophie Y";

console.log ( Personagem.nome );
console.log ( Personagem_2.nome );
console.log ( `\n` );

Personagem_2.nome = "Sophie";
console.log ( Personagem.nome );
console.log ( Personagem_2.nome );
console.log ( `\n` );

const Personagem_3 = Object.create ( Personagem );
Personagem_3.nome = "Zaky";
console.log ( Personagem.nome );
console.log ( Personagem_3.nome );
console.log ( `\n` );


const frutas = ['abacate', 'laranja', 'maça'];
console.log(frutas);
const frutas2 = [...frutas];
frutas2[1] = 'limão';

console.log(frutas);
console.log(frutas2);