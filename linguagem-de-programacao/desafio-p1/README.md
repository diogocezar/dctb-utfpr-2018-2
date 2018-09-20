## Desafio para a P1

Olá pessoas, este é o desafio a ser realizado no dia 11/09/2018.

Este desafio pode ser realizado em grupos de até 3 pessoas.

Mas atenção, se for um grupo, cada intergrande deverá responder individualmente a questionamentos do professor sobre o software desenvolvido.

A equipe que conseguir desenvolver o problema, demonstrar seu funcionamento e responder a questionamentos do professor terá uma nota bônus de 0,5 pontos na nota da prova que será aplicada no dia 18/09/2018.

Esta é uma avaliação, então não é permitido tirar dúvidas durante o seu desenvolvimento. Consultas a internet e às pessoas da equipe estão liberadas;

A nota máxima da prova é 10.0;

## Requisitos

Estes são os requisitos para o desenvolvimento do desafio:

1. Utilização do terminal para compilar e executar o aplicativo;
    * Pode-se utilizar o Linux, ou o Git Bash do Windows;
    * Não é permitido utilizar o CodeBlocks ou outro compilador nativo;
2. O sistema deve ser feito na linguagem de programação C;
3. O sistema deve utilizar apenas os conceitos vistos até o momento, isso inclui:
    * Estruturas Básicas;
    * Estruturas de Seleção;
    * Estruturas de Repetição;
    * Vetores;

## Descrição do Problema

Senhor Branco é um homem muito inteligente. Pai de Família, e professor de Química a muito tempo, acabou se envolvendo com algumas atividades ilegais. O problema é que agora ele não consegue mais sair desta vida, talvez ele não queira, mas não vamos discutir as decisões do Senhor Branco, vamos apenas ajudá-lo.

Sabe-se que a fórmula quimica da Metanfetamina é dada por: C10H15N. Só relembrando que C é Carbono, H é Hidrogênio e N é Nitrogênio. E também lembrando que a seu nome é: (S)-N-methil-1-fenil-propan-2-amina. Mas não tem problema, não é nossa missão entender de química, essa é a missão do senhor branco.

O grande problema é que o senhor Branco anda perdendo muito tempo tendo que calcular quanto material ele precisa para fazer _X_ unidades de Metanfetamina para cada dia da semana.

Você deve então criar um aplicativo que seja composto por alguns vetores, por exemplo: ```int C[7]; int H[7]; int N[7]```

Cada posição deste vetor corresponderá a quantas unidades de cada elemento o Senhor Branco abastecerá o seu estoque em cada dia da semana.

Por exemplo, se tivéssemos algo como: ```C[0] = 1345;``` significaria que na segunda-feira, teríamos disponíveis _1345_ unidades de Carbono para realizar o seu trabalho.

Faça um programa que tenha o seguinte MENU:

```
┌──────────────────┐
│ HELLO HEISENBERG │
└──────────────────┘

O que o senhor deseja hoje?

┌────────────────────────────────────────────────────────┐
│ [1] Cadastrar um novo elemento para um dia da semana;  │
│ [2] Consultar produção cada dia da semana;             │
│ [3] Limpar toda a memória (INVADIRAM O LABORATÓRIO)!   │
│ [4] Sair;                                              │
└────────────────────────────────────────────────────────┘

Digite a sua opção:
```

Se a opção desejada for a número 1, então, deve-se mostrar um novo menu com a seguintes opções:

```
┌──────────────────┐
│ HELLO HEISENBERG │
└──────────────────┘

┌──────────────────┬─────────────────────────────┐
│ OPÇÃO ESCOLHIDA  │ [1] Cadastrar novo elemento │
└──────────────────┴─────────────────────────────┘

Para qual dia da semana deseja cadastrar?

┌─────────────────────────────┐
│ [0] Segunda-Feira;          │
│ [1] Terça-Feira;            │
│ [2] Quarta-Feira;           │
│ [3] Quinta-Feira;           │
│ [4] Sexta-Feira;            │
│ [5] Sábado;                 │
│ [6] Domingo;                │
└─────────────────────────────┘

Digite a sua opção:
```

E após escolher, o dia da semana, por exemplo, Segunda-Feira! Pergunte qual o elemento e finalmente a quantidade de elementos que se deseja incluir;

```
┌──────────────────┐
│ HELLO HEISENBERG │
└──────────────────┘

┌──────────────────┬──────────────────────┐
│ OPÇÃO ESCOLHIDA  │ [0] Segunda-Feira    │
└──────────────────┴──────────────────────┘

Qual é o elemento que deseja cadastrar?

┌────────────────────────────────────────────────────────┐
│ [0] Carbono;                                           │
│ [1] Hidrogênio;                                        │
│ [2] Nitrogênio;                                        │
└────────────────────────────────────────────────────────┘

Qual elemento: 0
Qual a quantidade: 1432
```
No exemplo, adicionou-se 1432 do elemento Carbono na Segunda-Feira.

Ao finalizar a operação 1, deve-se substituir a posição do vetor em questão.

A opção número 2 do menu principal ```Consultar produção cada dia da semana``` deve de fato fazer o cálculo, para isso, utilize a fórmula que o Senhor Branco nos passou e diga, para cada dia da semana quantas unidade de Matanfetamina é possível ser criada naquele dia.

Por exemplo se na Segunda-Feira, tivéssemos as seguintes quantidades:

```
C => 100
H => 150
N => 10
```

Então, poderímos deduzir que na Segunda-Feira poderiam ser criadas 10 unidades de Metanfetamina.

Mas, antes de ser exibido em tela o resultado, um novo vetor de quantidade de metanfetaminas deve ser criado para possuir o total produzido para cada dia. Por exemplo: ```M[0] = 10``` Significaria que na Segunda-Feira seria possível produzir 10 unidades de Metanfetamina com os materias pendentes.

Para exibir o relatório utilize o seguinte padrão:

```
┌──────────────────┐
│ HELLO HEISENBERG │
└──────────────────┘

┌──────────────────┬────────────────────────┐
│ OPÇÃO ESCOLHIDA  │ [2] Consultar Produção │
└──────────────────┴────────────────────────┘

┌──────────────────┬────────────────┐
│ SEGUNDA-FEIRA    │ 1.320 unidades │
├──────────────────┼────────────────┤
│ TERÇA-FEIRA      │ 2.320 unidades │
├──────────────────┼────────────────┤
│ QUARTA-FEIRA     │ 1.320 unidades │
├──────────────────┼────────────────┤
│ QUINTA-FEIRA     │ 8.320 unidades │
├──────────────────┼────────────────┤
│ SEXTA-FEIRA      │ 7.720 unidades │
├──────────────────┼────────────────┤
│ SÁBADO           │ 9.970 unidades │
├──────────────────┼────────────────┤
│ DOMINGO          │     0 unidades │
└──────────────────┴────────────────┘

Digite [0] para voltar ao menu principal: 
```

A opção 3 é uma opção _EMERGENCIAL_. Assim que houver qualquer problema, se é que você me entende... Deve-se rapidamente limpar todas as informações que estão armazenadas no programa. Para isso, cada posição de cada vetor deverá ter o valor substituido por -1.

A opção 4 apenas sai do programa.

### Regras de implementação

1. Utilize ```#define``` para definir o número de posições dos vetores;
2. Utilize 4 vetores, uma para cada elemento, e um para o resultado da produção por dia;
3. Utilize a função ```exit()``` para sair do programa;
4. O programa só deve ser fechado caso a opção 4 seja selecionada, caso contrário deve-se sempre voltar ao menu principal quando um operação for finalizada;
5. Deve-se utilizar o comando ```switch``` para fazer a intercepção das opções do menu;
6. Deve-se obrigatoriamente inicializar todos os vetores com o valor 0 no momento de sua criação;
7. Seu código DEVE estar identado;
8. Utilize os comando de compilação e execução do terminal para testar o seu programa;
9. Só mostre seu código depois de testar todo o programa;
10. Deve-se obrigatoriamente utilizar ```do{ ... }while()``` para os menus do programa;
11. Utilize em algum momento do seu programa a instrução de incremento ```i++```;
12. Os menus e interfaces devem ser feitas EXATAMENTE como a descrição;

### Dica

Começe a implementação pelas funcionalidades, e apenas depois pense em melhorar o visual do programa, o importante é que ele funcione como o desejado.

### Links Úteis

* http://bit.ly/2CoYcgp
* http://bit.ly/2wRhOUG
* http://bit.ly/2wOkFgX
* http://bit.ly/2wOEZ1x