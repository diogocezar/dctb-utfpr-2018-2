/* Exemplo basico de if e else

   Esta soluçãoo é bem melhor, pois o teste é feito apenas uma vez.

   Caso o numero for impar o resto da divisao é 1.
   Na linguagem C qualquer número diferente de zero é VERDADEIRO, ou seja,
   caso o número seja ímpar, o if é atividado.                             */

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
  int numero;

  system("cls");
  printf("Digite o numero : ");
  scanf("%d",&numero);

  if (numero % 2)
    printf("\nO numero %d eh impar",numero);
  else
	printf("\nO numero %d eh par",numero);

  printf("\n\nDigite uma tecla para encerrar");
  getch();
  return 0;
}
