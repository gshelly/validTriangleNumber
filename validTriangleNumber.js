let nums = [2, 2, 3, 4]

function triangleNumber(nums) {
  let count = 0
  for (i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] > nums[k] && 
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i]) {
          count += 1;
        }
      }
    }
  }
  return count;
}

triangleNumber(nums);