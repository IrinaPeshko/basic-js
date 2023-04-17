const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const map = new Map();
  for (let name of names) {
    if (!map.has(name)) {
      map.set(name, 1);
    } else {
      let count = map.get(name);
      map.set(name, count + 1);
      name = name + `(${count})`;
      map.set(name, count);
    }
  }
  for (let nameFile of map.keys()) {
    result.push(nameFile);
  }
  return result;
}

module.exports = {
  renameFiles,
};

module.exports = {
  renameFiles,
};

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
// ["file", "file(1)", "image", "file(1)(1)", "file(2)"];
