console.log(`Lista de times`);

const time_A = `São Paulo`;

console.log(time_A);

console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array
(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`,
);

console.log ( listaDeDestinos );

listaDeDestinos.push ( `Curitiba` );
console.log ( `Atualizada a lista` );
console.log ( listaDeDestinos );

listaDeDestinos.splice ( 2, 1 );
console.log ( `Removido um elemento da lista` );
console.log ( listaDeDestinos );