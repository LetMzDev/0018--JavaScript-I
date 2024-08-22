// Template literals ou template strings

const nome = 'Alice';
console.log ( `Olá, meu nome é ${nome}.` );

// -------------------------------------------------------

// Escopo de bloco com let

if ( 1 > 0 )
{
	let nome = 'Ana';
	console.log ( nome ); // ‘Ana’
}

// variável `nome` não está acessível
console.log ( nome ); // Error: nome is not defined

// -------------------------------------------------------