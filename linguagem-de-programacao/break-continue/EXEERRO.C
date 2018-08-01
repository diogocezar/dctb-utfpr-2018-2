
/* Exemplo de erro usando break e continue */

#include<stdio.h>

int main(){

    if (1 == 1){
       printf("\nEntrou no if");
       break; //so pode ser colocado em laco de repeticao e switch
       printf("\nChegou ao final do if");
    }

    switch(171){ //Qualquer valor diferente de zero é verdadeiro

        case 2:printf("Teste");

        case 1:continue; //so pode ser colocado em laco de repeticao
    }

    return 0;
}
