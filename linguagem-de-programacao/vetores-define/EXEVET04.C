/* Exemplo 3 de uso de vetores e de constantes

   Este exemplo verifica se o símbolo digitado é uma vogal
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

#define TOTAL_VOGAL 5

char  letra, vogal[] = {'A','E','I','O','U'}; // Já cria um vetor de cinco posições e
                                              // inicializa-o com os valores passados
int   cont;

int main(){
   system("cls");

   do{
      printf("\nEntre com uma vogal: ");
      letra = getche();
      for (cont = 0; cont < TOTAL_VOGAL; cont++){
          if (letra == vogal[cont] || letra == (vogal[cont] + 32)){
             /* somar 32 converte uma letra de maiusculo para minusculo,
                veja a tabela ASCII */
             break; //achou
          }
      }
      if (cont == TOTAL_VOGAL){ // fez todo o for e não achou a vogal
         printf("\n\n\aO caracter [%c] nao eh uma vogal!\n",letra);
      }
   }while(cont == TOTAL_VOGAL);

   printf("\n\nAgora a entrada eh valida!\n\n");
   system("pause");
   return 0;
}
