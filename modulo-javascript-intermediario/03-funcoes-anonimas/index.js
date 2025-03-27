const soma = function(a, b) {
    return a + b;
};

console.log(soma(3, 4)); // Saída: 7

setTimeout(function() {
    console.log("Executado após 1 segundo");
}, 1000);

(function() {
    console.log("Função anônima executada imediatamente!");
})();