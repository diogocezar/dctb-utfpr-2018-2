/* Exemplo 2 de uso avançado da funcao printf
   Caracteres especiais - Sequencia de escape */

#include<stdio.h>
#include<stdlib.h>

int main(){
  printf("\n Tocando um beep de alerta! \a");
  printf("\n Imprimindo aspas duplas...: \"exemplo\"");
  printf("\n Imprimindo barra invertida: \\");
  printf("\n Imprimindo porcentagem....: %.1f%% \n",25.389);

  // 1E que está em hexadecimal equivale ao valor 30 em decimal
  // 36 que está em octal equivale ao valor 30 em decimal

  printf("\n Imprimindo qualquer caracter pelo codigo hexadecimal: \x1e");
  printf("\n Imprimindo qualquer caracter pelo codigo octal......: \36");

  printf("\n\n Usando Tabulacoes e Reserva de caracteres pode-se imprimir em colunas:\n");
  printf("\n Nota 1\tNota 2\tNota 3");
  printf("\n %3d\t%3d\t%3d", 90,85,5);
  printf("\n %3d\t%3d\t%3d",100,3,25);

  /* %3d reserva 3 caracteres durante a impressao do número inteiro, se o numero
     tiver menos de tres digitos, ele é alinhado a direita, e o espaço que sobra
     preenchido com espaços em branco                                            */

  printf("\n\n");
  system("pause");
  return 0;
}
