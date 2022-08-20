function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // 문자가 일치하지 않으면 break;
      if (short[j] !== long[i + j]) break;

      // j가 short의 길이까지 왔으면 => 찾음
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveStringSearch("lorie loledloledloledloledloledloled", "lol"));
