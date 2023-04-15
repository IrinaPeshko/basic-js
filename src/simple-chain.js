const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.arr.push(`( )`);
    } else {
      const element = `( ${value} )`;
      // .replace("{}", "{ }");
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.arr.length
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join("~~");
    this.arr = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
