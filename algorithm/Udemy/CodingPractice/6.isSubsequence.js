function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let str1Idx = 0;
  let str2Idx = 0;
  while (true) {
    if (!str1[str1Idx]) return true;
    if (!str2[str2Idx]) return false;
    if (str2[str2Idx] === str1[str1Idx]) str1Idx++;
    str2Idx++;
  }
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "string"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
