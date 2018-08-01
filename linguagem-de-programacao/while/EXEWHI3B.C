/* Exemplo 3B de uso da estrutura de repetição while

   Neste exemplo o usuário já informa no início quantas notas ele irá digitar.

   Também foi realizada a validaçào de todas as entradas.
*/

#include<conio.h>
#include<stdio.h>

int main(){
    int   total_alunos, contador = 1;
	float media, nota, soma = 0; // soma recebe zero para nao ter lixo de memória

	printf("Calcula a media da turma\n");
	printf("========================\n");

    total_alunos = 0; // receber valor invalido, para forcar entrar no while

	while(total_alunos <= 0){
	  printf("\nQuantidade de alunos na turma: ");
	  scanf("%d",&total_alunos);
	  if (total_alunos <= 0){
        printf("\n\aA quantidade de alunos nao pode ser menor ou igual a zero!\n");
      }
	}

	while(contador <= total_alunos){
        printf("\nEntre com a nota do aluno %d (0 a 10): ",contador);
		scanf("%f",&nota);
		if (nota >= 0 && nota <= 10){
		   soma += nota; //soma = soma + nota;
		   contador++;   //contador = contador + 1;
		}else{
		   printf("\n\aA nota deve ser de 0 a 10!\n");
        }
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
