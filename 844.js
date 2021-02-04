/*

844. Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

*/

const updateInput = function(string) {
  const array = string.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '#') {
      array.splice(i-1,2);
    };
  };
  newString = array.join('');
  return newString;
};

const backspaceCompare = function(S, T) {
  const new_S = updateInput(S);
  const new_T = updateInput(T);
  if (new_S === new_T) {
    return true;
  }
  return false;
};


console.log(backspaceCompare(
  "ab##", "c#d#"))