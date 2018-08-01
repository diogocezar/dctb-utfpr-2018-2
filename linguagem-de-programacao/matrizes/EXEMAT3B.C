/* Exemplo 3B de uso de matrizes com textos

   Nesta solução foi trocada a função gets pela fgets.

   Com a função fgets pode-se impedir que o seja armazenado um texto maior que o
   tamanho do vetor.

   Caso o usuário digite uma quantidade de caracteres menor que o tamanho do vetor
   a função gets armazena o enter digitado, por isso deve ser eliminado posteriormente
*/

#include<conio.h>
#include<stdio.h>
#include<string.h>

#define QUANT_PESSOAS     3
#define MAXIMO_CARACTERES 20

char nomes[QUANT_PESSOAS][MAXIMO_CARACTERES];
int  idades[QUANT_PESSOAS];

int linha, posUltimoCaracter;

int main(){

	for(linha = 0; linha < QUANT_PESSOAS; linha++){

	   printf("\nDados da pessoa %d\n",linha+1);
       printf("Entre com o nome : ");

	   fflush(stdin);
	   fgets(nomes[linha],MAXIMO_CARACTERES,stdin);

	   //para retirar o enter no final da leitura do fgets
	   posUltimoCaracter = strlen(nomes[linha])-1;
	   if (nomes[linha][posUltimoCaracter] == '\n'){
	      nomes[linha][posUltimoCaracter] = '\x0';
	   }

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
