// REVISÃO 2 — 217 Contains Duplicate (de cabeça, caderno fechado! 🙈)

function containsDuplicate(nums) {
  const caderno = new Set();

  for(const n of nums) {
    if(caderno.has(n)) {
      return true;
    } else {
      caderno.add(n)
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]), "← deveria ser true");
console.log(containsDuplicate([1, 2, 3, 4]), "← deveria ser false");
