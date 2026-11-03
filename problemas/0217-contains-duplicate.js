// [1, 2, 3, 1]
// Tem número repetido? Qual?
//
// R: 1

// ─── O caderninho em JS ───


//caderninho.add(7); // anota o 7

//console.log(caderninho.has(7)); // o 7 está lá?
//console.log(caderninho.has(5)); // o 5 está lá?

// ─── Virar as cartas uma por uma ───

const nums = [1, 2, 3, 1];


// ─── AGORA É VOCÊ ───
// 1. olha no caderninho: já está lá?  → se sim, return true
// 2. se não está, anota no caderninho
// no fim → return false

function containsDuplicate(nums) {
  const caderninho = new Set(); // caderninho vazio

  // escreve aqui
  for (const num of nums) {
  console.log("virei a carta:", num);


    if(caderninho.has(num)) {
      return true
    } else {
      caderninho.add(num)
    }
  }

  return false

}

console.log(containsDuplicate([1, 2, 3, 1]), "← deveria ser true");
console.log(containsDuplicate([1, 2, 3, 4]), "← deveria ser false");
