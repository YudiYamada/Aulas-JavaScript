// Manipulando o DOM
let p = document.getElementById("paragrafo1");
console.log(p);

let inputsPorClasse = document.getElementsByClassName("tag-de-input");
console.log(inputsPorClasse);

let inputPorTag = document.getElementsByTagName("h2");
console.log(inputPorTag);

let inputPorName = document.querySelectorAll("input[name='email']");
console.log(inputPorName);
console.log(inputPorName[1]);


// Como manipular os elementos do DOM
