/* Exemplo 4 de uso da estrutura de repetição for */

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int  linha, coluna, totalLinhas;
char opcao;

int main(){
    do{
       system("cls");
       printf("\nEntre com o total de linhas (1 a 25): ");
       scanf("%d",&totalLinhas);

       for(linha = 1; linha <= totalLinhas; linha++){
           for(coluna = 1; coluna <= linha; coluna++){
               printf("*");
           }
           printf("\n");
       }

       printf("\n\nDeseja repetir o programa (S/N)? ");
       opcao = getche();
    }while(opcao == 's' || opcao == 'S');
    return 0;
}
