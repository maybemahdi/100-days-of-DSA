// Leet-Code 1295. Find Numbers with Even Number of Digits
function findNumbersWithEvenNumberOfDigits(numbers: number[]): number {
  return numbers?.filter((num) =>
    num === 0 ? 1 : (Math.floor(Math.log10(Math.abs(num))) + 1) % 2 === 0
  ).length;
}
const nums = [12, 345, 2, 6, 7896];
// const nums = [555, 901, 482, 1771];
console.time("Execution Time");
console.log(findNumbersWithEvenNumberOfDigits(nums));
console.timeEnd("Execution Time");
