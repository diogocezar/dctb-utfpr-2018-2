
/* Exemplo 1 de uso do comando break */

#include<stdio.h>

int main(){

   int x;

   for(x = 0; x < 10; x++){

      printf(" %d\n", x);

      if (x == 5){
        break; // ou x = 10;
      }
   }

   return 0;
}
