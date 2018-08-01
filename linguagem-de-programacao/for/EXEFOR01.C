/* Exemplo 1 de uso da estrutura de repetição for */

#include<stdio.h>

int main(){
	int contador, limite;

	printf("\nDigite o limite de impressao: ");
	scanf("%d",&limite);

	for (contador = 1; contador <= limite; contador++){
	    printf("\n %d",contador);
	}

	return 0;
}
