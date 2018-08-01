
/* Exemplo 3 de uso de switch com break

   Nesta solução as leituras das duas operações foram colocadas
   juntas pois eram identicas.

   Evita repetição do código, por outro lado perde a modularidade
   pois o código de uma opção está agora distribuído entre o switch
   e o if */

#include<stdio.h>

int main(){

	char opcao;
	int  operando1, operando2;

	do{
      printf("\n Menu de Opcoes");
      printf("\n ==============\n");
	  printf("\n <1> - Somar");
	  printf("\n <2> - Subtrair");
	  printf("\n <3> - Sair");
	  printf("\n\n Qual a opcao? ");

	  fflush(stdin);
	  opcao = getchar();

      if (opcao == '1' || opcao == '2'){
          printf("\n Digite o primeiro operando: ");
          scanf("%d",&operando1);
		  printf("\n Digite o segundo operando : ");
		  scanf("%d",&operando2);
      }

	  switch(opcao){
		 //49
		 case '1':printf("\n >> A soma eh %d\n", operando1 + operando2);
				  break;
		 //50
		 case '2':printf("\n >> A subtracao eh %d\n", operando1 - operando2);
				  break;
		 //51
		 case '3':return 0;

		 default: printf("\n\a Opcao Invalida digitada!\n");
	  }
	}while(1);

	return 0;
}
