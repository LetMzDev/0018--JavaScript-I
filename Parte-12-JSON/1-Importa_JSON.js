const estudante = require ( "./estudante.json" );

console.log ( estudante );
console.log ( estudante.nome );

console.log ( `-------------\n` );

const chaves = Object.keys ( estudante );
console.log ( chaves );
