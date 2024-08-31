const estudante =
{
	nome: "Rafa",
	idade: 21,
	cpf: "0291-114-007",
	turma: "JavaScript",
	notas: [ 80, 90, 75 ]
}

console.log ( `O nome do estudante: ${estudante.nome}` );
console.log ( `Os três primeiros números do CPF: ${estudante.cpf.substring ( 0, 3 )}` );
