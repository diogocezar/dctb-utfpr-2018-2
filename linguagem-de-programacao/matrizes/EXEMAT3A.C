/* Exemplo 3A de uso de matrizes com textos */

#include<conio.h>
#include<stdio.h>

#define QUANT_PESSOAS     3
#define MAXIMO_CARACTERES 20

char nomes[QUANT_PESSOAS][MAXIMO_CARACTERES];
int  idades[QUANT_PESSOAS];

int linha;

int main(){

	for(linha = 0; linha < QUANT_PESSOAS; linha++){

	   printf("\nDados da pessoa %d\n",linha+1);
       printf("Entre com o nome : ");
	   fflush(stdin);
	   gets(nomes[linha]);

	   printf("Entre com a idade: ");
	   fflush(stdin);
	   scanf("%d",&idades[linha]);
    }

    printf("\n Nr Nome\t\t\t Idade");

    for(linha = 0; linha < QUANT_PESSOAS; linha++){
	   printf("\n%3d %s\t\t\t  %3d",linha+1,nomes[linha],idades[linha]);
    }

    printf("\n\nDigite qualquer tecla para encerrar...");
    getch();
	return 0;
}
