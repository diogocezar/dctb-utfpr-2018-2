/* Exemplo 2 de uso da estrutura de repetiчуo while

   Neste exemplo o usuário pode digitar quantas notas ele quiser.
*/

#include<conio.h>
#include<stdio.h>

int main(){
	float nota  = 0; // A nota digitada
	int   total = 0; // total de notas validas
	float soma  = 0; // A soma das notas
	float media = 0; // A media calculada das notas

	printf("Calcula a media da turma\n");
	printf("========================\n");
    printf("Para encerrar a leitura entre com uma nota negativa!\n\n");

	while(nota >= 0){
		printf("\nEntre com a nota : ");
		scanf("%f",&nota);
		if (nota >= 0){
		  total++;      // total = total + 1;
		  soma += nota; // soma  = soma + nota;
		}
	}

	if (total > 0){ //Verifique se pelo menos uma nota valida foi digitada.
	   media = soma / total;
	   printf("\n\nFoi digitado %d notas, e a media eh %.2f",total,media);
    }else{
       printf("\n\nNenhuma nota digitada!");
    }

	printf("\n\nDigite qualquer tecla para encerrar...");
	getch();
	return 0;
}
