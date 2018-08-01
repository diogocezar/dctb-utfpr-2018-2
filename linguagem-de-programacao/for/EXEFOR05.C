/* Exemplo 5 de uso da estrutura de repetição for

   Fluxo de execução do for
   1 - inicializacao
   2 - teste
   3 - comandos
   4 - incremento
   5 - teste

   A função printf retorna o total de caracteres impressos, como o printf da condição está dentro
   de um operador ternário, e sempre imprimi alguma coisa, o operador ternário retorna um número diferente
   de zero, o que faz que somente a condição x < 5 interfira no for.
*/

#include<conio.h>
#include<stdio.h>

int main(){
   int x;
   printf("Antes do for: %d\n",x);
   for( x = 0  ,printf("\nApos inicializacao: %d", x) ;
       (x < 5 ? printf("\n\nx < 5 = Verdadeiro") : printf("\nx < 5 = Falso")) && x < 5 ;
        x++    ,printf("\nApos incremento: %d", x)
      )
   {
      printf("\nDentro: %d", x); //Bloco de comandos
   }
   printf("\n\nApos o final do for: %d", x);
   getch();
}
