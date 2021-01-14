/**
 * Given an array A[] and a number x, check for pair in A[] with sum as x
 * https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/
 */

let arr = [0, -1, 2, -3, 1];
let sum = 3;

const pairInArr = (arr, sum) => {
  let mapArr = new Map();

  arr.forEach(x => {
    let val = sum - x;
    if (mapArr.get(val)) {
      console.log("==>", x, val);
      return;
    } else {
      mapArr.set(x, 1);
    }
  });
};

pairInArr(arr, sum);
