
/* Exemplo 2 de uso do comando break */

#include<stdio.h>

int  indice, numero;
char opcao;

int main(){

   do{

     printf("\n Entre com um numero: ");
     scanf("%d",&numero);

     if (numero > 1){

       for(indice = 2 ; indice < numero; indice++){

          printf("\n %3d %% %3d = %3d", numero, indice, numero%indice);

          if (numero % indice == 0){
             printf("\n\n   break");
             break; //quebra o laco mais interno (for), já sei que nao é primo
          }
       }
     }

     if (indice < numero || numero <= 1){
        printf("\n\n O numero nao eh primo!");
     }else{
        printf("\n\n O numero eh primo!");
     }

     printf("\n\n Executar novamente? (S/N): ");
     fflush(stdin);
     opcao = getchar();

   }while(opcao != 'n' && opcao != 'N');

   return 0;
}
