const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
  const mesAtual = 2;
  let anoDeNascimento = 2021 - idade;
  if (mesDeNascimento > mesAtual) anoDeNascimento--;
  imprimir(anoDeNascimento);
};

let impirmirAnoDeNascimento = (anoDeNascimento) => {
  console.log("Seu ano de nascimento é: " + anoDeNascimento);
};

calcularAnoDeNascimento(33, 3, impirmirAnoDeNascimento);
