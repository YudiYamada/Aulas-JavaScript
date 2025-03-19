# ***Funções***

Funções são blocos de código reutilizáveis que podem ser chamados para realizar uma tarefa específica. Elas permitem modularizar o código, evitando repetições e promovendo a eficiência e a clareza no desenvolvimento.

**Criando e Usando Funções**

1. **Declaração de Função**
    - Define uma função com um nome e um bloco de código.
    - **Exemplo:**
        
        ```jsx
        function saudacao() {
          console.log("Olá, Yudi!");
        }
        saudacao(); // Chama a função
        ```
        
2. **Parâmetros e Argumentos**
    - Parâmetros são variáveis definidas na função; argumentos são valores passados ao chamá-la.
    - **Exemplo:**
        
        ```jsx
        function soma(a, b) {
          return a + b;
        }
        console.log(soma(3, 5)); // Saída: 8
        ```
        
3. **Retorno (`return`)**
    - Funções podem devolver valores usando o `return`.
    - **Exemplo:**
        
        ```jsx
        function quadrado(num) {
          return num * num;
        }
        console.log(quadrado(4)); // Saída: 16
        ```
        

**Tipos de Funções**

1. **Funções Nomeadas**
    - Declaração padrão de função.
    - **Exemplo:**
        
        ```jsx
        function exemplo() {
          console.log("Função nomeada");
        }
        ```
        
2. **Funções Anônimas**
    - Não possuem nome e são atribuídas a variáveis ou usadas em callbacks.
    - **Exemplo:**
        
        ```jsx
        const saudacao = function() {
          console.log("Olá!");
        };
        saudacao();
        ```
        
3. **Arrow Functions**
    - Sintaxe mais curta para criar funções, introduzida no ES6.
    - Não possui `this` próprio, herdando o do contexto.
    - **Exemplo:**
        
        ```jsx
        const soma = (a, b) => a + b;
        console.log(soma(2, 3)); // Saída: 5
        ```
        
4. **Funções de Ordem Superior**
    - Recebem outras funções como argumentos ou retornam funções.
    - **Exemplo:**
        
        ```jsx
        function executar(funcao) {
          funcao();
        }
        executar(() => console.log("Executando uma função de callback!"));
        ```
        
5. **Funções IIFE (Immediately Invoked Function Expression)**
    - Executadas imediatamente após serem declaradas.
    - **Exemplo:**
        
        ```jsx
        (function() {
          console.log("Função executada imediatamente");
        })();
        ```
        

**Escopo e Funções**

1. **Escopo Local**
    - Variáveis definidas dentro de uma função só são acessíveis dentro dela.
    - **Exemplo:**
        
        ```jsx
        function teste() {
          let local = "Estou dentro da função";
          console.log(local);
        }
        teste(); // Saída: Estou dentro da função
        // console.log(local); // Erro: local não está definido
        ```
        
2. **Escopo Global**
    - Variáveis definidas fora de uma função são acessíveis em qualquer lugar.
    - **Exemplo:**
        
        ```jsx
        let global = "Estou fora das funções";
        function exibirGlobal() {
          console.log(global);
        }
        exibirGlobal(); // Saída: Estou fora das funções
        ```
        

**Funções Assíncronas**

1. **Funções Assíncronas (`async/await`)**
    - Permitem trabalhar com operações assíncronas de maneira mais legível.
    - **Exemplo:**
        
        ```jsx
        async function carregarDados() {
          const resposta = await fetch("<https://api.example.com>");
          const dados = await resposta.json();
          console.log(dados);
        }
        carregarDados();
        
        ```
        
2. **Funções de Callback**
    - Passam uma função como argumento para executar após uma operação.
    - **Exemplo:**
        
        ```jsx
        function carregar(callback) {
          console.log("Carregando...");
          callback();
        }
        carregar(() => console.log("Finalizado!"));
        
        ```
        
3. **Promises**
    - São usadas para lidar com operações assíncronas.
    - **Exemplo:**
        
        ```jsx
        const promessa = new Promise((resolve, reject) => {
          let sucesso = true;
          if (sucesso) resolve("Deu certo!");
          else reject("Deu errado!");
        });
        
        promessa
          .then((mensagem) => console.log(mensagem))
          .catch((erro) => console.log(erro));
        
        ```
        

**Dicas Importantes**

- Dê nomes claros e significativos às funções.
- Mantenha o código modular, criando funções pequenas e reutilizáveis.
- Utilize arrow functions para maior concisão, quando apropriado.
- Controle o escopo das variáveis para evitar conflitos e melhorar a segurança do código.

**Conclusão**
As funções são um dos pilares do JavaScript, permitindo que você modularize, reutilize e organize seu código de forma eficiente e clara. Compreender os diferentes tipos de funções, seus escopos e como utilizá-las, seja de forma síncrona ou assíncrona, é essencial para criar aplicações dinâmicas e bem estruturadas. O domínio das funções é um passo fundamental para evoluir como desenvolvedor e escrever códigos mais robustos e flexíveis.

# ***O que é um Parâmetro?***

Em programação, um **parâmetro** é uma variável definida em uma função que serve como um recipiente para valores passados no momento em que a função é chamada. Os parâmetros permitem que as funções sejam reutilizáveis e mais flexíveis, pois podem processar valores diferentes sem que seja necessário alterar seu código diretamente.

**Como funciona?**

1. **Definição do Parâmetro:**
    - Ao criar uma função, você define parâmetros dentro dos parênteses da declaração.
    
    ```jsx
    function saudacao(nome) {
      console.log(`Olá, ${nome}!`);
    }
    ```
    
2. **Argumento na Chamada da Função:**
    - Quando a função é chamada, você passa um **argumento** que será atribuído ao parâmetro.
    
    ```jsx
    saudacao('Yudi'); // Saída: Olá, Yudi!
    ```
    

**Diferença entre Parâmetro e Argumento**

- **Parâmetro:** É o nome da variável definida na declaração da função.
- **Argumento:** É o valor real passado para a função no momento da chamada.

**Múltiplos Parâmetros**

- Uma função pode ter vários parâmetros.
    
    ```jsx
    function soma(a, b) {
      return a + b;
    }
    console.log(soma(5, 3)); // Saída: 8
    ```
    

**Parâmetros Opcionais ou Valor Padrão**

- Você pode definir valores padrão para parâmetros, caso nenhum argumento seja passado.
    
    ```jsx
    function saudacao(nome = 'Visitante') {
      console.log(`Olá, ${nome}!`);
    }
    saudacao(); // Saída: Olá, Visitante!
    ```
    

**Conclusão**
Os parâmetros são essenciais em programação, pois permitem que funções sejam dinâmicas, reutilizáveis e adaptáveis a diferentes situações. Ao compreender seu papel e como utilizá-los, você pode construir códigos mais eficientes e flexíveis. Eles são a base para modularizar a lógica do programa e personalizar a execução de funções de acordo com as necessidades do momento.