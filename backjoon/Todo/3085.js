/**
 * 상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.
 * 가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다.
 * 상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다.
 * 이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.
 * 사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.
 *
 *
 * 첫째 줄에 보드의 크기 N이 주어진다. (3 ≤ N ≤ 50)
 * 다음 N개 줄에는 보드에 채워져 있는 사탕의 색상이 주어진다.
 * 빨간색은 C, 파란색은 P, 초록색은 Z, 노란색은 Y로 주어진다.
 * 사탕의 색이 다른 인접한 두 칸이 존재하는 입력만 주어진다.
 *
 * 첫째 줄에 상근이가 먹을 수 있는 사탕의 최대 개수를 출력한다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function swap(candy, a, b, c, d) {
  const temp = candy[a][b];
  candy[a][b] = candy[c][d];
  candy[c][d] = temp;
}

function checkCountColumn(candy) {
  let max = 0;
  for (let i = 0; i < candy.length; i++) {
    let candyCount = {};
    for (let j = 0; j < candy.length; j++) {
      if (candyCount[candy[j][i]]) {
        candyCount[candy[j][i]]++;
      } else {
        max = Math.max(max, Math.max(...Object.values(candyCount)));
        candyCount = {};
        candyCount[candy[j][i]] = 1;
      }
    }
    max = Math.max(max, Math.max(...Object.values(candyCount)));
  }
  return max;
}

function checkCountRow(candy) {
  let max = 0;
  for (let i = 0; i < candy.length; i++) {
    let candyCount = {};
    for (let j = 0; j < candy.length; j++) {
      if (candyCount[candy[i][j]]) {
        candyCount[candy[i][j]]++;
      } else {
        max = Math.max(max, Math.max(...Object.values(candyCount)));
        candyCount = {};
        candyCount[candy[i][j]] = 1;
      }
    }
    max = Math.max(max, Math.max(...Object.values(candyCount)));
  }
  return max;
}

function solution(input) {
  const count = Number(input[0]);
  const candy = [];
  let max = 0;

  for (let i = 1; i <= count; i++) {
    candy.push(input[i].split(""));
  }

  // 열 체크
  for (let j = 0; j < count - 1; j++) {
    for (let i = 0; i < count; i++) {
      // console.log(`candy[i][j] (${candy[i][j]}) candy[${i}][${j}]`);
      // console.log(`candy[i][j+1] (${candy[i][j + 1]}) candy[${i}][${j + 1}]`);
      if (candy[i][j] !== candy[i][j + 1]) {
        swap(candy, i, j, i, j + 1);
        max = Math.max(max, checkCountColumn(candy));
        max = Math.max(max, checkCountRow(candy));
        swap(candy, i, j, i, j + 1);
      }
      // else {
      //   max = Math.max(max, checkCountColumn(candy));
      // }
    }
  }

  // 열 체크
  for (let i = 0; i < count - 1; i++) {
    for (let j = 0; j < count; j++) {
      // console.log(`candy[i][j] (${candy[i][j]}) candy[${i}][${j}]`);
      // console.log(`candy[i+1][j] (${candy[i + 1][j]}) candy[${i + 1}][${j}]`);
      if (candy[i][j] !== candy[i + 1][j]) {
        swap(candy, i, j, i + 1, j);
        max = Math.max(max, checkCountColumn(candy));
        max = Math.max(max, checkCountRow(candy));
        swap(candy, i, j, i + 1, j);
      }
      // else {
      //   max = Math.max(max, checkCountRow(candy));
      // }
    }
  }

  return max;
}
console.log(solution(input));
