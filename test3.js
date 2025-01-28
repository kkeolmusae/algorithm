function solution(members, p) {
  const dict = {}; // 추천인 저장용
  const result = {}; // 멤버별 점수
  for (let idx = 0; idx < members.length; idx++) {
    const m = members[idx];
    [newbie, recommender] = m.split(" ");

    dict[newbie] = recommender; // 추천인 저장
    result[newbie] = {};
    result[newbie]["point"] = 0; // 포인트 세팅
    result[newbie]["idx"] = idx; // 인덱스 세팅

    let rec = recommender;
    let bonus = p;
    while (true) {
      if (rec !== "-") {
        result[rec]["point"] += bonus; // 추천인 점수 더하기
        rec = dict[rec]; // 추천인 바꾸기
        bonus = Math.floor(bonus / 10); // 추천인 점수 바꾸기
      } else {
        break;
      }
    }
  }
  return Object.entries(result)
    .sort(([, a], [, b]) => {
      if (a.point !== b.point) {
        return b.point - a.point; // 포인트 내림차순
      }
      return a.idx - b.idx; // 포인트가 같으면 idx 오름차순
    })
    .map(([key, value]) => `${key} ${value.point}`);
}

members = ["covy -", "teo covy", "felix teo", "vex covy"];
p = 123;
console.log(solution(members, p));

members = ["a -", "b a", "c b", "d c", "e d", "f d"];
p = 500;
console.log(solution(members, p));

members = ["ww -", "xx -", "yy -", "zz yy"];
p = 200;
console.log(solution(members, p));
