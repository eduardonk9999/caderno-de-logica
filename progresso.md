# Progresso

## Perfil
- Início: 2026-10-29
- Linguagem: JavaScript (sempre)
- Nível inicial: a avaliar no primeiro problema
- Meta: dominar os padrões clássicos de entrevista e melhorar lógica

## Dificuldades recorrentes
- Índice x quantidade: achou que [1,2,3,1] tinha 3 itens "porque o índice começa no 0" (off-by-one).
- Rodar código: `:!node %` no nvim não funcionou; usar `! node problemas/<arq>.js` no prompt do Claude (eu vejo a saída).
- Esqueleto grande de uma vez o deixa perdido → arquivo cresce aos poucos.
- Escopo: onde declarar variável (fora da função = compartilhada; dentro do for = recria a cada volta).
- Matemática: achou que o ² (O(n²)) era "dobrar". Entendeu com: dobrar 3×2=6 vs ao quadrado 3×3=9 (o desenho do quadrado sozinho não bastou).
- Chaves `{}`: confundiu onde fecha o for vs a função (return false dentro do for). Indentação dele fica bagunçada → ajuda a se perder.

## Log de sessões

### 2026-10-29 — Setup
- Criada a estrutura de estudo e o modo mentor.
- Próximo passo: padrão 1 (Arrays & Hashing) → começar por Contains Duplicate / Two Sum.

### 2026-10-29 / 2026-11-01 — 217 Contains Duplicate ✅ (com dicas)
- Chegou sozinho na ideia: "lembrar os que já vi" (analogia do caderninho + cartas).
- Aprendeu: `Set` (`add`, `has`) e `for...of`. Acertou has(7)=true / has(5)=false explicando o porquê.
- Escreveu a função ele mesmo. Erros no caminho: has(nums) em vez de has(num); Set global (sujo entre testes) — achou que ia dentro do for; return false dentro do for.
- ENTENDEU O(n) (ficou muito feliz — "finalmente"). Explicação que funcionou: tabela 4→4, 10→10, 1mi→1mi cartas.
- Viu a força bruta O(n²) ("roubaram o caderninho" → decorar um e comparar com todos). Somou 3+2+1=6 sozinho. Escolheu o Set.
- Próximo passo: revisão do 217 em 02/nov (do zero); depois 242 Valid Anagram.

### 2026-11-02 — Revisão 1 do 217 (com cola)
- Escreveu certo e rodou de primeira, MAS admitiu sozinho que consultou o caderno (honesto!). Conta como revisão com consulta → refazer +1d.
- Próximo: revisão 217 sem cola em 2026-11-03; depois 242 Valid Anagram.

### 2026-11-03 — Revisão 2 do 217 ✅ (de cabeça)
- Escreveu sem caderno. 1 bug: `nums.has(n)` em vez de `caderno.has(n)` (TypeError: nums.has is not a function). Corrigiu sozinho depois que mostrei como ler a mensagem de erro.
- Errou o nome do arquivo no `! node` 2x (faltou o `0217-`) — reforçar Tab pra completar.
- Próximo: 242 Valid Anagram. Revisão 217 em 2026-11-06.
