function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  const dicA = {};
  for (const digit of a.toString()) {
    dicA[digit] = dicA[digit] + 1 || 1;
  }

  for (const digit of b.toString()) {
    if (isNaN(dicA[digit]) || dicA[digit] < 0) return false;
    dicA[digit] = dicA[digit] - 1;
    if (dicA[digit] < 0) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
