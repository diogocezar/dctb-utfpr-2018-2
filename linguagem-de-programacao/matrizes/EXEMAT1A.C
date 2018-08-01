/* Exemplo 1A de uso de Matriz */

#include<conio.h>
#include<stdio.h>

#define QUANT_PRODUTOS 3

double produtos[QUANT_PRODUTOS][2], valorEstoque, valorTotalEstoque = 0;

int indice,quantidade;

int main(){

	 printf("\nEntrada dos Produtos");
	 printf("\n====================\n");

	 for (indice = 0; indice < QUANT_PRODUTOS; indice++){
	     printf("\nEntre com o preco do produto %d: ",indice+1);
	     scanf("%lf",&produtos[indice][0]);

	     printf("Entre com a quantidade em estoque do produto %d: ",indice+1);
	     scanf("%lf",&produtos[indice][1]);
	 }

	 printf("\n\nListagem com os valores em estoque");
     printf("\n==================================\n");
     printf("\nProduto\tPreco\tQuantidade\tValor");

	 for (indice = 0; indice < QUANT_PRODUTOS; indice++){

	     valorEstoque = produtos[indice][0] * produtos[indice][1];

		 printf("\n%3d\t%7.2lf\t%7.0lf\t\t%7.2lf",indice+1,produtos[indice][0],produtos[indice][1],valorEstoque);

         valorTotalEstoque += valorEstoque;
	 }
	 printf("\n\nValor total em estoque R$ %5.2f",valorTotalEstoque);

	 printf("\n\nDigite qualquer tecla para encerrar...");
	 getch();
	 return 0;
}
