const prompt = require('prompt-sync')();

function soma(a, b){
        let resultado = a + b;
    
    return resultado
}

function subtracao(a, b){
        let resultado = a - b;

    return resultado
}

function multiplicacao(a, b){
        let resultado = a * b;

    return resultado
}

function divisao(a, b){
        let resultado = a / b

    return resultado
}

function porcentagem(a, b){
        let resultado = (a / b) * 100

    return resultado + "%"
}

let escolha = (prompt("Qual operação deseja realizar? (Escolher entre adição, subtração, multiplicação, divisão e porcentagem)" ))
let operacao = escolha.toLowerCase().replace(/ã/g, 'a').replace(/ç/g, 'c')
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

    if(numero1 === NaN || numero2 === NaN){      
        console.log("Você não digitou um número, por favor digite números válidos!")   
    } if(operacao == "adicao"){
            console.log(`O resultado da sua conta é ${soma(numero1, numero2)}`)
    } else if (operacao == "subtracao") {
            console.log(`O resultado da sua conta é ${subtracao(numero1, numero2)}`)
    } else if (operacao == "multiplicacao") {
            console.log(`O resultado da sua conta é ${multiplicacao(numero1, numero2)}`)
    } else if(operacao == "divisao"){
            console.log(`O resultado da sua conta é ${divisao(numero1, numero2)}`)
    } else if(operacao == "porcentagem" || operacao == "percentual"){
            console.log(`O número ${numero1} equivale a ${porcentagem(numero1, numero2)} do número ${numero2}`)
    } else{
        console.log("Você não digitou uma operação válida, favor escolher entre as opções válidas.")
    }
