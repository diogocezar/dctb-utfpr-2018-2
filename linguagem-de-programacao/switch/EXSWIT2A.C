
/* Exemplo 2 de uso do switch */

#include<stdio.h>

int main(){

    char opcao;
	int  total, filhos;

	do{
      printf("\n Quantidade de pessoas na familia\n");
      printf("\n <1> - Nao tem filhos\n <2> - Possui filhos\n");
	  printf("\n Entre com o seu tipo: ");
	  fflush(stdin);
	  scanf("%d",&opcao);
      total = 1;

	  switch(opcao){

		 case 2:printf("\n Quantidade de filhos? ");
		        scanf("%d",&filhos);
		        total += filhos;

		 case 1:printf("\n Mora com um(a) companheiro(a) (S/N)? ");
		        fflush(stdin);
		        opcao = getchar();
		        if (opcao == 's' || opcao == 'S'){
		          total += 1;
		        }
		        printf("\n Total de membros na familia: %d",total);
		        break;

         default:printf("\n\a Opcao invalida!");
	 }

	 printf("\n\n Deseja fazer novamente (S/N)? ");
	 fflush(stdin);
	 opcao = getchar();

	}while(opcao != 'n' && opcao != 'N');

	return 0;
}
