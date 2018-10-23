/**
 * Diogo Cezar
 * <diogo@diogocezar.com>
 * Exercício de Exemplo de Registros com Carros
*/

#include <stdio.h>

#define SIZE 5

typedef struct Car{
    int year;
    int code;
    float value;
} typeCar;

void print(typeCar * car, int size){
    int i;
    printf("IMPRIMINDO OS CARROS: \n\n");
    for(int i=0; i<size; i++){
        printf("CARRO [%d]\n", i+1);
        printf("\tCÓDIGO : %d\n", car[i].code);
        printf("\tANO : %d\n", car[i].year);
        printf("\tVALOR : %f\n", car[i].value);
    } 
}

void populate(typeCar * car, int size){
    int i;
    printf("POPULANDO OS CARROS: \n\n");
    for(int i=0; i<size; i++){
        printf("CARRO [%d]\n", i+1);
        printf("\tDIGITE O CÓDIGO :\n");
        scanf("%d", &car[i].code);
        printf("\tDIGITE O ANO : \n");
        scanf("%d", &car[i].year);
        printf("\tDIGITE O VALOR : \n");
        scanf("%f", &car[i].value);
    } 
}

int main(){
    typeCar car[SIZE];
    populate(car, SIZE);
    print(car, SIZE);
    return 0;
}