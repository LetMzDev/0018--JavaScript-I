const nome = "RPG Maker";
const versao = "MZ";

const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`;

console.log ( citacao );

// Template Strings
console.log ( `O motor é o ${ nome } ${ versao }` );

// Senha Segura
const nome_User = `Rafa`;
const senha = 'SenhaSegura123' + nome_User.toUpperCase();
console.log ( senha );