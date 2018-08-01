/* Imprimindo os números de 1 a 10, cada número em uma linha

   Nesta versão utiliza-se uma estrutura de repetição, o while.
   O código também fica pequeno, mais o melhor, ele fica flexível e
   fácil de dar manutenção.

   Vamos supor que queiramos imprimir 100 números, basta mudar um número
   no código fonte, e recompilar.
*/

#include<conio.h>
#include<stdio.h>

int main(){
	int numero = 0;
	while(numero < 10){
		printf("\n%d",numero++); // numero += 1; ou numero = numero + 1;
	}
	printf("\n\nDigite qualquer tecla para encerrrar...");
    getch();
    return 0;
}
