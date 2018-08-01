/* Exemplo de uso de printf, scanf, e operadores matematicos
   Tente dividir por zero para ver o erro que ocorre.        */

#include<stdio.h>

int numero1;
int numero2;

int main(){
	printf("Entre com o primeiro numero.: ");
	scanf("%d",&numero1);
	printf("Entre com o segundo numero..: ");
	scanf("%d",&numero2);
	printf("\nA soma dos numeros eh.........: %d",numero1 + numero2);
	printf("\nA subtracao dos numeros eh....: %d",numero1 - numero2);
	printf("\nA multiplicacao dos numeros eh: %d",numero1 * numero2);
	printf("\nA divisao dos numeros eh......: %d",numero1 / numero2);
	printf("\nO resto da divisao eh.........: %d",numero1 % numero2);
	return 0;
}
