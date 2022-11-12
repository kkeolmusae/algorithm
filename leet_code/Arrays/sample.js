var removeElement = function (nums, val) {
  for (let idx = 0; idx < nums.length; ) {
    if (nums[idx] === val) {
      const temp = nums[nums.length - 1];
      nums[nums.length - 1] = nums[idx];
      nums[idx] = temp;
      nums.pop();
      if (nums[idx] === val) {
        continue;
      } else {
        idx++;
      }
    } else {
      idx++;
    }
  }
  return nums;
};
console.log(removeElement([3, 2, 2, 3], 3));
