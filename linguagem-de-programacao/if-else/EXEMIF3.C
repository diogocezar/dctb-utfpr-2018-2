/* Exemplo do uso de if com validações das entradas
   e de uso do comando return para devolver código de erro ao S.O

   Definido pelo programador, quando este programa devolver:
    Código  0: Nenhum erro durante a execu��o do programa
    Código -1: Erro no total de aulas
    Código -2: Erro na porcentagem máxima de faltas         */

#include<stdio.h>
#include<stdlib.h>

int main(){
   int totalAulas, porcMaximaFaltas, totalMaximoFaltas;

   printf("Entre com o total de aulas da disciplina (maior que zero): ");
   scanf("%d",&totalAulas);
   if (totalAulas <= 0){
      printf("\n\aTotal de Aulas invalido!");
      printf("\nO total deve ser maior que zero.");
      return -1;
   }

   printf("Entre com a porcentagem maxima de faltas (0%% a 100%%): ");
   scanf("%d",&porcMaximaFaltas);
   if (porcMaximaFaltas <= 0 || porcMaximaFaltas >= 100){
      printf("\n\aPorcentagem maxima de faltas invalida!");
      printf("\nA porcentagem de faltas deve ser maior que 0 e menor que 100.");
      return -2;
   }

   totalMaximoFaltas = totalAulas*porcMaximaFaltas/100;
   printf("\nO total maximo de faltas eh : %d\n\n",totalMaximoFaltas);
   system("pause");
   return 0;
}
