# ***Operadores de Comparação***

Os operadores de comparação são usados para comparar dois valores e retornar um resultado booleano (`true` ou `false`). Eles são essenciais para controlar a lógica condicional no código, como em instruções `if`, loops e muito mais.

**Lista de Operadores de Comparação**

1. **Igual (`==`)**
    - Compara os valores **após converter** os tipos para um tipo comum (coerção de tipo).
    - **Exemplo:**
        
        ```jsx
        console.log(3 == '3'); // true
        console.log(3 == 3);   // true
        console.log(3 == 4);   // false
        ```
        
2. **Estritamente Igual (`===`)**
    - Compara os valores e seus **tipos**; não realiza coerção de tipo.
    - **Exemplo:**
        
        ```jsx
        console.log(3 === '3'); // false
        console.log(3 === 3);   // true
        ```
        
3. **Não Igual (`!=`)**
    - Compara os valores para desigualdade, **convertendo os tipos** se necessário.
    - **Exemplo:**
        
        ```jsx
        console.log(3 != '3'); // false
        console.log(3 != 4);   // true
        ```
        
4. **Estritamente Não Igual (`!==`)**
    - Compara os valores e seus tipos, sem coerção de tipo.
    - **Exemplo:**
        
        ```jsx
        console.log(3 !== '3'); // true
        console.log(3 !== 3);   // false
        ```
        
5. **Menor que (`<`)**
    - Retorna `true` se o valor à esquerda for menor que o da direita.
    - **Exemplo:**
        
        ```jsx
        console.log(3 < 5);  // true
        console.log(5 < 3);  // false
        ```
        
6. **Menor ou Igual (`<=`)**
    - Retorna `true` se o valor à esquerda for menor ou igual ao da direita.
    - **Exemplo:**
        
        ```jsx
        console.log(3 <= 5); // true
        console.log(5 <= 5); // true
        console.log(6 <= 5); // false
        ```
        
7. **Maior que (`>`)**
    - Retorna `true` se o valor à esquerda for maior que o da direita.
    - **Exemplo:**
        
        ```jsx
        console.log(5 > 3);  // true
        console.log(3 > 5);  // false
        ```
        
8. **Maior ou Igual (`>=`)**
    - Retorna `true` se o valor à esquerda for maior ou igual ao da direita.
    - **Exemplo:**
        
        ```jsx
        console.log(5 >= 3); // true
        console.log(5 >= 5); // true
        console.log(3 >= 5); // false
        ```
        

**Coerção de Tipo nos Operadores de Comparação**

- Nos operadores `==` e `!=`, JavaScript tenta converter os valores para o mesmo tipo antes de compará-los.
- Isso pode levar a resultados inesperados:
    
    ```jsx
    console.log(0 == false); // true (0 é convertido para `false`)
    console.log('' == false); // true (string vazia é convertida para `false`)
    ```
    

**Quando usar `==` ou `===`?**

- Use `===` e `!==` sempre que possível, já que eles evitam os comportamentos imprevisíveis causados pela coerção de tipo.
- Evite `==` e `!=` a menos que saiba exatamente como a coerção de tipo funciona.

**Operadores em Expressões Condicionais**

Os operadores de comparação geralmente são usados em condições:

```jsx
const age = 18;

if (age >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade.");
}
```

**Conclusão**
Os operadores de comparação são ferramentas essenciais no JavaScript para controlar a lógica condicional e verificar relações entre valores. Com uma compreensão sólida desses operadores, você pode escrever códigos mais eficientes, claros e livres de ambiguidades.