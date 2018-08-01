/* Exemplo 1 de uso de vetores */

#include<conio.h>
#include<stdio.h>

int main(){
	int notas[10], indice;

	printf("\nLeitura de Notas\n");
	for(indice = 0; indice < 10; indice++){
		printf("Entre com a nota %2d: ",indice+1);
		scanf("%d",&notas[indice]);
	}
	printf("\n\nListagem de Dados:");
	for(indice = 0; indice < 10; indice++){
	    printf("\n nota %2d = %3d",indice+1,notas[indice]);
	}
    printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
