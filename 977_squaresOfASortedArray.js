/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const output = [];  
  
  for (const num of nums) {
    const square = num**2;
    output.push(square);
  };

  output.sort((a,b) => {
    return a-b;
  })

  return output;
};

console.log(sortedSquares([-4,-1,0,3,10]))