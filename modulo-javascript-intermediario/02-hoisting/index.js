console.log(a); // undefined (não ocorre erro)
var a = 10;
console.log(a); // 10

console.log(b); // ReferenceError
let b = 20;

saudacao(); // "Olá!"
function saudacao() {
    console.log("Olá!");
}

soma(); // TypeError: soma não é uma função
var soma = function() {
    return 5 + 5;
};