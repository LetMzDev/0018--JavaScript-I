const Ficha_Guerreiro =
{
	nome: "Aragorn",
	classe: "guerreiro"
}

const Equip_Guerreiro =
{
	espada: "Andúril",
	capa: "capa élfica +2"
}

let guerreiro = { Ficha_Guerreiro, Equip_Guerreiro }
console.log ( guerreiro ); //  os objetos ainda estão separados

console.log ( `------------------\n\n` );

guerreiro = { ...Ficha_Guerreiro, ...Equip_Guerreiro }
console.log ( guerreiro ); // Um único objeto

console.log ( `------------------\n\n` );

const objetoOriginal = {
	nome: "GPT",
	linguagem: "JavaScript",
	framework: "Node.js",
	versao: "14.17.3"
  };
  
  const objetoNovo = {
	...objetoOriginal,
	atualizacao: "15.0.0"
  }

console.log ( objetoNovo)