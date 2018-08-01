/* Exemplo 3C de uso de vetores

   Um vetor quando é criado possui lixo de memória em cada posição dele.

   Nesta solução as posições do vetor são inicializadas através de um laço de
   repetição. O que torna o código flexível. Caso se queira aumentar ou diminuir
   a quantidade de elementos do vetor, basta mudar a constante e recompilar o código.
*/

#include<conio.h>
#include<stdio.h>

#define TOTAL 15

int main(){
	int notas[TOTAL], indice;

    for(indice = 0; indice < TOTAL; indice++){
	    notas[indice] = 0;
	}

	printf("\n\nListagem de Dados:");
	for(indice = 0; indice < TOTAL; indice++){
	    printf("\n nota %2d = %3d",indice,notas[indice]);
	}
    printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
