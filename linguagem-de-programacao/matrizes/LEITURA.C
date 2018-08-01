/* Biblioteca criada pelo programador com funções usadas para entrada de dados */

#include<conio.h>
#include<stdio.h>
#include<string.h>

/* Para o programa, e pede uma tecla para continuar ao usuario */

char pararPrograma(){
     printf("\n\nDigite qualquer tecla para continuar...");
     fflush(stdin);
     return getche();
}

/* Faz a leitura de um numero inteiro int. Validando a entrada.
   Definindo o intervalo aceito de numeros. Nesta versão desta função
   pode-se passar o texto que será apresentado para o usuário durante
   a leitura.

   O vetor de char é passado para um parâmetro que espera uma variável constante.
   Para isto o primeiro parâmetro da função foi declarado como sendo const.

   Isto evita que apareça a seguinte mensagem durante a compilação

        warning: deprecated conversion from string constant to 'char*'

   Esta mensagem indica que está convertendo-se uma constante texto para um
   ponteiro de caracteres char, o que permite que o parâmetro recebido possa ser
   alterado. E caso alguma alteração seja feita nele ocorrerá um ERRO fatal no
   programa.

   Colocando-se const na declaração evita-se que isto ocorra. Não é mais
   possível alterar o conteúdo passado para o parâmetro dentro da função.

   Outra opção seria desabilitar a geração da mensagem de warning através da
   diretiva de compilação #pragma em vez de colocar const na declaração do parâmetro.
   Com a diretiva #pragma bastaria colocar esta linha no início do arquivo fonte.

       #pragma GCC diagnostic ignored "-Wwrite-strings"

   Isto não evita que o erro ocorra, só faz com que o compilador não mostre mais
   esta mensagem de alerta. Esta solução deve ser evitada!
*/

int lerInt(const char texto[], int minimo, int maximo){
   int num, teste;

   printf("%s",texto);

   fflush(stdin);
   teste = scanf("%d",&num);
   while(!teste || num < minimo || num > maximo){
     if (teste == 0){
        printf("\n\aNao foi digitado um numero inteiro valido!");
     }else{
        printf("\n\aO numero deve ser de %d ate %d!",minimo,maximo);
     }
     printf("\n\n%s",texto);
     fflush(stdin);
     teste = scanf("%d",&num);
   }

   return num;
}

/* Faz a leitura de um texto, limitando a entrada do usuário */

void lerTexto(char vetor[], int quantidade){
    int posUltimoCaracterLido;

    fflush(stdin);
    fgets(vetor,quantidade,stdin);

    //para retirar o enter no final da leitura do fgets
    posUltimoCaracterLido = strlen(vetor)-1;
	if (vetor[posUltimoCaracterLido] == '\n'){
	   vetor[posUltimoCaracterLido] = '\x0';
	}
}
