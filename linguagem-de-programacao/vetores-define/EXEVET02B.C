/* Exemplo 2B de uso de vetores

   Nesta solução foi utilizada constantes simbólicas para controlar os limites
   do vetor.

   As constantes simbólicas são criadas através do uso da diretiva de compilação
   #define.

   Desta forma, facilita-se a compreensão e manutenção do código. E evita
   erros de estouro de limites de vetores.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

#define TOTAL 5 //As ocorrências da palavra TOTAL serão substituidas pelo valor 5
                //antes da compilação

int   idades[TOTAL], indice, masculino = 0;
char  sexos[TOTAL];
float somaIdades = 0;

int main(){
   system("cls");
   for(indice = 0; indice < TOTAL; indice++){

       printf("Dados do aluno [%d]\n",indice+1);

       printf("Entre com a idade.....: ");
       scanf("%d",&idades[indice]);

       somaIdades += idades[indice];

       printf("Entre com o sexo (M/F): ");
       sexos[indice] = getche();

       if (sexos[indice] == 'm' || sexos[indice] == 'M'){
         masculino++;
       }

       printf("\n\n");
   }
   printf("A media de idade da turma eh %.2f",somaIdades/TOTAL);
   printf("\nO total de homens eh %d",masculino);
   printf("\nO total de mulheres eh %d\n",TOTAL-masculino);
   system("pause");
   return 0;
}
