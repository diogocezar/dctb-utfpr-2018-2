
/* Exemplo 1 de uso do switch */

#include<stdio.h>

int main(){

    char opcao;
	int  numero;

	do{
	  printf("\n Entre com o valor do numero: ");
	  scanf("%d",&numero);

	  switch(numero){
		 case 1: printf("\n Entrou no case 1");

		 case 2: printf("\n Entrou no case 2");

		 case 3: printf("\n Entrou no case 3");

		 default:printf("\n Entrou no default");
	 }

	 printf("\n\n Deseja fazer novamente (S/N)? ");
	 fflush(stdin);
	 opcao = getchar();

	}while(opcao != 'n' && opcao != 'N');

	return 0;
}
