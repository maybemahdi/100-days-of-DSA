// contains-duplicate
function containsDuplicate(numbers: number[]): boolean {
  const seen = new Set<number>();
  for (const num of numbers) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }
  return false;
}

const numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.time("Execution Time");
console.log(containsDuplicate(numbers));
console.timeEnd("Execution Time");
