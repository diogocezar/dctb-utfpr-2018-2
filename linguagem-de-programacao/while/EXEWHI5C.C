/* Exemplo 5B de uso da estrutura de repetição while

   Função _beep(frequencia,duracao em milissegundos)
           biblioteca stdlib.h  neste compilador

   Função  Beep(frequencia,duracao em milissegundos)
           biblioteca windows.h neste compilador

   Nesta versão para acelerar a execução do programa, a tela é toda limpa uma vez,
   depois imprimos o texto da frequencia no mesmo lugar, um por cima do outro.
   Para isto usamos a sequencia de escape \r, que volta para o começo da mesma linha.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	int codigo = 0;

    system("cls");

	while(codigo < 100){
	    printf("\rFrequencia: %3d",codigo);
	    _beep(codigo,100);
		codigo++;
	}

    return 0;
}
