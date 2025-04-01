O parâmetro rest (`...`) em JavaScript permite que uma função receba um número indefinido de argumentos como um array. Isso é útil quando você não sabe de antemão quantos argumentos serão passados para a função ou quando quer trabalhar com um grupo variável de valores.

**Sintaxe**

A sintaxe para o parâmetro rest é semelhante à do operador spread, mas ele é usado no contexto da definição de funções. Aqui está a sintaxe básica:

```jsx
function funcao(...parametros) {
  // código da função
}
```

**Exemplo Simples**

Vamos ver um exemplo onde usamos o parâmetro rest para somar uma quantidade arbitrária de números:

```jsx
function somar(...numeros) {
  return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(somar(1, 2, 3)); // Saída: 6
console.log(somar(4, 5, 6, 7, 8)); // Saída: 30
```

Neste exemplo, a função `somar` pode receber qualquer número de argumentos, que são transformados em um array chamado `numeros`.

**Exemplo com Múltiplos Parâmetros**

Você pode usar o parâmetro rest junto com outros parâmetros, mas ele deve ser o último parâmetro:

```jsx
function descreverPessoa(nome, idade, ...hobbies) {
  console.log(`${nome} tem ${idade} anos e gosta de: ${hobbies.join(', ')}`);
}

descreverPessoa('João', 25, 'futebol', 'música', 'leitura');
// Saída: João tem 25 anos e gosta de: futebol, música, leitura
```

Neste exemplo, `nome` e `idade` são parâmetros normais, enquanto `hobbies` captura todos os argumentos restantes em um array.

**Comparação com o `arguments`**

Antes da introdução do parâmetro rest, a maioria dos desenvolvedores usava o objeto `arguments` para lidar com um número variável de argumentos. No entanto, o parâmetro rest é preferido porque é mais claro e fácil de usar:

```jsx
function somar() {
  const numeros = Array.from(arguments);
  return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(somar(1, 2, 3)); // Saída: 6
```

**Vantagens do Parâmetro Rest**

- **Clareza**: É mais claro e intuitivo do que `arguments`.
- **Compatibilidade com Métodos de Array**: O array resultante do rest parameter pode usar diretamente os métodos de array como `map`, `filter`, e `reduce`.