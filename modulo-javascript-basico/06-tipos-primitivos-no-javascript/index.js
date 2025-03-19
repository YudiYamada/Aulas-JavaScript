// alert("Abra o console para ver as mensagens secretas")

let saudacao = "Olá, mundo!";
console.log(saudacao.toUpperCase());

let inteiro = 42;
let decimal = 3.14;
console.log(inteiro + decimal);

let numeroGrande = 9007199254740991n;
console.log(numeroGrande + 1n);

let estaAtivo = true;
if (estaAtivo) {
    console.log("O sistema está ativo!");
}

let nada;
console.log(nada);

let vazio = null;
console.log(vazio);

let simbolo1 = Symbol("identificador");
let simbolo2 = Symbol("identificador");
console.log(simbolo1 === simbolo2);