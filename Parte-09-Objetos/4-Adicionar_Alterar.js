const estudante =
{
	nome: "Rafa",
	idade: 21,
	cpf: "0291-114-007",
	turma: "JavaScript",
	notas: [ 80, 90, 75 ]
}

console.log ( estudante );
console.log ( `${estudante.notas}` );

estudante.notas.push ( 95 );	// Adicionar novo elemento ao array
console.log ( `${estudante.notas}` );
console.log ( estudante );

estudante.idade = 22;	// Alterando valor
console.log ( estudante );

estudante.id = "001";	// Criando uma nova propriedade
console.log ( estudante );
console.log ( `${estudante.id}` );

// Possível criar um objeto vazio e depois atribuir propriedades e valores
const estudante_2 = {};
estudante_2.id = "001";
