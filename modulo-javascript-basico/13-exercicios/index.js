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

  if (questao5radioconvite.value === "questao5radioconvitesim" || questao5radiolista.value === "questao5radiolistasim") {
    alert("Pode entrar")
  } else {
    alert("Não pode entrar")
  }
}
