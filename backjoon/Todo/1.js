// 빈병(a) 를 가져다주면 콜라(b)를 주는 마트, n개 가져다주면 몇병 받나?
function solution(a, b, n) {
  let answer = 0;

  let cola = n;
  while (cola >= 2 && cola >= a) {
    const newCola = Math.floor(cola / a);
    answer += newCola * b;
    cola = newCola * b + (cola - newCola * a);
  }
  return answer;
}

console.log(solution(2, 1, 20));

/**
 * 3, 2. 20 => 36
 * n: 20, a: 2, b: 1 => anwer = 0
 * n: 10 => answer = 10
 * n: 5 => answer = 10 + 5
 *
 */
