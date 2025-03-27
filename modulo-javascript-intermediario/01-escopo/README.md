# ***Escopo***

Escopo em JavaScript define o contexto em que variáveis, funções e objetos podem ser acessados ou referenciados. Ele determina a **visibilidade** e **vida útil** de uma variável em diferentes partes do programa.

**Tipos de Escopos no JavaScript**

Existem três tipos principais de escopos em JavaScript:

1. **Escopo Global**
- Variáveis definidas fora de qualquer função ou bloco pertencem ao escopo global.
- Estas variáveis podem ser acessadas de qualquer lugar no programa.
- Exemplo:
    
    ```jsx
    var globalVar = "Sou global!";
    
    function exemplo() {
        console.log(globalVar); // Acessível aqui
    }
    ```
    
1. **Escopo de Função**
- Variáveis declaradas dentro de uma função pertencem ao escopo local daquela função.
- Elas não são acessíveis fora da função.
- Exemplo:
    
    ```jsx
    function exemplo() {
        var localVar = "Sou local!";
        console.log(localVar); // Acessível aqui
    }
    
    console.log(localVar); // Erro! Não é acessível fora da função.
    ```
    

**3. Escopo de Bloco**

- Introduzido no ES6 com as palavras-chave `let` e `const`.
- Variáveis declaradas com `let` ou `const` em blocos `{}` ficam acessíveis apenas dentro daquele bloco.
- Exemplo:
    
    ```jsx
    if (true) {
        let blocoVar = "Sou de bloco!";
        console.log(blocoVar); // Acessível aqui
    }
    
    console.log(blocoVar); // Erro! Fora do bloco, não acessível.
    ```
    

**Hoisting e Escopo**

O conceito de **hoisting** afeta variáveis declaradas com `var`, que são "movidas" para o topo do escopo. No entanto, o hoisting não ocorre da mesma forma para `let` e `const`. Essas variáveis permanecem em um "zona morta temporal" até serem inicializadas.

**Closures e Escopo**

Closures são funções que "lembram" do escopo em que foram criadas, mesmo que o escopo não esteja mais ativo. Isso permite a criação de funções que mantêm acesso a variáveis privadas.

- Exemplo:
    
    ```jsx
    function criaFuncao() {
        let privado = "Acesso restrito!";
        return function() {
            console.log(privado); // Ainda pode acessar "privado".
        };
    }
    
    const funcao = criaFuncao();
    funcao(); // Exibe "Acesso restrito!"
    ```
    

**Diferenças entre var, let e const no Escopo**

| **Característica** | **var** | **let** | **const** |
| --- | --- | --- | --- |
| Escopo | Global ou função | Bloco | Bloco |
| Redefinição | Permitida | Não permitida | Não permitida |
| Reatribuição | Permitida | Permitida | Não permitida |
| Hoisting | Sim | Sim, mas com zona morta temporal | Sim, mas com zona morta temporal |

6. **Escopos Aninhados**

- Escopos em JavaScript podem ser aninhados.
- Uma função interna pode acessar variáveis do escopo pai, mas o contrário não é possível.
- Exemplo:
    
    ```jsx
    function externa() {
        let externo = "Sou do escopo externo!";
        function interna() {
            console.log(externo); // Acessível aqui.
        }
        interna();
    }
    
    externa();
    ```
    

**Conclusão**

Concluindo, o conceito de **escopos em JavaScript** é essencial para organizar e controlar a acessibilidade das variáveis e funções em um programa. Ele fornece clareza sobre como e onde diferentes partes do código podem interagir com os dados. O entendimento dos diferentes tipos de escopos (global, de função e de bloco) e como funcionam com palavras-chave como `var`, `let` e `const` é fundamental para evitar erros e melhorar a eficiência do código.

Além disso, aspectos como **hoisting**, **closures** e **escopos aninhados** ampliam a flexibilidade e o poder da linguagem, permitindo a criação de padrões de programação mais seguros e dinâmicos. Compreender esses conceitos não só ajuda a resolver problemas mais rapidamente, mas também promove boas práticas no desenvolvimento.