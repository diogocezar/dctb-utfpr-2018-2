/* Exemplo 2B de uso da estrutura de repetição do..while

   Para forçar um valor inválido nas variáveis antes das leituras,
   para caso o usuário digite letra e o scanf não faça nada.

   As variáveis receberam 0 (que neste programa é um valor inválido)
   na declaração.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	double salario=0, aumento=0;

	system("cls");
	printf("Calcula o novo salario\n");
	printf("======================\n");

	do{
	  printf("\nEntre com o salario: ");
	  fflush(stdin);
	  scanf("%lf",&salario);
	  if (salario <= 0){
		 printf("\a\nValor invalido de salario.");
		 printf("\nO salario deve ser maior que zero!\n");
	  }
	}while(salario <= 0);

	do{
	  printf("\nEntre com a porcentagem de aumento (0 a 1): ");
	  fflush(stdin);
	  scanf("%lf",&aumento);
	  if (aumento > 1 || aumento <= 0){
		 printf("\a\nValor invalido de aumento.");
         printf("\nO aumento deve ser menor ou igual a 1 e maior que zero!\n");
	  }
	}while(aumento > 1 || aumento <= 0);

	printf("\n\nO aumento foi de %.2lf ",salario*aumento);
	printf("e o novo salario sera %.2lf",salario + (salario*aumento));

	printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
