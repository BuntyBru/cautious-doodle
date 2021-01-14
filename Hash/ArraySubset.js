/**
 * Find whether an array is subset of another array
 * https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/
 */

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7];

const isSubset = (arrOne, arrTwo) => {
  let map = new Map();
  arrOne.forEach(x => map.set(x, 1));
  let ctr = 0;
  arrTwo.forEach(x => {
    if (map.get(x)) {
      ctr += 1;
    }
  });

  if (ctr == arrTwo.length) {
    return true;
  }
  return false;
};

console.log(isSubset(arr1, arr2));
