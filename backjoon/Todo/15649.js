// /**
//  * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
//  * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//  */

// const input = require("fs").readFileSync("../input.txt").toString().trim().split(" ");

// function solution(input) {
//   const maxNum = Number(input[0]);
//   const maxLength = Number(input[1]);
//   const num = Number(input);
//   if (num < 10) return num;

//   let answer = 0;
//   let numsCount = 9;
//   let tmp = "";
//   for (let i = 1; i < input.length; i++) {
//     answer += i * numsCount;
//     numsCount *= 10;
//     tmp += "9";
//   }
//   answer += input.length * (num - tmp);
//   return answer;
// }
// console.log(solution(input));

const input = [4, 2];
const N = input.shift();
const M = input.shift();

const visited = new Array(N);
let output = [];
let result = "";

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(result.trim());
