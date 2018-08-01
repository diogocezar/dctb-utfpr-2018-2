/* Exemplo de conversao de tipos em operacoes matematicas.
   Operações com operandos de tipo diferentes, o resultado é do MAIOR tipo.
   Ou seja, neste caso, double com int dá double.

   Não é um erro, e sim uma característica da linguagem C.            */

#include<stdio.h>

int main(){
   float media;
   media = 5.0/2;
   printf("\nO valor calculado foi %f",media);
   return 0;
}

