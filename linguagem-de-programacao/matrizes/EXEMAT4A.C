/* Exemplo 4A de matriz

   Faz a multiplicação entre duas matrizes
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

#define MAX_LINHAS  100
#define MAX_COLUNAS 100

int main(){
  int matrizA[MAX_LINHAS][MAX_COLUNAS],linhasA, colunasA,
      matrizB[MAX_LINHAS][MAX_COLUNAS],linhasB, colunasB,
      matrizR[MAX_LINHAS][MAX_COLUNAS];

  int linha, coluna, colB, colR, soma, linhaA, colunaA;

  // Entrada dos limites das matrizes

  printf("\nEntre com o total de linhas  da Matriz A: ");
  scanf("%d",&linhasA);

  printf("\nEntre com o total de colunas da Matriz A: ");
  scanf("%d",&colunasA);

  printf("\nEntre com o total de linhas  da Matriz B: ");
  scanf("%d",&linhasB);

  printf("\nEntre com o total de colunas da Matriz B: ");
  scanf("%d",&colunasB);

  // verifica se é possivel multiplicar

  if (colunasA != linhasB){
    printf("\n\aNao eh possivel multiplicar as matrizes!\n");
    exit(0);
  }else{
    printf("\n\aEh possivel multiplicar as matrizes!\n");
  }

  // Le os valores das matrizes

  for (linha = 0; linha < linhasA; linha++){
    for (coluna = 0; coluna < colunasA; coluna++){
       printf("\nEntre com a posicao A[%d][%d]: ",linha,coluna);
       scanf("%d",&matrizA[linha][coluna]);
    }
  }

  for (linha = 0; linha < linhasB; linha++){
    for (coluna = 0; coluna < colunasB; coluna++){
       printf("\nEntre com a posicao B[%d][%d]: ",linha,coluna);
       scanf("%d",&matrizB[linha][coluna]);
    }
  }

  // Faz a multiplicação entre as matrizes

  for(linhaA = 0; linhaA < linhasA; linhaA++){
     colR = 0;
     for (colB = 0; colB < colunasB; colB++){
        soma = 0;
        for (colunaA = 0; colunaA < colunasA; colunaA++){
           soma += matrizA[linhaA][colunaA] * matrizB[colunaA][colB];
        }
        matrizR[linhaA][colR] = soma;
        colR++;
     }
  }

  // imprime as matrizes

  printf("\n\nMatriz A\n\n");
  for (linha = 0; linha < linhasA; linha++){
     for(coluna = 0; coluna < colunasA; coluna++){
        printf("%d ",matrizA[linha][coluna]);
     }
     printf("\n");
  }

  printf("\n\nMatriz B\n\n");
  for (linha = 0; linha < linhasB; linha++){
     for(coluna = 0; coluna < colunasB; coluna++){
        printf("%d ",matrizB[linha][coluna]);
     }
     printf("\n");
  }

  printf("\n\nResultado\n\n");
  for (linha = 0; linha < linhasA; linha++){
     for(coluna = 0; coluna < colunasB; coluna++){
        printf("%d ",matrizR[linha][coluna]);
     }
     printf("\n");
  }

  printf("\n\nDigite qualquer tecla para encerrar...");
  getch();
  return 0;
}
