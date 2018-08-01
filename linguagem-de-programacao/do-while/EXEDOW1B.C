/* Exemplo 1B de uso da estrutura de repetição do..while

   Nesta solução foi utilizada a função fflush para limpar a memória do teclado
   antes de ler novamente.

   Caso tente digitar letra para o scanf lendo número (inteiro ou real), o scanf
   não le nada. Não altera o valor da variável, e deixa o que o usuário digitou
   na memória do teclado. Com o scanf dentro de um laço, vai se tentar ler novamente,
   mas como já tem informação na memória do teclado, não chega-se nem a perguntar
   a informação ao usuário, e o programa fica em laço infinito.

   Por isto, quando se tem uma leitura dentro de um laço de repetição, o ideal
   e limpar a memória do teclado antes da leitura, com a função fflush.

   A função fflush, pertence a biblioteca stdio.h. E limpa o valor da memória
   especificada. Chamando esta função passando o parâmetro strdin (entrada padrão),
   a memória do teclado é limpa.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int main(){
	int idade = 0;
	system("cls");

	do{
	  printf("\nEntre com a idade em anos (1 a 130): ");
	  fflush(stdin); // Evite que já tenha algo na memória do teclado
	  scanf("%d",&idade);
	  if (idade < 1 || idade > 130){
		 printf("\a\nA idade [%d] eh invalida!\n",idade);
	  }
	}while(idade < 1 || idade > 130);

    printf("\nVoce ja viveu aproximadamente %d dias!.",idade*365);
	printf("\n\nDigite qualquer tecla para encerrar..");
	getch();
	return 0;
}
