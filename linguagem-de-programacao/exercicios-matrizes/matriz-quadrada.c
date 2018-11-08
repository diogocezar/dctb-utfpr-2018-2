/**
* Diogo Cezar
* <diogoc@utfpr.edu.br>
* Resolução do Exercício - https://www.urionlinejudge.com.br/judge/pt/problems/view/1435
*/

#include <stdio.h>
#include <stdlib.h>

#define DEBUG 1

void print(int mat[100][100], int n){
    int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			if(j==0)
			    printf("%3d", mat[i][j]);
			else
			    printf(" %3d", mat[i][j]);
		}
		printf("\n");
	}
	printf("\n");
}

int getNumbers(int n){
    int numbers;
    numbers = (n/2);
    if(n % 2 == 1)
        numbers++;
    return numbers;
}

void generate(int mat[100][100], int n){
    int i, j, k, numbers, start, end;
    numbers = getNumbers(n);
    start = 0;
    end   = n-1;
    if(DEBUG) printf("\tNUMBERS -> %d\n\tSTART -> %d\n\tEND -> %d\n", numbers, start, end);
    for(i=1; i<=numbers; i++){
        if(DEBUG) printf("\n\t\tI -> %d", i);
        for(j=start; j<=end; j++){
            if(DEBUG) printf("\n\t\t\tJ -> %d", j);
            for(k=start; k<=end; k++){
                if(DEBUG) printf("\n\t\t\tK -> %d\n", k);
                if(DEBUG) printf("\n\t\t\tmat[%d][%d] -> %d\n", j, k, i);
                mat[j][k] = i;
            }
        }
        start++;
        end--;
    }
}

int main(){
    int n, i, j, mat[100][100];
    while(scanf("%d", &n)){
        if(n <= 0 || n > 100){
            printf("Você digitou um número fora do limite (0 <= n <= 100). Adeus!\n");
            exit(0);
        }
        if(n == 0){
            printf("Você digitou 0. Adeus!\n");
            exit(0);
        }
        generate(mat, n);
        print(mat, n);
    }
    return 0;
}