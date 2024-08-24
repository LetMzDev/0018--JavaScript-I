const nota_1 = 8;
const nota_2 = 6.8;
const nota_3 = Number.parseInt ( '5' );

let total_Nota = nota_1 + nota_2;
console.log ( total_Nota );
console.log ( "" );

total_Nota = nota_1 + nota_2 + nota_3;
console.log ( total_Nota );
console.log ( "" );

const media = total_Nota / 3;
console.log ( "A média é " + media.toFixed ( 2 ) );
console.log ( `A média é ${ media.toFixed ( 2 )}` );
