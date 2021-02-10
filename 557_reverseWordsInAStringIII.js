/*

557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

*/

const reverseWords = function(input) {

  const inputArray = input.split(' ');
  const output = [];

  for (const word of inputArray) {
    output.push(word.split('').reverse().join(''));
  };

  return output.join(' ');

};

console.log(reverseWords("Let's take LeetCode contest"));