console.log ( valor );

/*
	01-		PS C:\Users> node .\04-erros.js
	02-		C:\Users\04-erros.js:1
	03-		console.log ( valor );
	04-					  ^

	05-		ReferenceError: valor is not defined
	06-			at Object.<anonymous> (C:\Users\04-erros.js:1:15)
	07-			at Module._compile (node:internal/modules/cjs/loader:1546:14)
	08-			at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
	09-			at Module.load (node:internal/modules/cjs/loader:1317:32)
	10-			at Module._load (node:internal/modules/cjs/loader:1127:12)
	11-			at TracingChannel.traceSync (node:diagnostics_channel:315:14)
	12-			at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
	13-			at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:166:5)
	14-			at node:internal/main/run_main_module:30:49

	15-		Node.js v22.6.0
*/

/*
	01-		Diretório de onde está o arquivo e o nome do arquivo que causou erro.
	02-		Linha do código que ocorreu o erro.
	03-		Copia o código da linha que causou o erro.
	04-		Assinala o ponto do código que causou o erro.

	05-		Uma mensagem do erro.

	06- a 14-
		Stack Trace
			• O que é o Stack Trace? É uma pilha de comandos que foram chamados internamente pelo Node para executar o programa. Ou seja, quando executamos um programa que está dentro de variáveis.js, escopo.js, internamente o Node chama muitas outras ferramentas nos bastidores, e isso ocorre de forma silenciosa normalmente.

			• Então, o Node chama as ferramentas que estão dentro dos arquivos para executar o nosso código, e normalmente não vemos isso acontecendo. Só vemos isso ocorrer quando há um erro, porque qualquer erro que ocorra no programa, além da mensagem de erro, ele exibe todo o código que rodou sem o nosso conhecimento, silenciosamente, que são os códigos internos do Node.js.

			• Por isso recebemos esse grande aviso, fornecendo muitas informações, é o que chamamos de Stack Trace, a pilha de comandos que foram utilizados para executar o nosso código.

	15-		Versão do node.js
*/
