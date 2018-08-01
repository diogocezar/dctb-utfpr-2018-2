/* Exemplo 3A de uso da estrutura de repetição while

   Neste exemplo o usuário já informa no início quantas notas ele irá digitar.
*/

#include<conio.h>
#include<stdio.h>

int main(){
	int   total_alunos, contador = 1;
	float media, nota, soma = 0; // soma recebe zero para nao ter lixo de memória

	printf("Calcula a media da turma\n");
	printf("========================\n");

	printf("\nQuantidade de alunos na turma: ");
	scanf("%d",&total_alunos);

	while(contador <= total_alunos){
        printf("\nEntre com a nota do aluno %d : ",contador);
		scanf("%f",&nota);
		soma += nota; //soma = soma + nota;
		contador++;   //contador = contador + 1;
	}

	media = soma / total_alunos;
	printf("\n\nA media da turma eh %.2f\n", media);
	if (media < 7){
       printf("\nA media esta muito baixa! Favor estudarem mais!");
	}else{
	   printf("\nA media esta boa. Parabens!");
	}

	printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
    return 0;
}
