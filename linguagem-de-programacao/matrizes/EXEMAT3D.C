/* Exemplo 3D de uso de matrizes com textos

   Nesta solução foi trocada a função gets pela fgets.

   Com a função fgets pode-se impedir que o seja armazenado um texto maior que o
   tamanho do vetor.

   Caso o usuário digite uma quantidade de caracteres menor que o tamanho do vetor
   a função gets armazena o enter digitado, por isso deve ser eliminado posteriormente

   Neste exemplo é calculado o preenchimento de espacos em branco para manter a
   impressão em colunas, de acordo com a quantidade máxima de caracteres suportada
   pelo matriz de nomes. Com esta solução caso se queira mudar a quantidade máxima de
   um nome suportada pelo programa basta alterar a constante, e o programa se adapta.
   Uma ÓTIMA SOLUÇÃO.

   Nesta solução também foi criada uma biblioteca chamada LEITURA.C onde foram
   colocadas funções para leitura do texto (usando fgets), e para a leitura de INT,
   usado para ler a idade.
*/

#include<conio.h>
#include<stdio.h>
#include<string.h>

#include "LEITURA.C" // Biblioteca criada pelo programador

#define QUANT_PESSOAS     3
#define MAXIMO_CARACTERES 20
#define IDADE_MAXIMA      150 // Valor máximo de idade aceita neste programa

char nomes[QUANT_PESSOAS][MAXIMO_CARACTERES];
int  idades[QUANT_PESSOAS];

void leitura();  // Protótipo da função
void listagem(); // Protótipo da função

int main(){

    leitura();
    listagem();
    pararPrograma();

	return 0;
}

void leitura(){
   int linha;

   for(linha = 0; linha < QUANT_PESSOAS; linha++){

	   printf("\nDados da pessoa %d\n",linha+1);
       printf("Entre com o nome : ");

       lerTexto(nomes[linha],MAXIMO_CARACTERES);

	   idades[linha] = lerInt("Entre com a idade: ",1,IDADE_MAXIMA);
    }
}

void listagem(){
    int indice, linha, tamanho;

    printf("\n Nr Nome");
    for (indice = 1; indice <= MAXIMO_CARACTERES - 2; indice++){
       printf(" ");
    }

    printf("Idade");

    for(linha = 0; linha < QUANT_PESSOAS; linha++){

	   printf("\n%3d %s",linha+1,nomes[linha]);
       tamanho = strlen(nomes[linha]);

       /* Calcula quantos espacoes em branco deve imprimir para alinhar em coluna de
          acordo com o tamanho do nome atual */

       for (indice = 1;indice <= MAXIMO_CARACTERES - tamanho + 2; indice++){
            printf(" ");
       }

       printf("%3d",idades[linha]);
    }
}
