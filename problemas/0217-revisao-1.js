// REVISÃO — 217 Contains Duplicate (do zero, sem olhar o antigo!)

function containsDuplicate(nums) {
  const caderninho = new Set()
  
  for (const num of nums) {
    if(caderninho.has(num)) {
      return true;
    } else {
      caderninho.add(num)
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]), "← deveria ser true");
console.log(containsDuplicate([1, 2, 3, 4]), "← deveria ser false");
