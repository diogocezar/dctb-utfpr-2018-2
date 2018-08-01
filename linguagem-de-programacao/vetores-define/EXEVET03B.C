/* Exemplo 3A de uso de vetores

   Um vetor quando é criado possui lixo de memória em cada posição dele.

   Uma solução, é durante a declaração já inicializar o vetor com uma lista de valores.
   O tamanho do vetor será a quantidade de itens na lista.

   Só é possível passar uma lista de valores para o vetor em sua declaração.

   Só que esta solução não é flexível, caso se queira alterar o tamanho do vetor
   através de constantes.
*/

#include<conio.h>
#include<stdio.h>

int main(){
	int notas[] = {0,0,0,0,0,0,0,0,0,0}, indice;

	printf("\n\nListagem de Dados:");
	for(indice = 0; indice < 10; indice++){
	    printf("\n nota %2d = %3d",indice,notas[indice]);
	}
    printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
