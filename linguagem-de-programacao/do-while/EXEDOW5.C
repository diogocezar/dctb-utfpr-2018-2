/* Exemplo 5 de uso da estrutura de repetição do..while

   Exemplo da criação de menus com do..while.
*/

#include<conio.h>
#include<stdio.H>
#include<stdlib.h>

int main(){
    int operando1, operando2;
	char opcao;

	do{
	  system("cls");

      printf("1 - Soma\n2 - Subtrair\n3 - Sair\n\nQual opcao? ");
	  opcao = getche();

	  if (opcao == '1' || opcao == '2'){

		  printf("\n\nEntre com o primeiro numero: ");
		  fflush(stdin);
		  scanf("%d",&operando1);
		  printf("\nEntre com o segundo numero : ");
		  fflush(stdin);
		  scanf("%d",&operando2);

		  if (opcao == '1'){
             printf("\n A soma eh: %d", operando1 + operando2);
		  }else{
             printf("\n A subtracao eh: %d", operando1 - operando2);
		  }

	  }else
		  if (opcao != '3'){
			 printf("\a\n\nOpcao Invalida!.");
		  }

	  printf("\n\nDigite qualquer tecla para continuar..");
      getch();
	}while(opcao != '3');

	return 0;
}
