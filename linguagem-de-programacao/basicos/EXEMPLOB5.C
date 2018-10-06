/* Exemplo de uso da funcao System.
   Ela executa um comando no sistema operacional.

   No Console do Windows.
     cls   - limpa a tela
     color - altera a cor de fundo e da fonte do console.
     pause - dá uma mensagem de texto e espera o usuário digitar uma tecla */

#include<stdio.h>
#include<stdlib.h>

double salario, porcAumento, novoSalario;

int main(){
  system("cls");
  system("color 17");
  printf("\nEntre com o salario: ");
  scanf("%lf",&salario);

  system("cls");
  printf("\nEntre com a porcentagem de aumento (0 a 100): ");
  scanf("%lf",&porcAumento);

  novoSalario = porcAumento/100*salario+salario;

  system("cls");
  printf("\n\aO novo salario eh %lf\n\n",novoSalario);
  system("pause"); // Quem define a mensagem � o sistema operacional.

  system("color 07");
  return 0;
}

/* color sem parametros volta as cores padroes - n�o funciona via system,
   so no console do Sistem Operacional Windows                           */
