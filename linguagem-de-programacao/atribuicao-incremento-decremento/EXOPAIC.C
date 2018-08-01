/* Exemplo de uso de operadores de atribuição composta e de
   incremento e decremento
*/

#include<stdio.h>
#include<stdlib.h>

int main(){
    int n = 0;

    system("cls");
	printf("\n Entre com o valor de N: ");
	scanf("%d",&n);

	printf("\n N +=  5    -> N = N +  5      -> %4d",n+=5);
	printf("\n N -= 23    -> N = N - 23      -> %4d",n-=23);
	printf("\n N /=  2    -> N = N /  2      -> %4d",n/=2);
	printf("\n N %%=  3    -> N = N %%  3      -> %4d",n%=3);
	printf("\n N *= 2 + 8 -> N = N * (2 + 8) -> %4d",n*=2+8);

	printf("\n\n N++ -> %4d",n++);
	printf("\n ++N -> %4d",++n);
	printf("\n --N -> %4d",--n);
	printf("\n N-- -> %4d",n--);

	printf("\n\n Valor final de N = %d\n",n);
	system("pause");
	return 0;
}
