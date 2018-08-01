/* Exemplo de estouro de variável.
   Quando se armazena um valor fora dos limites suportados pelo
   tipo da variável, o valor é rotacionado internamento, ou seja
   ele vira um valor diferente do que era esperado.

   Não é um erro, e sim uma característica da linguagem C.      */

#include<stdio.h>

int main(){
   char numero;
   printf("\nExemplo de estouro de variavel");
   printf("\nExperimente digitar um numero maior que 127 ou menor que -128\n\n");
   printf("Entre com um valor: ");
   scanf("%d",&numero);
   printf("\nO valor realmente armazenado foi %d",numero);
   return 0;
}

