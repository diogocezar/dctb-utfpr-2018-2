/* Exemplo 4 de uso da estrutura de repetição do..while

   Neste exemplo temos um laço dentro de outro laço.

   Experimente digitar uma letra quando for perguntado a quantidade de membros
   da família. A leitura passa corrida para a próxima.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
   int  total = 0, capacidade = 0, qtde_familias = 0, qtde_membros = 0, lotacao = 0;
   char havagas = 1;
   system("cls");

   do{
     printf("\nQual a capacidade maxima do onibus: ");
     scanf("%d",&capacidade);
     fflush(stdin);
     if (capacidade <= 0){
       printf("\nO veiculo deve possuir capacidade maior que zero!\n");
     }
   }while(capacidade <= 0);

   do{
     do{
       printf("\nEntre com a quantidade de membros da familia %d: ",qtde_familias+1);
       fflush(stdin);
       scanf("%d", &qtde_membros);
       if (qtde_membros <= 0){
          printf("\nA quantidade de membros nao pode ser menor que zero!\n");
       }
     }while(qtde_membros <= 0);

     if (lotacao + qtde_membros <= capacidade){
        lotacao += qtde_membros;
        qtde_familias++;
     }else{
        havagas = 0;
     }

   }while(lotacao < capacidade && havagas);

   printf("\n\nO total de passageiros e de %d e pertencem a %d familias",lotacao,qtde_familias);
   printf("\n\nDigite qualquer tecla para encerrar...");
   getch();
   return 0;
}
