const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    let count = 1;
    function findTheSame() {
      if (arrStr[i] === arrStr[i + 1]) {
        count++;
        i++;
        findTheSame();
      } else {
        if (count === 1) {
          result.push(arrStr[i]);
        } else {
          result.push(count, arrStr[i]);
        }
      }
    }
    findTheSame();
  }
  return result.join("");
}

console.log(encodeLine("aabbbc"));

module.exports = {
  encodeLine,
};
