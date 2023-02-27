// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// palavara a ser invertida: 
let palavra = "depechemode"

// função que inverte a palavra
function inverterPalavra(palavra){
    //declaração da palavra invertida vazia
    let palavraInvertida = ''
    //loop que irá percorrer a palavra do ultimo caráctere até o primeiro adicionando-os na palavra invertida
    for (let i = palavra.length - 1; i >= 0 ; i--) {
        palavraInvertida += palavra[i]
    }
    console.log(`Palavra original: ${palavra}`)
    console.log(`Palavra invertida: ${palavraInvertida}`)
}

inverterPalavra(palavra)