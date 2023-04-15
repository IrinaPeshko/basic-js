const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.splite("~~").length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.arr.push(`( )`);
    } else {
      this.arr.push(`( ${value} )`);
    }
    // console.log(this.arr);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= this.arr.length
    ) {
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    return this.arr.join("~~");
  },
};

module.exports = {
  chainMaker,
};

console.log(
  chainMaker
    .reverseChain()
    .reverseChain()
    .reverseChain()
    .addLink(NaN)
    .reverseChain()
    .addLink(null)
    .addLink(1.233)
    .addLink(true)
    .addLink(false)
    .removeLink(3)
    .addLink(1.233)
    .finishChain()
);
