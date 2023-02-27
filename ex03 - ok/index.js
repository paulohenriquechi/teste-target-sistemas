// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

async function getData(){
	//puxando os dados do arquivo json
	const response = await fetch('./dados.json')
	const data = await response.json()

	//filtrando os dias os dias sem faturamento e colocando os valores em um array 
	const faturamentoTotal = data.map((item)=>{
		return item.valor
	}).filter(valor => valor>0)

	//filtrando o dia com menor faturamento
	const menorFaturamento = Math.min(...faturamentoTotal)

	//filtrando o dia com maior faturamento
	const maiorFaturamento = Math.max(...faturamentoTotal)

	//calculo para a soma de todos os valores
	const soma = faturamentoTotal.reduce((valor1, valor2) => {
		return valor1 + valor2
	})
	//calculo para media diaria de faturamento
	const media = soma/faturamentoTotal.length
	
	//filtrando dias que tiveram o faturamento diario superior a média mensal
	let diasAcimaDaMedia = 0
	for (let i = 0; i < faturamentoTotal.length; i++) {
		if(faturamentoTotal[i]>media){
			diasAcimaDaMedia++
		}
	}
	console.log(`Menor valor de faturamento: ${menorFaturamento}\nMaior valor de faturamento: ${maiorFaturamento}\nNúmero de dias com faturamento superior a média mensal: ${diasAcimaDaMedia}`)
}

getData()