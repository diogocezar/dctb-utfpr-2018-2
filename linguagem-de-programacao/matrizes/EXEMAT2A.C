/* Exemplo 2A de uso de Matriz

   Nesta solução apesar de exister uma constante simbólica para definir quantas
   notas um aluno tem, caso a altere, o calculo da média não se adapta a esta nova
   realidade. Esta solução NÃO É BOA.
*/

#include<conio.h>
#include<stdio.h>

#define QUANT_ALUNOS 3
#define QUANT_NOTAS  3

int   notas[QUANT_ALUNOS][QUANT_NOTAS], linha, coluna;
float media;

int main(){

	 printf("\nEntrada de Notas da Turma\n\n");

	 for (linha = 0; linha < QUANT_ALUNOS; linha++){

		 for (coluna = 0; coluna < QUANT_NOTAS; coluna++){
  	         printf("Aluno %d, nota %d: ",linha+1,coluna+1);
			 scanf("%d",&notas[linha][coluna]);
		 }
		 printf("\n");
	 }

	 printf("\nListagem de Notas\n");
	 printf("\nAluno\tNota 1\tNota 2\tNota 3\tMedia");

	 for (linha = 0; linha < QUANT_ALUNOS; linha++){

		 media  = (notas[linha][0] + notas[linha][1] + notas[linha][2])/QUANT_NOTAS;

		 printf("\n%5d\t%5d\t%5d\t%5d\t%5.2f",linha+1,notas[linha][0],notas[linha][1],notas[linha][2],media);
	 }

	 printf("\n\nDigite qualquer tecla para encerrar...");
	 getch();
	 return 0;
}



