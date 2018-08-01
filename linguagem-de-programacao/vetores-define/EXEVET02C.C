/* Exemplo 2C de uso de vetores

   Nesta solução foi utilizada constantes simbólicas para controlar os limites
   do vetor.

   As constantes simbólicas são criadas através do uso da diretiva de compilação
   #define.

   Desta forma, facilita-se a compreensão e manutenção do código. E evita
   erros de estouro de limites de vetores.

   Nesta solução foram incluídas todas as validações de entradas.
*/

#include<conio.h>
#include<stdio.h>
#include<stdlib.h>

#define TOTAL 5 //As ocorrências da palavra TOTAL serão substituidas pelo valor 5
                //antes da compilação

#define MAIOR_IDADE 150 // A maior idade aceita dentro do programa.

int   idades[TOTAL], indice, masculino = 0;
char  sexos[TOTAL];
float somaIdades = 0;

int main(){
   system("cls");
   for(indice = 0; indice < TOTAL; indice++){

       printf("Dados do aluno [%d]\n",indice+1);
       do{
         printf("Entre com a idade.....: ");
         idades[indice] = 0; // Força valor inválido para a idade
         fflush(stdin);      // Limpa a memória da entrada principal (teclado)
         scanf("%d",&idades[indice]);
         if (idades[indice] <= 0 || idades[indice] > MAIOR_IDADE){
             printf("\aIdade invalida!\n");
         }
       }while(idades[indice] <= 0 || idades[indice] > MAIOR_IDADE);

       somaIdades += idades[indice];

       do{
         printf("Entre com o sexo (M/F): ");
         sexos[indice] = 'a'; //Força valor inválido para sexo
         fflush(stdin);       // Limpa a memória da entrada principal (teclado)
         sexos[indice] = getche();
         if (sexos[indice] != 'm' && sexos[indice] != 'M' &&
             sexos[indice] != 'f' && sexos[indice] != 'F'){
             printf("\n\aSexo invalido!\n");
         }
       }while(sexos[indice] != 'm' && sexos[indice] != 'M' &&
              sexos[indice] != 'f' && sexos[indice] != 'F');

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
