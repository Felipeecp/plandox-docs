---
sidebar_position: 1
---

# Modelos de Regressão

A regressão é um dos métodos de previsão bem comun no meio estatístico. Tem como objeitvo principal verificar como certas variáveis de interesse influenciam uma variável resposta Y e criar um modelo matemático capaz de predizer valores de Y com base em valores de variáveis preditoras X.

## Configuração geral dos modelos de regressão

Para os modelos de regressão apresentados aqui, temos a seguinte interface comum entre todos os modelos:

<p align="center">
<img
  src={require('./imgs/comum_regressao.png').default}
  alt="Example banner"
  width= "350px"
/>
</p>

Nessa interface é possivel fazer as configurações gerais do modelo. 

### Selecionar variáveis

Ao clicar no botão Selecionar Variáveis, será exibido a janela abaixo, onde é possivel determinar os tipos de variáveis das colunas que serão utilizadas no modelo. As variáveis podems ser determinadas como variáveis dependentes, variáveis independentes e variáveis independentes categóricas.

<p align="center">
<img
  src={require('./imgs/selec_var.png').default}
  alt="Example banner"
  width= "500px"
/>
</p>

### Selecionar Hyperparametros

Essa é a parte que muda de acordo com o tipo de modelo, por isso será aprofundada apenas em cada modelo.

### Otimização de Modelo

Nessa região é possivel fazer configurações para uma melhor performace do modelo que for escolhido, as opções comuns entre os modelos são as de escolher a quantidade de modelos que serão salvar e determinar a proporção da fração para teste no modelo.

### Pré-Processamento

O pré-processamento em um modelo de machine learning é essencial para um modelo com bom desempenho e com um resultado satisfatorio. Processos de normalização, transformação de variáveis categoricas podem ser determinados nesse momento, para que o algoritmo fique da forma ideal.

### Validação

Nessa sessão pode-se determinar a métrica de validação que será utilizada no módelo e qualquer será a partição usada para validação.