// 242. Valid Anagram
// "amor" e "roma" → true      "aab" e "abb" → false

// ─── O caderninho que CONTA: Map ───

const caderninho = new Map(); // caderninho vazio

caderninho.set("a", 1); // anota: a vale 1

// console.log(caderninho.get("a")); // quanto vale o "a"?
// console.log(caderninho.get("z")); // quanto vale o "z"?

// ─── O truque de contar ───

const contagem = new Map();

for (const letra of "amor") {   // for...of funciona em palavra também: uma letra por vez
  contagem.set(letra, (contagem.get(letra) || 0) + 1);
}

console.log(contagem);
