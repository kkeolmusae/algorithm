// number의 idx(자릿수)에 해당하는 숫자를 리턴
function getDigit(number, idx) {
  /**
   * Math.floor : 내림
   * Math.abs : 절대값 반환 : number가 음수인 경우일 때를 대비
   * Math.pow : 거듭제곱
   */
  return Math.floor(Math.abs(number) / Math.pow(10, idx)) % 10;
}

// 자릿수가 몇인지 확인
function digitCount(number) {
  // Math.log10 : 밑이 10인 로그의 값을 리턴
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// 배열의 숫자중 자릿수가 가장 큰 경우엔 몇인지
function mostDigits(arr) {
  let max = 0;
  for (let num of arr) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

function radixSort(arr) {
  const maxDigit = mostDigits(arr);

  for (let idx = 0; idx < maxDigit; idx++) {
    // 길이가 10인배열을 만들고 그 하위로 또 배열을 만듬
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const digit = getDigit(num, idx);
      digitBuckets[digit].push(num);
    }
    arr = [].concat(...digitBuckets); // digitsBucket으로 새 배열을 만듬
  }
  return arr;
}

console.log(radixSort([12345, 56, 8, 32, 2020, 1, 442, 323, 143, 32]));
