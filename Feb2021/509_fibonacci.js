const fib = function(n) {
  const fibNums = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      newNum = 0;
    };
    if (i === 1) {
      newNum = 1;
    };
    if (i > 1) {
      newNum = fibNums[i-2] + fibNums[i-1]
    }
    fibNums.push(newNum);
  };
  return fibNums[n];
};

console.log(fib(1))