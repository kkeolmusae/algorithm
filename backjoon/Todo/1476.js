/**
 * 준규가 사는 나라는 우리가 사용하는 연도와 다른 방식을 이용한다.
 * 준규가 사는 나라에서는 수 3개를 이용해서 연도를 나타낸다. 각각의 수는 지구, 태양, 그리고 달을 나타낸다.
 * 지구를 나타내는 수를 E, 태양을 나타내는 수를 S, 달을 나타내는 수를 M이라고 했을 때,
 * 이 세 수는 서로 다른 범위를 가진다. (1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19)
 * 우리가 알고있는 1년은 준규가 살고있는 나라에서는 1 1 1로 나타낼 수 있다.
 * 1년이 지날 때마다, 세 수는 모두 1씩 증가한다. 만약, 어떤 수가 범위를 넘어가는 경우에는 1이 된다.
 * 예를 들어, 15년은 15 15 15로 나타낼 수 있다.
 * 하지만, 1년이 지나서 16년이 되면 16 16 16이 아니라 1 16 16이 된다.
 * 이유는 1 ≤ E ≤ 15 라서 범위를 넘어가기 때문이다.
 * E, S, M이 주어졌고, 1년이 준규가 사는 나라에서 1 1 1일때,
 * 준규가 사는 나라에서 E S M이 우리가 알고 있는 연도로 몇 년인지 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split(" ");

function solution(input) {
  const MAX_E = 15;
  const MAX_S = 28;
  const MAX_M = 19;

  const [e, s, m] = input.map(Number);

  let answer = 1;
  // while (start[0] !== e || start[1] !== s || start[2] !== m) {
  //   start[0]++;
  //   start[1]++;
  //   start[2]++;

  //   if (start[0] > MAX_E) start[0] = 1;
  //   if (start[1] > MAX_S) start[1] = 1;
  //   if (start[2] > MAX_M) start[2] = 1;

  //   answer++;
  // }
  // return answer;`

  while (true) {
    if ((answer - e) % MAX_E === 0 && (answer - s) % MAX_S === 0 && (answer - m) % MAX_M === 0) {
      break;
    }
    answer++;
  }
  return answer;
}
console.log(solution(input));
