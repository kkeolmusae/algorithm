function findLongestSubstring(str) {
  let maxLength = 0;
  let startIdx = 0;
  let endIdx = 0;
  let strMap = new Map();

  while (startIdx < str.length && endIdx < str.length) {
    if ((strMap.has(str[endIdx]) && strMap.get(str[endIdx]) >= startIdx) || strMap.get(str[endIdx]) > startIdx) {
      maxLength = Math.max(maxLength, endIdx - startIdx);
      startIdx = strMap.get(str[endIdx]) + 1;
    }
    strMap.set(str[endIdx], endIdx);
    endIdx++;
  }
  maxLength = Math.max(maxLength, endIdx - startIdx);

  return maxLength;
}

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

function findLongestSubstring3(str) {
  let maxLength = 0;
  let dict = {};
  let startIdx = 0;

  for (let endIdx = 0; endIdx < str.length; endIdx++) {
    let char = str[endIdx];
    // 이전에 처리한적 있으면
    if (!isNaN(dict[char]) && dict[char] >= startIdx) {
      startIdx = dict[char] + 1;
    }
    maxLength = Math.max(endIdx - startIdx + 1, maxLength);
    dict[char] = endIdx;
  }

  return maxLength;
}

console.log(findLongestSubstring3("aabb"));
// console.log(findLongestSubstring3("rithmschool")); // 7
// console.log(findLongestSubstring3("thisisawesome")); // 6
// console.log(findLongestSubstring3("thecatinthehat")); // 7
// console.log(findLongestSubstring3("bbbbbb")); // 1
// console.log(findLongestSubstring3("longestsubstring")); // 8
// console.log(findLongestSubstring3("thisishowwedoit")); // 6

// 0     1     2     3     4     5     6     7     8     9     10    11    12    13    14    15
// l     o     n     g     e     s     t     s     u     b     s     t     r     i     n     g
