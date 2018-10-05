/* Exemplo basico de if e else

   Esta solução é bem melhor, pois o teste é feito apenas uma vez. */

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
  int numero;

  system("cls");
  printf("Digite o numero : ");
  scanf("%d",&numero);

  if ((numero % 2) == 0)
	printf("\nO numero %d eh par",numero);
  else
	printf("\nO numero %d eh impar",numero);

  printf("\n\nDigite uma tecla para encerrar");
  getch();
  return 0;
}
