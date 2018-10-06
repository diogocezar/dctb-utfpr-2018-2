/* Exemplo 1 de uso avançado da funcao printf
   Números inteiros, caracter, e reais        */

#include<stdio.h>
#include<stdlib.h>

int    numero  = 90;
float  salario = 250.70;
double media   = 70.25;

int main(){
	system("cls");
	system("color fc");
	printf("\nNumero inteiro padrao........: %i", numero); //decimal
	printf("\nNumero inteiro em decimal....: %d", numero);
	printf("\nNumero inteiro em octal......: %o", numero);
	printf("\nNumero inteiro em hexadecimal: %x", numero);
	printf("\nNumero inteiro como caracter.: %c\n", numero);

	printf("\nNumero alinhado a direita  e com espaco reservado [%5d]", numero);
	printf("\nNumero alinhado a esquerda e com espaco reservado [%-5d]",numero);
	printf("\nNumero alinhado a direita  e com espaco reservado [%05d]\n",numero);

	printf("\nNumero com sinal positivo: %+d\n",numero);

	printf("\nNumero float  padrao: %f", salario);
    printf("\nNumero double padrao: %lf",media);

	printf("\nNumero real sem casas decimais.............: %.0f",salario);
	printf("\nNumero real com duas casas decimais........: %.2f",salario);
	printf("\nNumero real em notacao cientifica (base 10): %e\n\n",salario);
	system("pause");
	return 0;
}
