// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


function fibonnaci(numero){
    //declaração dos primeiros números da sequência
    let num1 = 0
    let num2 = 1
    //enquanto a soma desses 2 números for menor que o número passado ficará em loop
    while (num1+num2<numero) {
        let num3 = num1+num2
        num1 = num2
        num2 = num3
    }
    //caso o a soma desses 2 números seja igual o número passado ele irá dizer que o número pertence a sequência de fibonnaci
    //caso contrário irá dizer que o número não pertence a sequência de fibonnaci
    if(num1+num2==numero){
        console.log(`O número ${numero} pertence a sequência de Fibonnaci`)
    }else{
        console.log(`O número ${numero} não pertence a sequência de Fibonnaci`)
    }
}

fibonnaci(89)
