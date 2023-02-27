// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

//declaração dos dados que iremos utilizar
const data = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}
//função que executará os calculos
function calculo(data){
    //convertendo o objeto para que possamos itera-lo
    let faturamento = Object.values(data)

    //fazendo a soma de todos os valores 
    let soma = faturamento.reduce((accum, curr) => accum+curr)

    //output mostrando o estado e a porcentagem
    for (const [key, value] of Object.entries(data)){
        console.log(`${key}: ${calculoPercentual(value)}%`) 
    }

    //função para o calculo da porcentagem de cada estado em relação ao total
    function calculoPercentual(valor){
        let percentual = ((valor/soma)*100).toFixed(2)
        return percentual
    }
    
}

calculo(data)