# ***Operadores Matemáticos***

Os operadores matemáticos são usados para realizar cálculos básicos e avançados, como soma, subtração, multiplicação, divisão e outras operações aritméticas. Eles podem ser usados em números, variáveis ou expressões.

**Lista de Operadores Matemáticos**

1. **Adição (`+`)**
    - Soma dois valores.
    - **Exemplo:**
        
        ```jsx
        let x = 5;
        let y = 3;
        console.log(x + y); // 8
        ```
        
2. **Subtração (`-`)**
    - Subtrai um valor do outro.
    - **Exemplo:**
        
        ```jsx
        console.log(x - y); // 2
        ```
        
3. **Multiplicação (`*`)**
    - Multiplica dois valores.
    - **Exemplo:**
        
        ```jsx
        console.log(x * y); // 15
        ```
        
4. **Divisão (`/`)**
    - Divide um valor pelo outro.
    - **Exemplo:**
        
        ```jsx
        console.log(x / y); // 1.6667
        ```
        
5. **Módulo (`%`)**
    - Retorna o resto da divisão entre dois números.
    - **Exemplo:**
        
        ```jsx
        console.log(x % y); // 2
        ```
        
6. **Incremento (`++`)**
    - Incrementa o valor de uma variável em `1`.
    - **Exemplo:**
        
        ```jsx
        let a = 5;
        a++;
        console.log(a); // 6
        ```
        
7. **Decremento (`-`)**
    - Decrementa o valor de uma variável em `1`.
    - **Exemplo:**
        
        ```jsx
        let a = 5;
        a--;
        console.log(a); // 4
        ```
        

**Operadores Matemáticos Avançados**

1. **Exponenciação (`*`)**
    - Eleva um número à potência de outro.
    - **Exemplo:**
        
        ```jsx
        console.log(2 ** 3); // 8
        ```
        
2. **Negativo (`-`)**
    - Inverte o sinal de um número.
    - **Exemplo:**
        
        ```jsx
        let b = 5;
        console.log(-b); // -5
        ```
        

**Precedência dos Operadores**

A ordem de execução dos operadores segue regras de precedência:

1. Parênteses `( )` têm a maior precedência.
2. Exponenciação (`*`).
3. Multiplicação (`*`), Divisão (`/`) e Módulo (`%`).
4. Adição (`+`) e Subtração (`-`).

**Exemplo:**

```jsx
console.log(2 + 3 * 4); // 14 (multiplicação acontece antes da adição)
console.log((2 + 3) * 4); // 20 (parênteses têm maior precedência)
```

**Operadores Matemáticos com Atribuição**

É possível combinar operadores matemáticos com atribuição:

1. **Adição com atribuição (`+=`)**
    
    ```jsx
    let x = 5;
    x += 3; // x = x + 3
    console.log(x); // 8
    ```
    
2. **Subtração com atribuição (`=`), Multiplicação (`=`), Divisão (`/=`), Módulo (`%=`)**
    
    ```jsx
    let y = 10;
    y *= 2; // y = y * 2
    console.log(y); // 20
    ```
    

**Operações com Tipagens Diferentes**
Quando você soma uma string com um número, o número é convertido em uma string e os dois valores são concatenados. Isso significa que, em vez de realizar uma adição aritmética, o JavaScript junta os dois valores como texto.

Por exemplo:

```jsx
let numero = 5;
let texto = "10";
let resultado = numero + texto; // resultado será "510"
```

Neste caso, o número `5` é convertido para a string `"5"` e concatenado com a string `"10"`, resultando na string `"510"`.

Se precisar realizar operações matemáticas com valores que podem ser strings, é importante converter essas strings para números usando funções como `parseInt()` ou `parseFloat()`:

```jsx
let texto = "10";
let numero = 5;
let resultado = parseInt(texto) + numero; // resultado será 15
```

Isso garante que a operação aritmética seja realizada corretamente.

**Conclusão**
Os operadores matemáticos em JavaScript são fundamentais para realizar cálculos e manipular valores de forma eficiente. Desde operações básicas, como soma e subtração, até funcionalidades avançadas, como exponenciação e precedência, eles são ferramentas essenciais para programadores. Combiná-los com operadores de atribuição pode otimizar o código, tornando-o mais claro e eficiente. Dominar esses conceitos é crucial para desenvolver aplicações dinâmicas e matematicamente precisas.