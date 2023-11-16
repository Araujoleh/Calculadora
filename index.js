var historico = [];
const historicos = () => {
    alert(historico)
    var resultado;
    for (var i = 0; i <= historico.length; i++) {
        resultado = historico[i];
    }
    console.log(resultado);
}

const somar = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = parseInt(primeiroValor) + parseInt(segundoValor);
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "+" + segundoValor + " foi: " + resultado)
}
const dividir = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor / segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "/" + segundoValor + " foi: " + resultado)
}
const multiplicar = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor * segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "*" + segundoValor + " foi: " + resultado)
}
const subtrair = () => {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var resultado = primeiroValor - segundoValor;
    alert(resultado)
    historico.push("o resultado da conta: " + primeiroValor + "-" + segundoValor + " foi: " + resultado)
}


// const exercicio1 = () => {
//     var fruta = ["morango", "banana", "abacaxi"];
//     console.log(fruta[0])
//     console.log(fruta[1])
//     console.log(fruta[2])
// }
// exercicio1()
// const exercicio2 = () => {
//     var numeros = []
//     numeros.push(1)
//     numeros.push(2)
//     numeros.push(3)
//     numeros.push(4)
//     numeros.push(5)
//     console.log(numeros)
// }
// exercicio2()
// const exercicio3 = () => {
//     var cores = ["rosa", "preto", "roxo"];
//     cores.pop()
// }
// exercicio3()
// const exercicio4 = () => {
//     var animais = ["cachorro", "gato", "leão", "macaco"];
//     var tamanho = animais.length
//     console.log(tamanho)
// }
// exercicio4()
// const exercicio5 = () => {
//     var numeros = ["5", "4", "3", "2", "1"];
//     if (numeros.includes(3)) {
//         console.log("encontrado")
//     } else {
//         console.log("não encontrado")

//     }
// }
// exercicio5()
// const exercicio6 = () => {
//     var frutas = ["banana", "pera", "maça", "manga"];
//     frutas.pop()
//     frutas.push("goiaba")
// }
// exercicio6()

// const exercicio7 = () => {
//     var pessoa1 = ["leticia", "patricia"];
//     var pessoa2 = ["joaquim", "isaac"]
//     var pessoasTotal = []
//     console.log(pessoasTotal.concat(pessoa1, pessoa2))
// }
// exercicio7()







