
/* Exemplo de uso do comando continue */

#include<stdio.h>

int   cont = 0, idade;
float somaidades = 0;

int main(){

   printf("\n Calcula a media de idades\n");
   printf("\n Digite 0 para encerrar a entrada");
   printf("\n ================================\n");

   do{
     printf("\n Entre com uma idade: ");
     scanf("%d",&idade);

     if (idade == 0){
         break; // quebra o laco
     }else
       if (idade < 1){
           printf("\n\a Idade invalida!\n");
           continue;  // pula para o teste do laco
       }

     somaidades += idade;
     cont++;

   }while(1);// loop infinito

   if (cont == 0){
       printf("\n\a Nenhuma idade digitada!\n");
   }else{
       printf("\n Foram digitadas %d idades, ",cont);
       printf("e a media eh %.2f\n",(somaidades/cont));
   }

   return 0;
}
