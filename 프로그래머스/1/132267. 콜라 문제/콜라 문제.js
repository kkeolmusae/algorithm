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