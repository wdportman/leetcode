/*
1716. Calculate Money in Leetcode Bank

Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

Example 1:

Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

*/

const moneyOneWeek = function(startingPoint) {
  return startingPoint + 21;
};

const totalMoney = function(n) {
  let fullWeeks = Math.floor(n / 7);
  let additionalDays = n % 7;
  let startingPoint = 1;
  let total = 0;
  //full weeks
  for (let i = 0; i < fullWeeks; i++) {
    let totalWeekly = (startingPoint * 7) + 21;
    total += totalWeekly;
    startingPoint += 1;
  };
  //additional days
  let totalAdditionalDays = (startingPoint * additionalDays);
  total += totalAdditionalDays;
  let addlDaysStartingPoint = 1;
  for (let i = 1; i < additionalDays; i++) {
    total += addlDaysStartingPoint;
    addlDaysStartingPoint += 1;
  };
  return total;
};

console.log(totalMoney(10));