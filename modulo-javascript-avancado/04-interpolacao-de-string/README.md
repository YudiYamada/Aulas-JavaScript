Template strings, também conhecidos como template literals, são uma maneira poderosa e conveniente de trabalhar com strings em JavaScript. Eles permitem a interpolação de expressões e a criação de strings multi-linhas de forma mais legível e concisa.

**Sintaxe Básica**

Os template strings são delimitados por crases ````, em vez de aspas simples ou duplas. Dentro das crases, você pode usar `${}` para interpolar variáveis e expressões JavaScript.

**Exemplo Simples de Interpolação**

```jsx
const nome = "Maria";
const idade = 30;

const saudacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(saudacao); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
```

**Exemplo com Expressões**

Você pode inserir qualquer expressão JavaScript dentro de `${}`:

```jsx
const a = 5;
const b = 10;

const resultado = `A soma de ${a} e ${b} é ${a + b}.`;

console.log(resultado); // Saída: A soma de 5 e 10 é 15.
```

**Multi-linhas**

Os template strings também facilitam a criação de strings multi-linhas:

```jsx
const texto = `Esta é uma string
que se estende por
várias linhas.`;

console.log(texto);
// Saída:
// Esta é uma string
// que se estende por
// várias linhas.
```

**Vantagens**

- **Legibilidade**: A sintaxe das template strings é mais legível, especialmente para strings longas e multi-linhas.
- **Flexibilidade**: A capacidade de interpolar expressões diretamente dentro das strings é extremamente útil e flexível.