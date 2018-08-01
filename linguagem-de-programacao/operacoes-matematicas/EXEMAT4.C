/* Exemplo de lixo em memória na declaração de variáveis
   Toda variável que é declarada, ela começa tendo um valor desconhecido.
   Só perde este valor quando outro é armazenado dentro dela.

   Não é um erro, e sim uma característica da linguagem C.              */

#include<stdio.h>

int main(){
   int n1, n2 = 0;
   printf("\nValor de n1 : %d",n1);
   printf("\nValor de n2 : %d",n2);
   return 0;
}
