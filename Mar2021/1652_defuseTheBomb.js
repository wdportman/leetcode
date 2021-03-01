const decrypt = function(code, k) {
  const codeDoubled = code.concat(code);
  if (k === 0) {
    return code.map(x => 0);
  };
  if (k > 0) {
    return code.map((x, i) => {
      let output = 0;
      for (let j = 1; j <= k; j++) {
        output += codeDoubled[j+i];
      };
      return output;
    });
  };
  if (k < 0) {
    return code.map((x, i) => {
      let output = 0;
      for (let j = -1; j >= k; j--) {
        output += codeDoubled[j+i+code.length];
      }
      return output;
    });
  };
};

console.log(decrypt([2,4,9,3], -2))