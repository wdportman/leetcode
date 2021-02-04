/*

RUNNING SUM:

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

const runningSum = function(nums) {
  const output = [];
  let sum = 0;
  for (const num of nums) {
    output.push(num + sum);
    sum += num;
  };
  return output;
};

console.log(runningSum([1,2,3,4]));