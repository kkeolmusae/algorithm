/**
 * 첫째 줄에 (A+B)%C,
 * 둘째 줄에 ((A%C) + (B%C))%C,
 * 셋째 줄에 (A×B)%C,
 * 넷째 줄에 ((A%C) × (B%C))%C
 * 를 출력한다.
 */
const input = require("fs").readFileSync("../input.txt").toString().split(" ");

function solution(input) {
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);

  const AA = (A + B) % C;
  const BB = ((A % C) + (B % C)) % C;
  const CC = (A * B) % C;
  const DD = ((A % C) * (B % C)) % C;

  console.log(AA);
  console.log(BB);
  console.log(CC);
  console.log(DD);
}
solution(input);
