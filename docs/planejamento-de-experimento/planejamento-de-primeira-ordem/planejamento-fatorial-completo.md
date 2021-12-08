---
sidebar_position: 2
---

# Planejamento Fatorial Completo

## Sobre o Planejamento Fatorial Completo

### O que é ?

Este tipo de planejamento de experimento, estuda os efeitos que vários fatores podem ter um uma resposta de um experimento. O planejamento fatorial é um projeto no qual os pesquisadores medem as respostas de acordo com todas as combinações de diferentes níveis dos fatores. 

### Tipos

O planejamento fatorial pode ser completo ou fatorial fracionário. O planejamento fatorial completo é um tipo de planejamento em que os pesquisadores medem as respostas em todas as combinações dos níveis dos fatores. O planejamento fatorial fracionário, os pesquisadores conduzem apenas um subconjunto selecionado ou "fração" das execuções no planejamento fatorial completo.

### Vantagem

O planejamento fatorial é necessário quando para evitar conclusões enganosas. O planejamento fatorial permite que os efeitos de um fator sejam estimados em vários nível em relação a outros fatores, produzindo conclusões que são válidas em uma faixa de condições experimentais.

## Como fazer no PlanDox

Para realizar um planejamento de experimentos, inicialmente devemos definir a quantidade de fatores envolvidos no nosso experimento e os níveis em que cada fator deve ser estudado.

<img
src={require('../pde_1.png').default}
alt="Example banner"
width= "300px"
/>

Na opção "Nome dos Fatores" podemos definir qual o nome da coluna para a matriz inicial que irá ser gerada.

Na aba "Adicionar ao Planejamento" podemos definir a quantidade de linhas réplicas que serão geradas na matriz.

Os experimentos podem ser conduzidos em ordem aleatória, selecionando a opção Ordem Aleatória, os experimentos são gerados aleatoriamento na matriz de planejamento.

As colunas vazias são geradas para a resposta do experimento, onde o usuário pode preencher com os valores obtidos no experimento realizado em laboratório.

Para um exemplo de um planejamento com 2 Réplicas, 2 Colunas Vazias e 3 Pontos Centrais, temos que a matriz inicial gerada é:

<img
src={require('../pde_2.png').default}
alt="Example banner"
width= "350px"
/>

Podemos observar que cada coluna possui uma cópia e há duas colunas resposta disponíveis para serem preenchidas com os valores obtidos em laboratório.

### Exemplo

Em um experimento, queremos estudar o efeito do fator temperatura em quatro níveis, 40°C e 60°C e o efeito do catalisador em dois níveis, os catalisadores A e B. Para realizar um **planejamento fatorial completo**, devemos realizar experimentos em todas as combinações dos níveis dos fatores. Havendo 2 níveis em um fator e 2 no outro, então são necessários 4 ensaios diferentes. Assim, o planejamento é chamado de **fatorial 2 x 2**.
Para _k_ fatores, ou seja, variáveis controladas pelo experimentador, o planejamento mais simples é aquele em que todos os fatores são estudados em apenas dois níveis, denominado de **planejamento fatorial 2k**.
Para o nosso exemplo, temos a seguinte matriz de planejamento gerada.

<img
src={require('../pde_3.png').default}
alt="Example banner"
width= "350px"
/>

Na matriz, temos os níveis codificados em -1 e +1, e as quatro linhas relativas aos quatro experimentos. No fatorial completo, é feito todas as combinações dos níveis dos fatores de controle, não havendo repetição das combinações. Porém, é possível considerar a replicação do planejamento. Ao adotar o número de réplicas igual a 2, teríamos 8 experimentos.
Para o caso onde consideram-se as réplicas, a quantidade de experimentos pode ser calculada por: N = n2^k

Como podemos observar, na coluna do Fator 1, o níveis -1 e +1 correspondem às temperaturas de 40°C e 60°, respectivamente. Já na coluna do Fator 2, os níveis -1 e +1 correspondem aos catalisadores A e B, respectivamente.

Podemos interpretar geometricamente os efeitos dos fatores. Para isto, representamos o planejamento experimental num sistema cartesiano, com um eixo para cada fator. Para o caso de dois fatores, o espaço definido por eles é um plano.

<img
src={require('../pe_2.png').default}
alt="Example banner"
width= "250px"
/>

Através de um modelo de regressão, podemos obter estimativas da respostas dentro da região experimental, representadas por curvas de nível geradas no espaço gerado pelos fatores do experimento.
