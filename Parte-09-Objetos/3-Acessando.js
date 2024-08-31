const estudante =
{
	nome: "Rafa",
	idade: 21,
	cpf: "0291-114-007",
	turma: "JavaScript",
	notas: [ 80, 90, 75 ]
}

function Exibir_Info_Estudante ( obj_estudante, info_estudante )
{
	return obj_estudante [ info_estudante ];
}

console.log ( `${ estudante [ "nome" ]}` );

console.log ( `${Exibir_Info_Estudante ( estudante, "idade" )}` );

/*
	Vantagem de acessar o objeto com o uso de [´] é por permitir passar o dado como uma variável ( ver a função )
*/