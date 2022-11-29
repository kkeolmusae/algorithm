/**
 * 수빈이는 동생 N명과 숨바꼭질을 하고 있다.
 * 수빈이는 현재 점 S에 있고, 동생은 A1, A2, ..., AN에 있다.
 * 수빈이는 걸어서 이동을 할 수 있다. 수빈이의 위치가 X일때 걷는다면 1초 후에 X+D나 X-D로 이동할 수 있다.
 * 수빈이의 위치가 동생이 있는 위치와 같으면, 동생을 찾았다고 한다.
 * 모든 동생을 찾기위해 D의 값을 정하려고 한다. 가능한 D의 최댓값을 구해보자.
 */
const input = require("fs").readFileSync("../input.txt").toString().split("\n");

function euclidean(numA, numB) {
  const result = numA % numB;
  if (result === 0) return numB;

  return euclidean(numB, result);
}

function solution(input) {
  const subin = input[0].trim().split(" ")[1];
  const coordinates = input[1].trim().split(" ");

  const bros = coordinates.map((result) => Math.abs(subin - result));

  if (bros.length === 1) return bros[0];

  let gcd = euclidean(bros[0], bros[1]);
  for (let i = 1; i < bros.length; i++) {
    gcd = euclidean(bros[i], gcd);
  }
  return gcd;
}

console.log(solution(input));
