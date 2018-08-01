/* Exemplo 5A de uso da estrutura de repetição while

   Função _beep(frequencia,duracao em milissegundos)
           biblioteca stdlib.h  neste compilador

   Função  Beep(frequencia,duracao em milissegundos)
           biblioteca windows.h neste compilador
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	int codigo = 0;

	while(codigo < 100){
	    printf("\nFrequencia: %d",codigo);
	    _beep(codigo,100);
		codigo++;
	}

    return 0;
}
