function validateStackSequence(arr) {
  const target = [1, 2, 3];
  const stack = [];
  let i = 0; // arr 인덱스

  for (const num of target) {
    stack.push(num); // push

    // 스택의 top이 arr 현재 값과 같으면 pop
    while (stack.length > 0 && stack[stack.length - 1] === arr[i]) {
      stack.pop();
      i++;
    }
  }

  // 스택이 비어 있으면 targetArr를 만들 수 있음
  return stack.length === 0;
}

console.log(validateStackSequence([1, 3, 2])); // true
console.log(validateStackSequence([3, 1, 2])); // false
