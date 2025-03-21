// Questão 01 - Verificar Igualdade Simples
function questao1() {
  const questao1numero1 = document.getElementById("questao1numero1").value;
  const questao1numero2 = document.getElementById("questao1numero2").value;

  if (questao1numero1 === questao1numero2) {
    alert("são iguais");
  } else {
    alert("não são iguais");
  }
}

// Questão 02 - Comparação de Idades
function questao2() {
  const questao2idade1 = document.getElementById("questao2idade1").value;
  const questao2idade2 = document.getElementById("questao2idade2").value;

  if (questao2idade1 === questao2idade2) alert("ambas são iguais");
  else if (questao2idade1 > questao2idade2)
    alert(`A idade ${questao2idade1} é maior`);
  else alert(`A idade ${questao2idade2} é maior`);
}

// Questão 03 - Maior ou Igual a Zero
function questao3() {
  const questao3numero1 = document.getElementById("questao3numero1").value;

  if (questao3numero1 >= 0) {
    alert("True");
  } else {
    alert("False");
  }
}

// Questão 04 - Condições com "E" (&&)
function questao4() {
  const questao4numero1 = document.getElementById("questao4numero1").value;
  const questao4radio = document.querySelector(
    'input[name="questao4radio"]:checked'
  );

  if (!questao4radio) {
    alert("Por favor, selecione se você possui carteira de habilitação.");
    return;
  }

  if (questao4numero1 >= 18 && questao4radio.value === "questao4radiosim") {
    alert("Parabéns! Você atende os critérios de elegibilidade.");
  } else {
    alert("Desculpe, você não atende os critérios de elegibilidade.");
  }
}

// Questão 05 - Condições com "OU" ( || )
function questao5() {
  const questao5radioconvite = document.querySelector(
    'input[name="questao5radioconvite"]:checked'
  );

  const questao5radiolista = document.querySelector(
    'input[name="questao5radiolista"]:checked'
  );

  if (
    questao5radioconvite.value === "questao5radioconvitesim" ||
    questao5radiolista.value === "questao5radiolistasim"
  ) {
    alert("Pode entrar");
  } else {
    alert("Não pode entrar");
  }
}

// Questão 06 - Negação (!)
function questao6() {
  const questao6radio = document.querySelector(
    "input[name='questao6radio']:checked"
  );

  return alert(!questao6radio);
}

// Questão 07 - Cálculo de Desconto
function questao7() {
  const questao7 = document.getElementById("questao7").value;

  let desconto = questao7 * 0.8;

  alert(`com o desconto fica R$${desconto}`);
}

// Questão 08 - Cálculo de Média
function questao8() {
  const numero01 = parseFloat(
    document.getElementById("questao8numero01").value
  );
  const numero02 = parseFloat(
    document.getElementById("questao8numero02").value
  );
  const numero03 = parseFloat(
    document.getElementById("questao8numero03").value
  );

  let calcularMedia = (numero01 + numero02 + numero03) / 3;

  alert(`A média dos números é de ${calcularMedia}`);
}

// Questão 09 - Tabuada de Multiplicação
function questao9() {
  const numero = parseInt(document.getElementById("questao9numero").value);

  let resultado = `Tabuada do ${numero}:\n`;

  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(resultado);
}

// Questão 10 - Imprimir Números de 1 a 100
function questao10() {
  let resultado = "";
  for (let i = 1; i <= 100; i++) {
    resultado += i + " ";
  }
  alert(resultado);
}

// Questão 11 - Números Ímpares de 1 a 50
function questao11() {
  let numerosImpares = "";
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      numerosImpares += i + "";
    }
  }
  alert(numerosImpares);
}

// Questão 12 -
function questao12() {
  const entrada = document.getElementById("questao12").value;
  const arrayNumeros = entrada.split(",").map(Number); 
  const soma = somaArray(arrayNumeros); 
  alert(`A soma é: ${soma}`); 

  function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    return soma;
  }
}

