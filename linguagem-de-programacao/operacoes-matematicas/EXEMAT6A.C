/* Exemplo de conversao de tipos em operacoes matematicas.
   Operações com operandos do mesmo tipo, o resultado é do mesmo tipo.
   Ou seja, neste caso, int com int dá int.

   Não é um erro, e sim uma característica da linguagem C.            */

#include<stdio.h>

int main(){
   float media;
   media = 5/2;
   printf("\nO valor calculado foi %f",media);
   return 0;
}

