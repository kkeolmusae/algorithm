/**
 * 최근에 ICPC 탐사대는 남아메리카의 잉카 제국이 놀라운 문명을 지닌 카잉 제국을 토대로 하여 세워졌다는 사실을 발견했다.
 * 카잉 제국의 백성들은 특이한 달력을 사용한 것으로 알려져 있다.
 * 그들은 M과 N보다 작거나 같은 두 개의 자연수 x, y를 가지고 각 년도를 <x:y>와 같은 형식으로 표현하였다.
 * 그들은 이 세상의 시초에 해당하는 첫 번째 해를 <1:1>로 표현하고,
 * 두 번째 해를 <2:2>로 표현하였다. <x:y>의 다음 해를 표현한 것을 <x':y'>이라고 하자.
 * 만일 x < M 이면 x' = x + 1이고, 그렇지 않으면 x' = 1이다.
 * 같은 방식으로 만일 y < N이면 y' = y + 1이고, 그렇지 않으면 y' = 1이다.
 * <M:N>은 그들 달력의 마지막 해로서, 이 해에 세상의 종말이 도래한다는 예언이 전해 온다.
 * 예를 들어, M = 10 이고 N = 12라고 하자. 첫 번째 해는 <1:1>로 표현되고,
 * 11번째 해는 <1:11>로 표현된다. <3:1>은 13번째 해를 나타내고,
 * <10:12>는 마지막인 60번째 해를 나타낸다.
 * 네 개의 정수 M, N, x와 y가 주어질 때, <M:N>이 카잉 달력의 마지막 해라고 하면
 * <x:y>는 몇 번째 해를 나타내는지 구하는 프로그램을 작성하라.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function getGCD(i, j) {
  let temp = 0;
  while (j) {
    temp = i % j;
    i = j;
    j = temp;
  }
  return i;
}

function solution(input) {
  const [count, ...calendars] = [...input];

  const answer = [];

  for (let i = 0; i < calendars.length; i++) {
    const [M, N, x, y] = calendars[i].split(" ").map(Number);

    if (N === 1) {
      answer.push(x);
      continue;
    } else if (M === 1) {
      answer.push(y);
      continue;
    }

    let startX = 0;
    let startY = 0;
    let years = 0;

    const gcd = getGCD(M, N);
    const lcm = (M * N) / gcd;

    years += x; // 기본셋팅
    startX = x;
    startY = x;

    let result = -1;

    if (startY > N) {
      startY = startY % N === 0 ? N : startY % N;
    }

    while (years <= lcm) {
      if (startX === x && startY === y) {
        result = years;
        break;
      }

      startY += M;

      if (startY > N) {
        startY = startY % N === 0 ? N : startY % N;
      }
      years += M;
    }
    answer.push(result);
  }

  return answer.join("\n");
}
console.log(solution(input));
