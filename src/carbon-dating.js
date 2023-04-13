const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  const finalActivity = +sampleActivity;
  if (finalActivity <= 0 || finalActivity > 15) {
    return false;
  }
  if (!+sampleActivity) {
    return false;
  }

  let N = Math.log(MODERN_ACTIVITY / finalActivity);
  let K = Math.LN2 / HALF_LIFE_PERIOD;
  let result = Math.ceil(N / K);
  return result;
}

console.log(dateSample("1"));

module.exports = {
  dateSample,
};
