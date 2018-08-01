/* Exemplo 1B de uso de Matriz

   Nesta solução foram utilizadas funções que recebem a matriz como parâmetro.

   Quando o parâmetro da função espera receber um vetor (seja de qualquer dimensão)
   a passagem sempre é por referência.
*/

#include<conio.h>
#include<stdio.h>

#define QUANT_PRODUTOS 3

void leitura(double prod[QUANT_PRODUTOS][2]){

    int indice;

    printf("\nEntrada dos Produtos");
	printf("\n====================\n");

     for (indice = 0; indice < QUANT_PRODUTOS; indice++){
	     printf("\nEntre com o preco do produto %d: ",indice+1);
	     scanf("%lf",&prod[indice][0]);

	     printf("Entre com a quantidade em estoque do produto %d: ",indice+1);
	     scanf("%lf",&prod[indice][1]);
	 }

}

void listagem(double prod[QUANT_PRODUTOS][2]){

     double valorEstoque, valorTotalEstoque = 0;
     int    indice,quantidade;

     printf("\n\nListagem com os valores em estoque");
     printf("\n==================================\n");
     printf("\nProduto\tPreco\tQuantidade\tValor");

	 for (indice = 0; indice < QUANT_PRODUTOS; indice++){

	     valorEstoque = prod[indice][0] * prod[indice][1];

		 printf("\n%3d\t%7.2lf\t%7.0lf\t\t%7.2lf",indice+1,prod[indice][0],prod[indice][1],valorEstoque);

         valorTotalEstoque += valorEstoque;
	 }
	 printf("\n\nValor total em estoque R$ %5.2f",valorTotalEstoque);
}

int main(){

     double produtos[QUANT_PRODUTOS][2];

     leitura(produtos);

     listagem(produtos);

	 printf("\n\nDigite qualquer tecla para encerrar...");
	 getch();
	 return 0;
}
