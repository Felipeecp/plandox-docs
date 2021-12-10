---
sidebar_position: 3
---

# Regressão de Ridge

A Regressão de Ridge é um modelo linear regularizado, ou seja, reduz os graus de liberdade para diminuir a chance de sobreajuste dos dados. O hiperparâmetro $Alpha$ controla o quanto você quer regularizar o modelo. Se $Alpha$ igual a 0, então a regressão de ridge se torna uma regressão linear simples. Se for um valor muito grande então todos os pesos acabarão próximos de zero e o resultado será uma linha plana que passa pela média dos dados. Pela aba "Selecionar Hiperparâmetros" pode adotar diferentes valores de alpha para serem testados no modelo:

<img
  src={require('./imgs/rr_1.png').default}
  alt="Example banner"
  width= "250px"
/>

É importante dimesionar os dados antes de executar a Regressão de Ridge, pois ela é sensível à escala das variáveis de entrada. Isso pode ser realizado pela aba "Pré-processamento", selecionando o tipo de normalização das variáveis independentes.