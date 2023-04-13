const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      // if (members[i][0] !== " ") {
      //   const UpperWord = members[i].toUpperCase();
      //   teamName.push(UpperWord[0]);
      // }
      const UpperWord = members[i].toUpperCase();
      teamName.push(UpperWord.trim()[0]);
    }
  }
  return teamName.sort().join("");
}

console.log(createDreamTeam([]));
module.exports = {
  createDreamTeam,
};
