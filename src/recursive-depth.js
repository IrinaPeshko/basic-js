const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// let n = 0;
// let length = 0;
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) return 1;
    if (Array.isArray(arr)) {
      let maxVar = arr.map((e) => this.calculateDepth(e));
      let count = 0;
      for (let el of maxVar) {
        if (el !== NaN && el > count) {
          count = el;
        }
      }
      return 1 + count;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator,
};

// for (let i = 0; i < arr.length; i++) {
//   function findDepth(arr) {
//     if (Array.isArray(arr[i])) {
//       count++;
//       const newArr = arr[i];
//       for (let j = 0; j < arr[i].length; j++) {
//         findDepth(newArr);
//       }
//     }
//   }
//   findDepth(arr);
// }
// console.log(count);
const depthCalc = new DepthCalculator();
