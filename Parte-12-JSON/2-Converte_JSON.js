const estudante = require ( "./estudante.json" );

const string_Estudante = JSON.stringify ( estudante );

console.log ( string_Estudante );
console.log ( `-------------\n` );
console.log ( typeof string_Estudante );
console.log ( `-------------\n` );

const objeto_Estudante = JSON.parse ( string_Estudante );

console.log ( objeto_Estudante );
console.log ( `-------------\n` );
console.log ( typeof objeto_Estudante );
console.log ( `-------------\n` );



const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor