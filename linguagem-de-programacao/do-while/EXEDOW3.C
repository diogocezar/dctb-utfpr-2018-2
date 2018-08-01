/* Exemplo 3 de uso da estrutura de repetição do..while

   Usa-se do..while para repetir a execução do programa, caso o usuário queira.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
   int cont = 0,incremento = 0, quantidade = 0;
   char opcao;

   do{
     system("cls");

     do{
       printf("\nQual o numero da tabuada: ");
       fflush(stdin);
       scanf("%d",&incremento);
       if (incremento <= 0){
         printf("\n\a>>> Valor invalido. Deve ser maior que zero! <<<\n");
       }
     }while(incremento <= 0);

     do{
       printf("\nQual o ultimo termo a ser multiplicado: ");
       fflush(stdin);
       scanf("%d",&quantidade);
       if (quantidade <= 0){
         printf("\n\a>>> Valor invalido. Deve ser maior que zero! <<<\n");
       }
     }while(quantidade <= 0);

     cont = 0;
     do{
       printf("\n%3d x %3d = %3d",incremento,cont,incremento*cont);
       cont++;
     }while(cont <= quantidade);

     printf("\n\nDeseja fazer novamente (S/N)? ");
     opcao = getche();

   }while(opcao != 'n' && opcao != 'N');
   return 0;
}
