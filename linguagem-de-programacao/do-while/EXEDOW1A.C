/* Exemplo 1 de uso da estrutura de repetição do..while

   Experimente digitar uma letra.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	int idade = 0;
	system("cls");

	do{
	  printf("\nEntre com a idade em anos (1 a 130): ");
	  scanf("%d",&idade);
	  if (idade < 1 || idade > 130){
		 printf("\a\nA idade [%d] eh invalida!\n",idade);
	  }
	}while(idade < 1 || idade > 130);

    printf("\nVoce ja viveu aproximadamente %d dias!.",idade*365);
	printf("\n\nDigite qualquer tecla para encerrar..");
	getch();
	return 0;
}
