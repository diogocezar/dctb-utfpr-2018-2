/* Exemplo de if encadeado,
   e de comparação de um caracter */

#include<conio.h>
#include<stdio.h>

int main(){
  char sexo;
  int  idade;
  printf(" M - Masculino\n F - Feminino\nQual o seu sexo? ");
  sexo = getche();
  if (sexo == 'm' || sexo == 'M'){
     printf("\nQual a sua idade? ");
     scanf("%d",&idade);
     printf("\nVoce viveu aproximadamente %d dias!",idade*365);
  }else
     if (sexo == 'f' || sexo == 'F'){
       printf("\nMulheres nao gostam de dizer a idade!");
     }else{
       printf("\n\aOpcao invalida!");
     }
  return 0;
}

