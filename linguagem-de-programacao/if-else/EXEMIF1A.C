/* Exemplo básico de if

   Uma péssima solução para este problema, pois sempre é feito dois testes,
   mesmo quando já se sabe que o número é par */

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
  int numero;

  system("cls");
  printf("Digite o numero : ");
  scanf("%d",&numero);

  if ((numero % 2) == 0){
	  printf("\nO numero %d eh par",numero);
  }
  if ((numero % 2) == 1){
	  printf("\nO numero %d eh impar",numero);
  }

  printf("\n\nDigite uma tecla para encerrar");
  getch();
  return 0;
}
