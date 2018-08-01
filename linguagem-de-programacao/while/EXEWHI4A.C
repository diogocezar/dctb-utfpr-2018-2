/* Exemplo 4A de uso da estrutura de repetição while */

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	int codigo = 0;

	system("cls");
	printf("Tabela ASCII");

	while(codigo < 255){
		printf("\n%3d - %c",codigo,codigo);
		codigo++;
	}

	printf("\n\nDigite qualquer tecla para encerrrar...");
    getch();
    return 0;
}
