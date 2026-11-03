# Arrays & Hashing

## Quando usar (sinais no enunciado)
- "tem repetido?", "já apareceu antes?", "conte quantas vezes"
- Precisa **lembrar** de coisas que já viu enquanto percorre a lista

## Ideia central
Caderninho 📒 (`Set`/`Map`): a cada carta, **pergunta** se já está lá; se não, **anota**.

## Template de código (JS)
```js
function containsDuplicate(nums) {
  const caderninho = new Set();      // novo a cada chamada (dentro da função!)
  for (const num of nums) {          // vira as cartas
    if (caderninho.has(num)) return true;  // já vi → achei
    caderninho.add(num);                   // não vi → anota
  }
  return false;                      // DEPOIS do for: nunca repetiu
}
```

## Complexidade típica
- Tempo: O(n) — passa por cada número uma vez (entendeu em 2026-11-01!)
- Espaço: O(n) (o caderninho guarda até n números)
- Força bruta sem Set: O(n²) — todo mundo com todo mundo

## Armadilhas que eu já caí
- `has(nums)` (lista inteira) em vez de `has(num)` (carta da vez)
- Set criado fora da função → fica sujo entre testes
- `return false` dentro do for → para na primeira carta

## Problemas resolvidos com este padrão
- 217 Contains Duplicate — `problemas/0217-contains-duplicate.js`
