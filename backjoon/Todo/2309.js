/**
 * 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
 * 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
 * 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
 * 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 *
 * 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,
 * 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
 *
 * 일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.
 */

const input = require("fs").readFileSync("../input.txt").toString().trim().split("\n");

function solution(input) {
  const heightList = input.map(Number);
  const sortedHeightList = heightList.sort((a, b) => {
    return a - b;
  });

  const result = [];

  try {
    for (let a = 0; a <= sortedHeightList.length - 1; a++) {
      for (let b = 1; b <= sortedHeightList.length - 1; b++) {
        for (let c = 2; c <= sortedHeightList.length - 1; c++) {
          for (let d = 3; d <= sortedHeightList.length - 1; d++) {
            for (let e = 4; e <= sortedHeightList.length - 1; e++) {
              for (let f = 5; f <= sortedHeightList.length - 1; f++) {
                for (let g = 6; g <= sortedHeightList.length - 1; g++) {
                  if (
                    sortedHeightList[a] + sortedHeightList[b] + sortedHeightList[c] + sortedHeightList[d] + sortedHeightList[e] + sortedHeightList[f] + sortedHeightList[g] ===
                    100
                  ) {
                    result.push(sortedHeightList[a]);
                    result.push(sortedHeightList[b]);
                    result.push(sortedHeightList[c]);
                    result.push(sortedHeightList[d]);
                    result.push(sortedHeightList[e]);
                    result.push(sortedHeightList[f]);
                    result.push(sortedHeightList[g]);
                    throw "fin";
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (err) {
    return result.join("\n");
  }

  return sortedHeightList.slice(0, 7).join("\n");
}
console.log(solution(input));
