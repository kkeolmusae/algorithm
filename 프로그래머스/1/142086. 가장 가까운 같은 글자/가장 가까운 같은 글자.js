function solution(s) {
  let answer = [];
  let mem = {};
  s.split("").map((a, idx) => {
    if (mem[a] === undefined) {
      mem[a] = idx;
      answer.push(-1);
    } else {
      answer.push(idx - mem[a]);
      mem[a] = idx;
    }
  });
  return answer;
}