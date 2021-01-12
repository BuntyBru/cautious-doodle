/*
Stock Span Problem
 *https://www.geeksforgeeks.org/the-stock-span-problem/ 

 */

let stockSpanArr = [10, 4, 5, 90, 120, 80];

const stockSpan = arr => {
  let resArr = new Array(arr.length);
  resArr[0] = 1;

  for (let index = 1; index < arr.length; index++) {
    resArr[index] = 1;
    let index2 = index - 1;
    while (index2 >= 0 && arr[index] >= arr[index2]) {
      console.log(index, index2);
      resArr[index] += 1;
      index2 -= 1;
    }
  }
  return resArr;
};

console.log(stockSpan(stockSpanArr));
