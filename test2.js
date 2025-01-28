function solution(goods, boxes) {
  goods.sort();
  boxes.sort();

  gIdx = 0;
  bIdx = 0;

  result = 0;
  while (bIdx < boxes.length) {
    // 박스 크기가 더 크거나 같으면 => 담을 수 있음
    if (boxes[bIdx] >= goods[gIdx]) {
      result += 1;
      gIdx += 1;
    }
    bIdx += 1;
  }
  return result;
}

goods = [5, 3, 7];
boxes = [3, 7, 6];
console.log(solution(goods, boxes));

goods = [1, 2];
boxes = [2, 3, 1];
console.log(solution(goods, boxes));

goods = [3, 8, 6];
boxes = [5, 6, 4];
console.log(solution(goods, boxes));
