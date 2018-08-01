/* Exemplo 2 de uso da estrutura de repetição for */

#include<conio.h>
#include<stdio.h>

int main(){
	int indice, inicio, fim, divisor;

	printf("\nEntre com o inicio do intervalo: ");
	scanf("%d",&inicio);
	printf("\nEntre com o fim do intervalo...: ");
	scanf("%d",&fim);
	printf("\nProcurar os divisores do numero: ");
	scanf("%d",&divisor);

	for(indice = inicio; indice <= fim; indice++){
		if (indice % divisor == 0){
			printf("\n\t%3d",indice);
		}
	}

	printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
