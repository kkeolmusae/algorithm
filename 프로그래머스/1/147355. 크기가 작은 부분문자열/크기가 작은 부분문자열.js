function solution(t, p) {
  let answer = 0;
  let numString = t.toString();
  let size = p.toString().length;
  let idx = size;

  for (let i = 0; i <= numString.length - size; i++) {
    let num = numString.slice(i, idx);
    if (p >= Number(num)) answer++;
    idx++;
  }
  return answer;
}