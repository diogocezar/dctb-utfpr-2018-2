/**
* Diogo Cezar
* <diogoc@utfpr.edu.br>
* Resolução do Exercício - https://www.urionlinejudge.com.br/judge/pt/problems/view/1534
*/

#include <stdio.h>
#include <stdlib.h>

void print(int mat[70][70], int n){
    int i, j;
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            printf("%d", mat[i][j]);
        }
        printf("\n");
    }
}

void generate(int mat[70][70], int n){
    int i, j, k;
    k = n-1;
    for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(j == k){
                mat[i][j] = 2;
            }
            else if(i==j){
                mat[i][j] = 1;
            }
            else{
                mat[i][j] = 3;
            }
        }
        k--;
    }
}

int main(){
    int n, i, j, mat[70][70];
    while(scanf("%d", &n)){
        if(n <= 3 || n > 70){
            printf("Você digitou um número fora do limite (3 <= n < 70). Adeus!\n");
            exit(0);
        }
        generate(mat, n);
        print(mat, n);
    }
    return 0;
}