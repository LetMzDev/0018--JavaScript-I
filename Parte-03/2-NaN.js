const numero = 10;
const nome = 'Ana';

console.log ( Number.isNaN ( numero )); // false
console.log ( Number.isNaN ( nome )); // false
console.log ( Number.isNaN ( NaN )); // true

console.log ( "" );

console.log ( isNaN ( numero )); // false
console.log ( isNaN ( nome )); // true
console.log ( isNaN ( NaN )); // true

/*
	A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN.
	Enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN se tentar ser convertido para número.
*/
