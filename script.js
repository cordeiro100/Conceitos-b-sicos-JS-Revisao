// //Relembrando conceitos básicos e praticando novamente JS

// var listaDeAprovados = ["Joana", "Lucas", "Maria", "Gabriel"];
// console.log(listaDeAprovados);

// //Adicionando nova string no Array
// listaDeAprovados.push("José");
// console.log(listaDeAprovados);

// var cores = ["Branco", "Vermelho", "Preto"];
// console.log(cores);

// cores.length;
// console.log(cores.length)
// console.log(cores[0])

// var primeiroNome = "Lucas"

// var segundoNome = "Cordeiro"

// var nomeCompleto = primeiroNome + "" + segundoNome
// console.log(nomeCompleto)

// var numero = 7

// for (let contador = 1; contador <= 9; contador++) {
//     console.log(numero * contador)
// }

var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
}

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;
  return "Acelerando a" + aceleracao + "m/s²";
}

function frear(decremento) {
  aceleracao = aceleracao - decremento;

  return "Desacelerando para" + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;

  return rotacaoDoVolante + "º";
}
