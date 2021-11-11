---
sidebar_position: 8
---

# Regressão por Redes Neurais Artificiais

Neste módulo há um conjunto maior de hiperparâmetros a serem ajustados. Dentre eles temos:

- Neurônios;
    - Representam a quantidade de características novas que serão aprendidas em função da combinação linear das características originais.
- Camadas escondidas:
    - Quantidade de camadas com neurônios que serão adotadas no modelo. Geralmente, 1 camada oculta já obtem bons resultados desde que tenha a quantidade suficiente de neurônios. Adicionando mais camadas com exponencialmente menos neurônios, o modelo pode mapear funções ainda mais complexas e treinar mais rápido.
- Épocas:
    - Representa a quantidade de vezes que o modelo passará sobre o dataset de treino. Quanto maior o número de épocas, maior será o tempo de treinamento.
- Batch:
    - Tamanho do lote de amostras do conjunto de treinamento que será utilizado para atualizar os pesos da rede.
- Função de Ativação:
    - ReLU;
    - Sigmoide;
    - Tangente Hiperbólica;
    - ELU;
- Taxa de Aprendizagem:
    - Representa o tamanho do passo dado para minimizar a função de custo.
- Função de Custo:
    - Erro Quadrático Médio;
    - Erro Absoluto Médio;
    - Erro Percentual Absoluto Médio;
    - Erro Logarítmo Quadrático Médio;
- Otimizador:
    - SGD;
    - ADAM;
    - Adagrad;
    - RMSprop;