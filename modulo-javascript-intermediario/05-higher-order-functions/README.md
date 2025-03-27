# ***Higher order functions***

As **Higher Order Functions (Funções de Ordem Superior)** são funções em JavaScript que recebem outras funções como argumentos, retornam uma função ou ambas. Elas são um componente fundamental da programação funcional, promovendo código mais modular, reutilizável e legível

**Definição**

Uma função é considerada **Higher Order** quando:

- Aceita outra função como argumento.
- Retorna uma função como resultado.

Isso permite criar abstrações poderosas para manipular dados, controlar fluxo e encapsular comportamentos.

**Exemplos Comuns de Higher Order Functions**

1. **Métodos de Arrays**
    
    Os métodos de array nativos do JavaScript, como `map()`, `filter()` e `reduce()`, são exemplos populares de funções de ordem superior.
    
    - **`map()`**:
    Aplica uma função a cada elemento de um array, retornando um novo array com os resultados.
        
        ```jsx
        const numeros = [1, 2, 3];
        const dobro = numeros.map(n => n * 2);
        console.log(dobro); // [2, 4, 6]
        ```
        
    - **`filter()`**:
    Retorna um novo array contendo apenas os elementos que atendem a uma condição.
        
        ```jsx
        const numeros = [1, 2, 3, 4, 5];
        const pares = numeros.filter(n => n % 2 === 0);
        console.log(pares); // [2, 4]
        ```
        
    - **`reduce()`**:
    Reduz um array a um único valor, acumulando resultados de uma função em um iterador.
        
        ```jsx
        const soma = [1, 2, 3].reduce((acum, n) => acum + n, 0);
        console.log(soma); // 6
        ```
        

**2. Funções como Callbacks**

Callbacks são funções passadas como argumentos para serem executadas posteriormente.

```jsx
function saudacao(nome, callback) {
    const mensagem = `Olá, ${nome}!`;
    callback(mensagem);
}

saudacao("Yudi", mensagem => console.log(mensagem));
// Saída: "Olá, Yudi!"
```

**3. Funções Retornando Outras Funções**

Higher order functions também podem retornar novas funções com comportamentos personalizados.

```jsx
function multiplicador(fator) {
    return numero => numero * fator;
}

const dobrar = multiplicador(2);
console.log(dobrar(5)); // 10
```

**Vantagens das Higher Order Functions**

- **Reutilização de Código:**
Reduzem duplicação e promovem a modificação de comportamentos sem alterar o código base.
- **Abstração:**
Permitem criar funções genéricas para resolver problemas comuns, como transformar, filtrar ou agregar dados.
- **Legibilidade:**
Tornam o código mais expressivo e próximo da linguagem natural.

**Aplicações Práticas**

- **Manipulação de Arrays:** Para transformações, filtragens e cálculos em listas de dados.
- **Programação Assíncrona:** Promessas e métodos como `then()`, `catch()` e `finally()` utilizam callbacks.
- **Criação de Middleware:** Comum em frameworks como Express.js, onde funções intermediárias são criadas para processar requisições.

**Cuidados ao Usar Higher Order Functions**

- Evitar abusar de chamadas aninhadas, pois isso pode prejudicar a legibilidade.
- Garantir que as funções passadas como argumentos sejam bem definidas para evitar erros inesperados.
- Desempenho pode ser afetado em loops muito extensos; nesses casos, considerar otimizações.

**Conclusão**

As **Higher Order Functions** são um dos pilares do JavaScript moderno, permitindo a escrita de código conciso, modular e expressivo. Sua aplicação é indispensável ao trabalhar com arrays, manipulação de dados e programação funcional em geral. Dominar esse conceito abre portas para um desenvolvimento mais eficiente e alinhado às melhores práticas.