var globalVar = "Sou global!";

function exemplo() {
    console.log(globalVar); // Acessível aqui
}


function exemplo() {
    var localVar = "Sou local!";
    console.log(localVar); // Acessível aqui
}

console.log(localVar); // Erro! Não é acessível fora da função.


function exemplo() {
    var localVar = "Sou local!";
    console.log(localVar); // Acessível aqui
}

console.log(localVar); // Erro! Não é acessível fora da função.