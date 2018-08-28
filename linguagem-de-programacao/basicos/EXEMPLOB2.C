/* Exemplo de uso da funcao printf básico
   O comando \n dentro do printf é usado para pular linha durante a impressão
*/

#include<stdio.h>

char letra = 'Z';
int  numero = 65;

int main(){
    float  vendas  = 250.6F;
    double salario = 250.6;
    printf("Valor caracter %c\n",letra);
    printf("Valor inteiro  %d\n",letra);
	printf("Valor inteiro  %d\n",numero);
	printf("Valor real (float)  %f\n",vendas);
	printf("Valor real (double) %lf\n\n",salario);
	printf("Varios juntos:\n%c\n%f\n%lf",numero,vendas,salario);
    return 0;
}

