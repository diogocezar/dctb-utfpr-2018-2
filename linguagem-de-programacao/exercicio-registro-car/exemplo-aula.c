#include <stdio.h>
#define SIZE 2

typedef struct Car{
    int ano;
    int codigo;
    float valor;
} typeCar;

void ler(typeCar * carros){
    int i;
    for(i=0; i<SIZE; i++){
        printf("CARRO %d\n", i+1);
        printf("DIGITE O ANO\n");
        scanf("%d", &carros[i].ano);
        printf("DIGITE O CODIGO\n");
        scanf("%d", &carros[i].codigo);
        printf("DIGITE O VALOR\n");
        scanf("%f", &carros[i].valor);
    }
}

void imprimir(typeCar * carros){
    int i;
    for(i=0; i<SIZE; i++){
        printf("CARRO %d\n", i+1);
        printf("ANO : %d\n", carros[i].ano);
        printf("CODIGO: %d\n", carros[i].codigo);
        printf("VALOR: %f\n", carros[i].valor);
    }
}

int main(){
    typeCar carros[SIZE];
    ler(carros);
    imprimir(carros);
    return 0;
}