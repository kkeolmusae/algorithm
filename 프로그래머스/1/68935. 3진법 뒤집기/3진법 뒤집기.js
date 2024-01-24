function solution(n) {
  let tmp = "";
  while (n > 2) {
    tmp += n % 3;
    n = Math.floor(n / 3);
  }
  tmp += n;

  let answer = 0;
  let mul = 1;
  for (let i = tmp.length - 1; i >= 0; i--) {
    answer += Number(tmp[i]) * mul;
    mul *= 3;
  }
  return answer;
}

