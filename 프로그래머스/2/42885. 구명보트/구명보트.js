function solution(people, limit) {
  let sortedPeople = people.sort((a, b) => {
    return Number(a) - Number(b);
  });
  let answer = 0;
  let i = 0;
  let j = people.length - 1;

  while (i < j) {
    if (sortedPeople[i] + sortedPeople[j] <= limit) {
      i++;
      j--;
      answer++;
    } else {
      j--;
      answer++;
    }
  }

  if (i === j) answer++;
  return answer;
}