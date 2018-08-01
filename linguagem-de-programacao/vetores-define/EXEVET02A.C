/* Exemplo 2A de uso de vetores

   Nesta solução não foram usadas constantes para controlar os limites do vetor.
   Isto dificulta a compreensão e manutenção do código, e propicia erros.
   Deve ser evitada.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

int   idades[5], indice, masculino = 0;
char  sexos[5];
float somaIdades = 0;

int main(){
   system("cls");
   for(indice = 0; indice < 5; indice++){

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
   printf("A media de idade da turma eh %.2f",somaIdades/5);
   printf("\nO total de homens eh %d",masculino);
   printf("\nO total de mulheres eh %d\n",5-masculino);
   system("pause");
   return 0;
}
