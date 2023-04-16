const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strStr = String(str);
  let addition;
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  } else {
    options.addition = false;
  }
  addition = options.addition;
  let additionSeparatorStr;
  if (options.additionSeparator !== undefined) {
    additionSeparatorStr = String(options.additionSeparator);
  } else {
    additionSeparatorStr = "|";
  }
  let separatorStr = false;
  if (options.separator == undefined) {
    options.separator = "+";
  }
  {
    separatorStr = String(options.separator);
  }

  if (Number.isInteger(options.additionRepeatTimes)) {
    if (addition) {
      const additionArr = Array(options.additionRepeatTimes).fill(addition);
      if (additionSeparatorStr) {
        strStr += additionArr.join(additionSeparatorStr);
      } else {
        addition = addition.repeat(options.additionRepeatTimes);
        strStr = strStr + addition;
        strStr;
      }
    }
  } else {
    if (addition && strStr && options.repeatTimes !== 1)
      strStr = strStr + addition;
  }

  if (Number.isInteger(options.repeatTimes)) {
    const strArr = Array(options.repeatTimes).fill(strStr);
    if (separatorStr) {
      strStr = strArr.join(separatorStr);
    } else {
      strStr = strArr.join("");
    }
  }
  return strStr;
}

console.log(
  repeater("REPEATABLE_STRING", {
    repeatTimes: 2,
    separator: "222",
    addition: "ADDITION",
    additionRepeatTimes: 3,
  })
);

console.log(
  "REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION"
);

module.exports = {
  repeater,
};
