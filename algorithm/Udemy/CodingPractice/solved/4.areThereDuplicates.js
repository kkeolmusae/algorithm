// FrequencyCount / Multiple Pointers
function areThereDuplicates(...args) {
  const dic = {};
  for (const data of args) {
    dic[data] = dic[data] + 1 || 1;
    if (dic[data] === 2) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
