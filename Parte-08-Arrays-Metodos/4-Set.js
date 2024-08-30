const nomes = [ "Ana", "Clara", "Maria", "Maria", "João", "João", "João" ];

const nomes_Atualizados = new Set ( nomes );

console.log ( `${nomes_Atualizados}` );
console.log ( nomes_Atualizados );

// Set é um conjunto, um tipo de dado que armazena valores únicos

const lista_Nomes_Atualizados =  [... nomes_Atualizados ]

console.log ( `${lista_Nomes_Atualizados}` );
console.log ( lista_Nomes_Atualizados );

// ou
const listaNomesAtualizados = [ ...new Set ( nomes )];