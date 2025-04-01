// 1. Escreva uma Promise que resolve após 2 segundos e retorna a mensagem "Promessa resolvida!".
// const minhaPromise = new Promise((resolvida, rejeitada) => {
//   let sucesso = true;

//   setTimeout(() => {
//     if (sucesso) {
//       resolvida("Promessa resolvida!");
//     } else {
//       rejeitada("Promessa resolvida não resolvida!");
//     }
//   }, 2000);
// });

// minhaPromise
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((erro) => {
//     console.error(erro);
//   });

// 2. Crie uma Promise que rejeita com a mensagem "Erro na requisição" após 3 segundos.
// const minhaPromise2 = new Promise((resolvida, rejeitada) => {
//   let sucesso = false;

//   setTimeout(() => {
//     if (sucesso) {
//       resolvida("Requisição Resolvida");
//     } else {
//       rejeitada("Erro na requisição");
//     }
//   }, 3000);
// });

// minhaPromise2
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((erro) => {
//     console.error(erro);
//   });

// 3. Faça uma Promise que retorna um número aleatório entre 1 e 10. Encadeie .then() para exibir "Par" ou "Ímpar" dependendo do resultado.
// const numeroAleatorioPromise = new Promise((par, impar) => {
//   let gerarNumeroAleatorio = Math.floor(Math.random() * 10) + 1;

//   if (gerarNumeroAleatorio % 2 === 0) {
//     par(`O número ${gerarNumeroAleatorio} é par`);
//   } else {
//     impar(`O número ${gerarNumeroAleatorio} é impar`);
//   }
// });

// numeroAleatorioPromise
//   .then((par) => {
//     console.log(par);
//   })
//   .catch((impar) => {
//     console.log(impar);
//   });

// 4. Simule um erro dentro da Promise e capture-o usando .catch().
// const promiseComError = new Promise((resolvida, rejeitada) => {
//   let operacaoConcluida = false;

//   if (operacaoConcluida === true) {
//     resolvida("Operação concluída com sucesso");
//   } else {
//     rejeitada("Operação rejeitada");
//   }
// });

// promiseComError
//   .then((resolvida) => {
//     console.log(resolvida)
//   })
//   .catch((rejeitada) => {
//     console.log(rejeitada)
//   })

// 5. Crie 3 Promises que resolvem após tempos diferentes. Use `Promise.all()` para esperar todas serem resolvidas e exibir os resultados.
// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then((valores) => {
//     console.log(valores);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 6. Crie duas Promises, uma resolvendo após 2 segundos e outra após 5 segundos. Use `Promise.race()` para exibir qual Promise foi resolvida primeiro.
// const promiseDoisSeg = new Promise(resolvida => setTimeout(resolvida, 2000, 'promiseDoisSeg resolvida'));
// const promiseCincoSeg = new Promise(resolvida => setTimeout(resolvida, 5000, 'promiseCincoSeg resolvida'));

// Promise.race([promiseDoisSeg, promiseCincoSeg]).then(value => console.log(value))

// 7. Use `fetch()` para obter dados de uma API pública, como "https://jsonplaceholder.typicode.com/todos/1".
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((resposta) => {
//   if (!resposta.ok) {
//     throw new Error("Erro na requisição: " + resposta.status);
//   }
//   return resposta.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.error("Erro:", error);
// });

// 8. Faça uma Promise que retorna um nome de usuário. No próximo `.then()`, busque detalhes do usuário. No último `.then()`, exiba os dados na tela.
// function obterNomeUsuario() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Yudi");
//     }, 1000);
//   });
// }

// function obterDetalhesUsuario(nomeUsuario) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ nome: nomeUsuario, idade: 24, cidade: "Bragança" });
//     }, 1000);
//   });
// }

// obterNomeUsuario()
//   .then((nomeUsuario) => {
//     console.log("Nome do usuário:", nomeUsuario);
//     return obterDetalhesUsuario(nomeUsuario);
//   })
//   .then((detalhesUsuario) => {
//     console.log("Detalhes do usuário:", detalhesUsuario);
//   })
//   .catch((erro) => {
//     console.error("Erro:", erro);
//   });

// 9. Pegue uma função assíncrona baseada em callback e refatore-a para usar Promises.
// function buscarDadosUsuario(id, callback) {
//   setTimeout(() => {
//     const usuario = { id, nome: "Yudi", cidade: "Bragança" };
//     callback(null, usuario);
//   }, 1000);
// }

// buscarDadosUsuario(1, (erro, usuario) => {
//   if (erro) {
//     console.error("Erro ao buscar usuário:", erro);
//   } else {
//     console.log("Usuário encontrado:", usuario);
//   }
// });

// function buscarDadosUsuario(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const usuario = { id, nome: "Yudi", cidade: "Bragança" };
//       resolve(usuario);
//     }, 1000);
//   });
// }

// buscarDadosUsuario(1)
//   .then((usuario) => {
//     console.log("Usuário encontrado:", usuario);
//   })
//   .catch((erro) => {
//     console.error("Erro ao buscar usuário:", erro);
//   });

// 10. Converta uma Promise existente para ser chamada usando async/await.
function buscarDadosUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = { id, nome: "Yudi", cidade: "Bragança" };
      resolve(usuario);
    }, 1000);
  });
}

buscarDadosUsuario(1)
  .then((usuario) => {
    console.log("Usuário encontrado:", usuario);
  })
  .catch((erro) => {
    console.error("Erro ao buscar usuário:", erro);
  });

async function obterUsuario() {
  try {
    const usuario = await buscarDadosUsuario(1);
    console.log("Usuário encontrado:", usuario);
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
  }
}

obterUsuario();
