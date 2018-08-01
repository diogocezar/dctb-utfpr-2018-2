/* Exemplo 4B de matriz

   Faz a multiplicação entre duas matrizes

   Nesta solução foram criadas funções para organizar e diminuir o código.

   E utilizada a função de leitura lerInt que está na biblioteca criada pelo
   programador LEITURA.C Esta função permite validar corretamente as entradas
   do tamanho das matrizes.

   Dentro da função de leitura dos valores da matriz também foi realizada a
   validação para tratar o caso do usuário digitar uma letra.

   Lembre-se que caso o scanf não leia nada (que acontece quando se está lendo um
   número e o usuário digita letras) ele retorna zero.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

#include "LEITURA.C" // Biblioteca criada pelo programador

#define MAX_LINHAS  100
#define MAX_COLUNAS 100

void leituraMatriz(int[MAX_LINHAS][MAX_COLUNAS],int,int);
void imprimeMatriz(int[MAX_LINHAS][MAX_COLUNAS],int,int);

void multiplicaMatriz(int[MAX_LINHAS][MAX_COLUNAS],int,int,
                      int[MAX_LINHAS][MAX_COLUNAS],int,int,
                      int[MAX_LINHAS][MAX_COLUNAS]);

int main(){
  int matrizA[MAX_LINHAS][MAX_COLUNAS],linhasA, colunasA,
      matrizB[MAX_LINHAS][MAX_COLUNAS],linhasB, colunasB,
      matrizR[MAX_LINHAS][MAX_COLUNAS];

  // Entrada dos limites das matrizes

  linhasA  = lerInt("Entre com o total de linhas  da Matriz A: ", 1,MAX_LINHAS);
  colunasA = lerInt("Entre com o total de colunas da Matriz A: ", 1,MAX_COLUNAS);
  linhasB  = lerInt("Entre com o total de linhas  da Matriz B: ", 1,MAX_LINHAS);
  colunasB = lerInt("Entre com o total de colunas da Matriz B: ", 1,MAX_COLUNAS);

  // verifica se é possivel multiplicar

  if (colunasA != linhasB){
    printf("\n\aNao eh possivel multiplicar as matrizes!\n");
    exit(0);
  }else{
    printf("\n\aEh possivel multiplicar as matrizes!\n");
  }

  // Le os valores das matrizes

  printf("\nEntre com os valores da Matriz A\n");
  leituraMatriz(matrizA,linhasA,colunasA);

  printf("\nEntre com os valores da Matriz B\n");
  leituraMatriz(matrizB,linhasB,colunasB);

  // Faz a multiplicação entre as matrizes

  multiplicaMatriz(matrizA,linhasA,colunasA,matrizB,linhasB,colunasB,matrizR);

  // imprime as matrizes

  printf("\n\nMatriz A\n\n");
  imprimeMatriz(matrizA,linhasA,colunasA);

  printf("\n\nMatriz B\n\n");
  imprimeMatriz(matrizB,linhasB,colunasB);

  printf("\n\nMatriz Resultante\n\n");
  imprimeMatriz(matrizR,linhasA,colunasB);

  printf("\n\nDigite qualquer tecla para encerrar...");
  getch();
  return 0;
}

void leituraMatriz(int mat[MAX_LINHAS][MAX_COLUNAS], int totLinhas, int totColunas){
  int linha, coluna;

  for (linha = 0; linha < totLinhas; linha++){
    for (coluna = 0; coluna < totColunas; coluna++){

       printf("\nEntre com a posicao [%d][%d]: ",linha,coluna);
       fflush(stdin);

       while(!scanf("%d",&mat[linha][coluna])){
          printf("\n\aNão foi digitado um inteiro valido!\n");
          printf("\nEntre com a posicao [%d][%d]: ",linha,coluna);
          fflush(stdin);
       }
    }
  }
}

void imprimeMatriz(int mat[MAX_LINHAS][MAX_COLUNAS], int totLinhas, int totColunas){
  int linha, coluna;

  for (linha = 0; linha < totLinhas; linha++){
     for(coluna = 0; coluna < totColunas; coluna++){
        printf("%d ",mat[linha][coluna]);
     }
     printf("\n");
  }
}

void multiplicaMatriz(int matA[MAX_LINHAS][MAX_COLUNAS],int totLinA, int totColA,
                      int matB[MAX_LINHAS][MAX_COLUNAS],int totLinB, int totColB,
                      int matR[MAX_LINHAS][MAX_COLUNAS]){

  int colB, colR, soma, linhaA, colunaA;

  for(linhaA = 0; linhaA < totLinA; linhaA++){
     colR = 0;
     for (colB = 0; colB < totColB; colB++){
        soma = 0;
        for (colunaA = 0; colunaA < totColA; colunaA++){
           soma += matA[linhaA][colunaA] * matB[colunaA][colB];
        }
        matR[linhaA][colR] = soma;
        colR++;
     }
  }
}
