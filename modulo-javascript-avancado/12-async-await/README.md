**O que São Async e Await?**

**`Async**` e **`await`**  foram introduzidos no ECMAScript 2017 (ES8) para simplificar o tratamento de operações assíncronas. Eles permitem que escrevamos código que se assemelha a código síncrono, embora sob o capô este seja assíncrono, facilitando a leitura e a manutenção.

**A Palavra-chave `async`**

- Ao colocar `async` antes de uma função, você a transforma em uma função assíncrona.
- Uma função marcada com `async` sempre retorna uma **Promise**.
    - Se a função retornar um valor não-Promise, este valor será automaticamente encapsulado em uma Promise resolvida.
    - Se ocorrer uma exceção dentro da função, a Promise será rejeitada com o erro gerado.

**Exemplo:**

```jsx
async function saudacao() {
    return "Olá, mundo!"; // Retorno tratado como Promise resolvida
}

saudacao().then(mensagem => console.log(mensagem)); // Saída: Olá, mundo!
```

**A Palavra-chave `await`**

- A palavra-chave `await` só pode ser usada dentro de funções marcadas com `async`.
- Ela faz com que a execução da função seja **pausada** até que a Promise à sua direita seja resolvida ou rejeitada.
    - Se a Promise for resolvida, `await` retorna o valor resolvido.
    - Se for rejeitada, a execução lança o erro, o que pode ser capturado com um bloco `try-catch`.

**Exemplo:**

```jsx
async function carregarDados() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Dados carregados!"), 2000);
    });

    const resultado = await promessa;  // Espera 2 segundos até que a Promise seja resolvida
    console.log(resultado);  // Saída: Dados carregados!
}

carregarDados();
```

**Tratamento de Erros com Async/Await**

Para capturar erros durante a execução de operações assíncronas, é usual envolver as chamadas com `await` em um bloco `try-catch`. Isso permite um tratamento de exceções de forma similar ao síncrono.

**Exemplo:**

```jsx
async function buscarUsuario() {
    try {
        // Simulando uma operação que pode falhar, como uma chamada de API
        const resposta = await fetch("https://api.exemplo.com/usuario");
        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }
        const usuario = await resposta.json();
        console.log(usuario);
    } catch (erro) {
        console.error("Erro ao buscar os dados do usuário:", erro);
    }
}

buscarUsuario();
```

**Utilizando `await` com `Promise.all`**

Uma das grandes vantagens do async/await é a facilidade para lidar com múltiplas Promises em paralelo utilizando `Promise.all`:

**Exemplo:**

```jsx
async function carregarMultiplosDados() {
    try {
        const [dados1, dados2] = await Promise.all([
            fetch("https://api.example.com/dados1").then(res => res.json()),
            fetch("https://api.example.com/dados2").then(res => res.json())
        ]);
        console.log("Dados 1:", dados1);
        console.log("Dados 2:", dados2);
    } catch (erro) {
        console.error("Erro ao carregar uma ou mais fontes:", erro);
    }
}

carregarMultiplosDados();
```

**Vantagens do Async/Await**

1. **Legibilidade e Clareza**
    
    O código escrito com async/await se assemelha ao código síncrono, facilitando o entendimento do fluxo de execução.
    
2. **Tratamento Simplificado de Erros**
    
    A utilização de blocos `try-catch` permite capturar exceções de forma direta.
    
3. **Redução de Encadeamentos Complexos**
    
    Elimina a necessidade de encadeamento intenso com `.then()` e `.catch()`, evitando o "callback hell" e mantendo o código mais linear.
    

**Considerações Finais**

- **Async/await não bloqueia o Event Loop**
    
    Apesar de a execução dentro da função async ser pausada com `await`, o Event Loop continua processando outras tarefas.
    
- **Compatibilidade**
    
    Funciona em conjunto com Promises, ou seja, pode ser utilizado em qualquer situação em que Promises estejam presentes no seu código.