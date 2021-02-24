/*
TWO SUM:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


// Brute force - O(n^2):
const twoSum = (nums, target) => {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i);
        output.push(j);
        return output;
      };
    };
  };
};

console.log(twoSum([3, 2, 4], 6));


// More elegant - O(n):
const twoSumMoreElegant = (nums, target) => {

  const numObject = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    numObject[num] = i;
  };

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numObject[diff] && numObject[diff] !== i) {
      return [i, numObject[diff]]
    };
  };
};


console.log(twoSumMoreElegant([3, 2, 4], 6));