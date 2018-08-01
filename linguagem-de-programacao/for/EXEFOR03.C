/* Exemplo 3 de uso da estrutura de repetição for */

#include<conio.h>
#include<stdio.h>

int main(){
    char parada;
    int inicio, final, incremento, controle;

    printf("\nEntre com o valor inicial.......: ");
    scanf("%d",&inicio);
    printf("\nEntre com o valor final.........: ");
    scanf("%d",&final);
    printf("\nEntre com o valor do incremento.: ");
    scanf("%d",&incremento);
    printf("\nDeseja pausar a cada linha (S/N)? ");
    parada = getche();

    for(controle = inicio; controle < final;controle += incremento){
        printf("\n %d",controle);
        if (parada == 'S' || parada == 's'){
           getch();
        }
    }

    printf("\n\nDigite qualquer tecla para encerrar... ");
    getch();
    return 0;
}
