// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

const transpose = function(matrix) {
  let outputArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    outputArray.push([]);
  }
  for (let subArray of matrix) {
    for (let k = 0; k < subArray.length; k++) {
      outputArray[k].push(subArray[k]);
    }
  }
  return outputArray;
};

const luckyNumbers = function(matrix) {

  const matrixTransposed = transpose(matrix);

  const minimumsRows = [];
  const maximumsColumns = [];

  for (const array of matrix) {
    minimumsRows.push(Math.min(...array));
  };

  for (const array of matrixTransposed) {
    maximumsColumns.push(Math.max(...array))
  };

  const luckyNumbers = minimumsRows.filter(value => maximumsColumns.includes(value));

  return luckyNumbers
  
};

console.log(luckyNumbers([
  [1,   10,   4,    2],
  [9,   3,    8,    1],
  [15,  16,   17,   12]
]))

// Expected output: 12

// console.log(transpose([
//   [1,   10,   4,    2],
//   [9,   3,    8,    1],
//   [15,  16,   17,   12]
// ]))